import React, { useState, useEffect, useContext } from "react";
import { useColorMode } from "@docusaurus/theme-common";
import { ethers } from "ethers";
import { MetamaskProviderContext } from '@site/src/theme/Root';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';
import styles from "./styles.module.css";

// Only hardcode the portal and schema addresses, not wallet keys
const PORTAL_ADDRESS = "0xF494B93E9661333d0e7Ca1B880B9Aaf79Cb84697";
const SCHEMA_ID = "0xb3cb018b837f70fa9cbb59bcfc59049fb529151399345845bae3d380b81c4120";
const LINEA_SEPOLIA_RPC = "https://rpc.sepolia.linea.build";
const LINEA_SEPOLIA_CHAIN_ID = 59141;

// Portal contract ABI (just the attest function we need)
const PORTAL_ABI = [
  "function attest(tuple(bytes32 schemaId, uint64 expirationDate, bytes subject, bytes attestationData) attestationPayload, bytes[] validationPayload) public payable"
];

// Improved URL extraction that handles both hex and string URLs
const extractArticleURL = (inputData) => {
  try {
    if (!inputData) {
      console.log("No input data provided");
      return null;
    }
    
    // Log the input data for debugging
    console.log("Processing input data:", inputData.slice(0, 100) + "...");
    
    // Create an interface for decoding
    const abiCoder = new ethers.AbiCoder();
    
    // Remove the function selector (first 4 bytes / 8 hex chars + '0x')
    const data = '0x' + inputData.slice(10);
    
    try {
      // First try the new format
      const [attestationPayload, validationPayload] = abiCoder.decode(
        ['tuple(bytes32 schemaId, uint64 expirationDate, bytes subject, bytes attestationData)', 'bytes[]'],
        data
      );
      
      // Then decode the attestation data which contains our actual data
      const [isPositive, url, userAddress] = abiCoder.decode(
        ['bool', 'string', 'address'],
        attestationPayload.attestationData
      );
      
      console.log("Successfully decoded new format:", { isPositive, url, userAddress });
      
      // Basic URL validation
      if (!url || typeof url !== 'string') {
        console.log("Invalid URL format in new format");
        return { url: null };
      }
      
      // Normalize URL
      const normalizedUrl = url.startsWith('/') ? url : '/' + url;
      return {
        url: normalizedUrl.replace(/\/+$/, ''), // Remove trailing slashes
        isPositive
      };
    } catch (decodeError) {
      console.log("Failed to decode new format, trying legacy format...");
      // Try alternative decoding method for older transactions
      try {
        // Get the attestation data section
        const attestationOffset = parseInt(data.slice(64, 128), 16) * 2;
        const attestationData = data.slice(attestationOffset);
        
        // Skip schema ID and expiration date
        const subjectOffset = parseInt(attestationData.slice(128, 192), 16) * 2;
        const subjectData = attestationData.slice(subjectOffset);
        
        // Skip subject length and data
        const subjectLength = parseInt(subjectData.slice(0, 64), 16) * 2;
        const afterSubject = subjectData.slice(64 + subjectLength);
        
        // Get to the actual attestation data
        const attestationDataOffset = parseInt(afterSubject.slice(0, 64), 16) * 2;
        const actualData = afterSubject.slice(attestationDataOffset);
        
        // First 32 bytes is our boolean
        const isPositive = actualData.slice(0, 64).endsWith('1');
        
        // Get the URL data
        const urlOffset = parseInt(actualData.slice(64, 128), 16) * 2;
        const urlData = actualData.slice(urlOffset);
        const urlLength = parseInt(urlData.slice(0, 64), 16) * 2;
        
        if (urlLength === 0 || urlLength > 1000) {
          console.log("Invalid URL length in legacy format");
          return { url: null };
        }
        
        const urlHex = urlData.slice(64, 64 + urlLength);
        const url = ethers.toUtf8String('0x' + urlHex);
        
        console.log("Successfully decoded legacy format:", { isPositive, url });
        
        // Basic URL validation
        if (!url || typeof url !== 'string') {
          console.log("Invalid URL format in legacy format");
          return { url: null };
        }
        
        // Normalize URL
        const normalizedUrl = url.startsWith('/') ? url : '/' + url;
        return {
          url: normalizedUrl.replace(/\/+$/, ''), // Remove trailing slashes
          isPositive
        };
      } catch (error) {
        console.log("Failed to decode legacy format:", error);
        return { url: null };
      }
    }
  } catch (error) {
    console.log("Error extracting URL:", error);
    return { url: null };
  }
};

