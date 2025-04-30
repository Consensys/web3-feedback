import React, { useContext, useState, useEffect } from "react";
import { MetamaskProviderContext } from "@site/src/theme/Root";
import styles from "./ConnectWallet.module.css";

// Copy icon SVG component
const CopyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Wallet icon SVG component
const WalletIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '6px' }}>
    <path d="M18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H6.26C4.19 22 2.5 20.31 2.5 18.24V11.51C2.5 9.44 4.19 7.75 6.26 7.75H17.74C19.81 7.75 21.5 9.44 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2.5 12.41V7.84C2.5 6.65 3.23 5.59 4.34 5.17L12.28 2.17C13.52 1.7 14.85 2.62 14.85 3.95V7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22.559 13.9699V16.0299C22.559 16.5799 22.119 17.0299 21.559 17.0499H19.599C18.519 17.0499 17.529 16.2599 17.439 15.1799C17.389 14.5499 17.629 13.9599 18.049 13.5499C18.419 13.1699 18.929 12.9499 19.489 12.9499H21.559C22.119 12.9699 22.559 13.4199 22.559 13.9699Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const reformatMetamaskAccount = (account) =>
  account ? `${account.slice(0, 7)}...${account.slice(-5)}` : null;

const ConnectWallet = () => {
  const {
    metaMaskAccount,
    metaMaskAccountEns,
    metaMaskWalletIdConnectHandler,
    metaMaskDisconnect,
    sdk,
  } = useContext(MetamaskProviderContext);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [copyMessage, setCopyMessage] = useState("Copy to clipboard");
  const [isMobile, setIsMobile] = useState(false);

  const isExtensionActive = sdk.isExtensionActive();
  const showInstallButton =
    !isExtensionActive && !sdk.platformManager?.isMobile;

  // Check if the component is rendered in the mobile sidebar
  useEffect(() => {
    const checkMobile = () => {
      const sidebarEl = document.querySelector('.navbar-sidebar');
      const isVisible = !!sidebarEl && window.getComputedStyle(sidebarEl).display !== 'none';
      setIsMobile(isVisible);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Create a MutationObserver to detect changes in the DOM
    const observer = new MutationObserver(checkMobile);
    
    // Start observing the document body for DOM changes
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'style']
    });
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      observer.disconnect();
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen((value) => !value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(metaMaskAccount);
    setCopyMessage("Copied!");
    setTimeout(() => setCopyMessage("Copy to clipboard"), 2000);
  };

  const handleClickOutside = (event) => {
    if (dropdownOpen && !event.target.closest(`.${styles.walletContainer}`)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (!isMobile) {
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [dropdownOpen, isMobile]);

  const handleDisconnect = () => {
    metaMaskDisconnect();
    setDropdownOpen(false);
  };

  const handleConnectWallet = () => {
    metaMaskWalletIdConnectHandler();
    
    // Close the mobile menu if we're on mobile
    if (isMobile) {
      const closeButton = document.querySelector('.navbar-sidebar__close');
      if (closeButton) {
        setTimeout(() => {
          closeButton.click();
        }, 300);
      }
    }
  };

  if (!metaMaskAccount) {
    return (
      <button className={styles.connectButton} onClick={handleConnectWallet}>
        {showInstallButton ? "Install MetaMask" : "Connect MetaMask"}
      </button>
    );
  }

  return (
    <div className={styles.walletContainer}>
      <button className={styles.walletButton} onClick={toggleDropdown}>
        <span className={styles.walletAddress}>
          {metaMaskAccountEns || reformatMetamaskAccount(metaMaskAccount)}
        </span>
      </button>

      {dropdownOpen && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownItem}>
            <span className={styles.accountLabel}>
              {metaMaskAccountEns || reformatMetamaskAccount(metaMaskAccount)}
            </span>
            <button
              className={styles.copyButton}
              onClick={handleCopy}
              title={copyMessage}>
              <CopyIcon />
            </button>
          </div>
          <button
            className={styles.disconnectButton}
            onClick={handleDisconnect}>
            Disconnect MetaMask
          </button>
        </div>
      )}
    </div>
  );
};

export default ConnectWallet;
