// src/lib/types.d.ts
import { ethers } from 'ethers';

// Extend the Window interface to include the ethereum property
interface Window {
  ethereum?: ethers.Eip1193Provider; // Type for Ethereum provider
}

// Existing interfaces (ensure they are present)
export interface WalletState {
  address: string | null;
  isConnected: boolean;
}

export interface ExpectedEarning {
  id: string;
  amount: number;
  description: string;
  date: string;
  isReceived: boolean;
}

export interface Invoice {
  id: string;
  amount: number;
  description: string;
  dueDate: string;
  isPaid: boolean;
}

export interface Transaction {
  id: string;
  amount: number;
  description: string;
  date: string;
  type: 'Purchase' | 'Expense';
}

export interface SavingsGoal {
  id: string;
  targetAmount: number;
  currentAmount: number;
  description: string;
  targetDate: string;
}

export interface NotificationSettings {
  email: string;
  enabled: boolean;
}

export interface Notification {
  id: string;
  message: string;
  timestamp: string;
}