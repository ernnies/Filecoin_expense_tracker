// src/components/WalletConnect.tsx
import styles from './WalletConnect.module.css'; // Retain CSS module import for testing

export function WalletConnect() {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        Connect Wallet
      </button>
    </div>
  );
}