// Simplified URL matching that checks if paths are related
const isRelatedPath = (path1, path2) => {
  if (!path1 || !path2) return false;
  
  // Normalize paths
  path1 = path1.replace(/\/+$/, '');
  path2 = path2.replace(/\/+$/, '');
  
  // For exact match
  if (path1 === path2) return true;
  
  // For parent/child relationship, ensure we're matching complete path segments
  const path1Parts = path1.split('/').filter(Boolean);
  const path2Parts = path2.split('/').filter(Boolean);
  
  // Only match if paths are exactly equal
  // This prevents /get-started from matching /get-started/build/network-info
  return path1Parts.length === path2Parts.length && 
         path1Parts.every((part, i) => part === path2Parts[i]);
};

const Web3Feedback = () => {
  const { siteConfig } = useDocusaurusContext();
  const LINEA_SCAN_API_KEY = siteConfig.customFields.lineaScanApiKey;
  const location = useLocation();
  
  const { colorMode } = useColorMode();
  const [theme, setTheme] = useState(colorMode);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFetchingCounts, setIsFetchingCounts] = useState(false);
  const [error, setError] = useState(null);
  const [debugInfo, setDebugInfo] = useState(null);
  const [positiveCount, setPositiveCount] = useState(0);
  const [negativeCount, setNegativeCount] = useState(0);
  const [showTransactions, setShowTransactions] = useState(false);
  const [selectedFeedbackType, setSelectedFeedbackType] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [retryCount, setRetryCount] = useState(0);
  const [retryTimeout, setRetryTimeout] = useState(null);
  const [retryTimeLeft, setRetryTimeLeft] = useState(0);
  
  // Get MetaMask context
  const { 
    metaMaskAccount, 
    metaMaskWalletIdConnectHandler, 
    metaMaskProvider,
    sdk
  } = useContext(MetamaskProviderContext);
  
  // Update theme when color mode changes
  useEffect(() => {
    setTheme(colorMode);
  }, [colorMode]);

  // Clear retry timeout on unmount
  useEffect(() => {
    return () => {
      if (retryTimeout) {
        clearTimeout(retryTimeout);
      }
    };
  }, [retryTimeout]);

  // Add countdown timer effect
  useEffect(() => {
    let timer;
    if (retryCount > 0 && retryTimeLeft > 0) {
      timer = setInterval(() => {
        setRetryTimeLeft(prev => Math.max(0, prev - 1));
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [retryCount, retryTimeLeft]);

  // Get current pathname, ensuring consistency
  const getCurrentPathname = () => {
    let pathname = location.pathname;
    pathname = pathname.replace(/\/+$/, ''); // Remove trailing slashes
    if (!pathname.startsWith('/')) {
      pathname = '/' + pathname; // Ensure it starts with a slash
    }
    return pathname;
  };

  const submitFeedback = async (isPositive) => {
    const pathname = getCurrentPathname();
    console.log(`Preparing to submit ${isPositive ? "positive" : "negative"} feedback for ${pathname}`);
    
    // First, ensure user is connected to a wallet
    if (!metaMaskAccount) {
      console.log("No wallet connected. Opening MetaMask...");
      metaMaskWalletIdConnectHandler();
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    setDebugInfo(null);
    
    try {
      console.log("Connected wallet address:", metaMaskAccount);
      
      // Check if we're on the right network
      const provider = metaMaskProvider;
      if (!provider) {
        throw new Error("MetaMask provider not available");
      }
      
      console.log("Getting chain ID...");
      const chainId = await provider.request({ method: 'eth_chainId' });
      const currentChainId = parseInt(chainId, 16);
      
      console.log("Current chain ID:", currentChainId);
      if (currentChainId !== LINEA_SEPOLIA_CHAIN_ID) {
        console.log("Switching to Linea Sepolia...");
        try {
          await provider.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0xe707' }], // Linea Sepolia in hex
          });
        } catch (switchError) {
          // This error code indicates that the chain has not been added to MetaMask
          if (switchError.code === 4902) {
            await provider.request({
              method: 'wallet_addEthereumChain',
              params: [{
                chainId: '0xe707',
                chainName: 'Linea Sepolia',
                nativeCurrency: {
                  name: 'ETH',
                  symbol: 'ETH',
                  decimals: 18
                },
                rpcUrls: [LINEA_SEPOLIA_RPC],
                blockExplorerUrls: ['https://sepolia.lineascan.build/']
              }]
            });
          } else {
            throw switchError;
          }
        }
      }
      
      // Create an ethers interface for encoding the function call
      const portalInterface = new ethers.Interface(PORTAL_ABI);
      
      // Encode the attestation data properly
      const abiCoder = new ethers.AbiCoder();
      const encodedAttestationData = abiCoder.encode(
        ["bool", "string", "address"],
        [isPositive, pathname, metaMaskAccount]
      );
      
      // Encode the subject (user address)
      const encodedSubject = abiCoder.encode(["address"], [metaMaskAccount]);
      
      // Create the attestation payload
      const attestationPayload = {
        schemaId: SCHEMA_ID,
        expirationDate: 0,
        subject: encodedSubject,
        attestationData: encodedAttestationData
      };
      
      // Encode the function call
      const encodedFunction = portalInterface.encodeFunctionData("attest", [
        attestationPayload,
        [] // Empty validation payload
      ]);
      
      // Get the current gas price with a premium to ensure it goes through
      console.log("Getting gas price...");
      const gasPrice = await provider.request({
        method: 'eth_gasPrice',
      });
      
      // Convert gas price to number and add 20% premium
      const gasPriceNum = parseInt(gasPrice, 16);
      const gasPriceWithPremium = Math.floor(gasPriceNum * 1.2).toString(16);
      console.log("Gas price:", gasPrice, "With premium:", "0x" + gasPriceWithPremium);
      
      // Estimate gas for the transaction
      console.log("Estimating gas...");
      const gasEstimate = await provider.request({
        method: 'eth_estimateGas',
        params: [{
          to: PORTAL_ADDRESS,
          from: metaMaskAccount,
          data: encodedFunction,
        }]
      });
      
      // Add 20% to gas estimate as well
      const gasEstimateNum = parseInt(gasEstimate, 16);
      const gasEstimateWithBuffer = Math.floor(gasEstimateNum * 1.2).toString(16);
      console.log("Gas estimate:", gasEstimate, "With buffer:", "0x" + gasEstimateWithBuffer);
      
      // Debug info
      const debugData = {
        chainId: currentChainId,
        address: metaMaskAccount,
        portalAddress: PORTAL_ADDRESS,
        schemaId: SCHEMA_ID,
        gasPrice: parseInt(gasPrice, 16),
        gasPriceWithPremium: parseInt("0x" + gasPriceWithPremium, 16),
        gasEstimate: parseInt(gasEstimate, 16),
        gasEstimateWithBuffer: parseInt("0x" + gasEstimateWithBuffer, 16),
      };
      console.log("Debug data:", debugData);
      setDebugInfo(debugData);
      
      // Create transaction parameters with proper gas settings
      const transactionParameters = {
        to: PORTAL_ADDRESS,
        from: metaMaskAccount,
        data: encodedFunction,
        chainId: '0xe707', // Linea Sepolia chainId in hex
        gasPrice: "0x" + gasPriceWithPremium,
        gas: "0x" + gasEstimateWithBuffer
      };
      
      console.log("Transaction parameters:", transactionParameters);
      
      // Send transaction using provider.request
      console.log("Sending transaction...");
      const txHash = await provider.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      });
      
      console.log("Transaction sent! Hash:", txHash);
      setFeedbackSubmitted(true);

      // Wait for transaction to be mined
      console.log("Waiting for transaction to be mined...");
      const ethersProvider = new ethers.BrowserProvider(provider);
      const receipt = await ethersProvider.waitForTransaction(txHash);
      console.log("Transaction mined!", receipt);

      // Add a longer delay to allow Lineascan to index the transaction
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Force a single refresh of the counts
      fetchAndUpdateCounts();
      
      // Reset after 5 seconds
      setTimeout(() => {
        setFeedbackSubmitted(false);
        setDebugInfo(null);
      }, 5000);
      
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setError(`Failed to submit feedback: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to fetch attestations with retry logic
  const fetchAttestationsWithRetry = async (attempt = 0) => {
    try {
      const currentPath = getCurrentPathname();
      console.log("Current path:", currentPath);

      const API_URL = `https://api-sepolia.lineascan.build/api?module=account&action=txlist&address=${PORTAL_ADDRESS}&startblock=0&endblock=latest&page=1&offset=1000&sort=desc&apikey=${LINEA_SCAN_API_KEY}`;
      
      const response = await fetch(API_URL);
      const data = await response.json();

      if (!data.result || data.status === "0") {
        throw new Error(data.result || "Failed to fetch transactions");
      }

      // Only look at transactions that contain our schema ID
      const relevantTxs = data.result.filter(tx => tx.input.includes(SCHEMA_ID.slice(2)));
      console.log(`Found ${relevantTxs.length} total transactions with our schema ID`);

      let positive = 0;
      let negative = 0;
      let pageTransactions = [];
      let processedCount = 0;
      let errorCount = 0;

      for (const tx of relevantTxs) {
        try {
          processedCount++;
          console.log(`\nProcessing transaction ${processedCount}/${relevantTxs.length} (${tx.hash})`);
          
          // Extract URL and feedback type from transaction data
          const result = extractArticleURL(tx.input);
          if (!result || !result.url) {
            console.log(`Skipping transaction ${tx.hash} - Could not extract URL`);
            errorCount++;
            continue;
          }

          const { url, isPositive } = result;
          
          // Get current path and normalize both URLs for comparison
          const normalizedCurrentPath = currentPath.replace(/\/+$/, '');
          const normalizedTxPath = url.replace(/\/+$/, '');
          
          console.log(`Comparing paths:\nCurrent=${normalizedCurrentPath}\nTx=${normalizedTxPath}`);

          // Check for exact match using the updated path matching
          if (isRelatedPath(normalizedCurrentPath, normalizedTxPath)) {
            console.log(`Found matching transaction ${tx.hash} for ${url} - Is Positive: ${isPositive}`);
            if (isPositive) {
              positive++;
            } else {
              negative++;
            }
            pageTransactions.push({
              ...tx,
              positiveFeedback: isPositive ? 1 : 0,
              negativeFeedback: isPositive ? 0 : 1,
              url
            });
          } else {
            console.log(`Path mismatch - transaction ${tx.hash} is for a different page`);
          }
        } catch (error) {
          errorCount++;
          console.error(`Error processing transaction ${tx.hash}:`, error);
        }
      }

      console.log(`\nProcessing summary:`);
      console.log(`- Total transactions processed: ${processedCount}`);
      console.log(`- Errors encountered: ${errorCount}`);
      console.log(`- Matching transactions found: ${pageTransactions.length}`);
      console.log(`Final counts for ${currentPath} - Positive: ${positive}, Negative: ${negative}`);
      
      setPositiveCount(positive);
      setNegativeCount(negative);
      setTransactions(pageTransactions);
      setError(null);

    } catch (error) {
      console.error("Error fetching attestations:", error);
      setError("Failed to fetch feedback counts");
      
      if (error.message?.includes("rate limit")) {
        const backoffTime = Math.min(1000 * Math.pow(2, attempt), 30000);
        setTimeout(() => fetchAttestationsWithRetry(attempt + 1), backoffTime);
      }
    } finally {
      setIsFetchingCounts(false);
    }
  };

  // Function to fetch attestations and update counts
  const fetchAndUpdateCounts = async () => {
    // Don't fetch if we're already fetching or retrying
    if (isFetchingCounts || retryCount > 0) {
      return;
    }
    
    setIsFetchingCounts(true);
    setRetryCount(0);
    if (retryTimeout) {
      clearTimeout(retryTimeout);
      setRetryTimeout(null);
    }
    await fetchAttestationsWithRetry();
  };

  // Update useEffect to fetch immediately and set initial state
  useEffect(() => {
    setIsFetchingCounts(true);
    fetchAndUpdateCounts();
    
    // Set up periodic refresh with a longer interval
    const refreshInterval = setInterval(() => {
      console.log("🔄 Periodic refresh triggered");
      fetchAndUpdateCounts();
    }, 30000);
    
    return () => {
      if (refreshInterval) clearInterval(refreshInterval);
    };
  }, [location.pathname]); // Add pathname as dependency

  // Function to show transactions modal
  const showTransactionList = (type) => {
    setSelectedFeedbackType(type);
    setShowTransactions(true);
  };

  // Function to format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  // Function to format address
  const formatAddress = (address) => {
    return `${address.substring(0, 6)}...${address.substring(38)}`;
  };

  return (
    <div className={styles.feedbackContainer}>
      {retryCount > 0 && (
        <div className={styles.retryBanner}>
          Rate limited. Retrying in {retryTimeLeft} seconds...
        </div>
      )}
      <div className={styles.feedbackPrompt}>
        {feedbackSubmitted ? (
          <div className={styles.thankYouMessage}>
            Thank you for your feedback!
            {isFetchingCounts && (
              <div style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: 'var(--ifm-color-emphasis-600)' }}>
                {retryCount > 0 ? (
                  `Rate limited. Retrying in ${retryTimeLeft} seconds...`
                ) : (
                  'Updating counts...'
                )}
              </div>
            )}
          </div>
        ) : (
          <>
            <span>Was this page helpful?</span>
            <div className={styles.feedbackButtons}>
              <div className={styles.feedbackButtonContainer}>
                <button
                  className={`${styles.feedbackButton} ${styles.thumbsUp}`}
                  onClick={() => submitFeedback(true)}
                  disabled={isSubmitting || isFetchingCounts}
                  aria-label="Thumbs up"
                >
                  👍
                </button>
                <button
                  className={`${styles.countButton} ${isFetchingCounts ? styles.loading : ''} ${retryCount > 0 ? styles.retrying : ''}`}
                  onClick={() => showTransactionList('positive')}
                  aria-label="Show positive feedback"
                >
                  {isFetchingCounts && retryCount > 0 ? '...' : positiveCount}
                </button>
              </div>
              <div className={styles.feedbackButtonContainer}>
                <button
                  className={`${styles.feedbackButton} ${styles.thumbsDown}`}
                  onClick={() => submitFeedback(false)}
                  disabled={isSubmitting || isFetchingCounts}
                  aria-label="Thumbs down"
                >
                  👎
                </button>
                <button
                  className={`${styles.countButton} ${isFetchingCounts ? styles.loading : ''} ${retryCount > 0 ? styles.retrying : ''}`}
                  onClick={() => showTransactionList('negative')}
                  aria-label="Show negative feedback"
                >
                  {isFetchingCounts && retryCount > 0 ? '...' : negativeCount}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      {isSubmitting && (
        <div className={styles.loadingIndicator}>
          Submitting feedback...
          {isFetchingCounts && (
            <div>
              {retryCount > 0 ? (
                `Rate limited. Retrying in ${retryTimeLeft} seconds...`
              ) : (
                'Updating counts...'
              )}
            </div>
          )}
        </div>
      )}
      {error && (
        <div className={styles.errorMessage}>
          {error}
          {!metaMaskAccount && (
            <button 
              onClick={metaMaskWalletIdConnectHandler}
              className={styles.connectButton}
              style={{marginLeft: '10px', padding: '4px 8px', fontSize: '0.8rem'}}
            >
              Connect MetaMask
            </button>
          )}
        </div>
      )}
      {metaMaskAccount && (
        <div className={styles.walletInfo} style={{fontSize: '0.7rem', marginTop: '0.5rem', color: 'var(--ifm-color-emphasis-600)'}}>
          Connected: {metaMaskAccount.substring(0, 6)}...{metaMaskAccount.substring(38)}
        </div>
      )}
      {debugInfo && (
        <div className={styles.debugInfo} style={{fontSize: '0.8rem', marginTop: '1rem', color: 'var(--ifm-color-emphasis-600)', textAlign: 'left'}}>
          <details>
            <summary>Debug Information</summary>
            <pre>{JSON.stringify(debugInfo, null, 2)}</pre>
          </details>
        </div>
      )}
      {showTransactions && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h3>{selectedFeedbackType === 'positive' ? 'Positive' : 'Negative'} Feedback Transactions</h3>
              <button 
                className={styles.closeButton}
                onClick={() => setShowTransactions(false)}
              >
                ×
              </button>
            </div>
            <div className={styles.modalBody}>
              {transactions
                .filter(tx => 
                  selectedFeedbackType === 'positive' ? tx.positiveFeedback : tx.negativeFeedback
                )
                .map(tx => (
                  <div key={tx.hash} className={styles.transactionItem}>
                    <div>From: {formatAddress(tx.from)}</div>
                    <div>Time: {formatDate(tx.timeStamp * 1000)}</div>
                    <a 
                      href={`https://sepolia.lineascan.build/tx/${tx.hash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.txLink}
                    >
                      View on Explorer
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Web3Feedback;