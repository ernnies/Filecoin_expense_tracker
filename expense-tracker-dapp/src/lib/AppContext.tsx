'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ethers } from 'ethers';
import { v4 as uuidv4 } from 'uuid';
import { ExpectedEarning, Invoice, Transaction, SavingsGoal, NotificationSettings, Notification, OverspendingAlert, MonthlyHistory } from './types';

interface AppContextType {
  earnings: ExpectedEarning[];
  invoices: Invoice[];
  transactions: Transaction[];
  savingsGoals: SavingsGoal[];
  notificationSettings: NotificationSettings;
  notifications: Notification[];
  alerts: OverspendingAlert[];
  monthlyHistory: MonthlyHistory[];
  walletState: { address: string | null; isConnected: boolean; networkName?: string };
  logout: () => void;
  addEarning: (earning: ExpectedEarning) => Promise<void>;
  markEarningReceived: (id: string) => void;
  addInvoice: (invoice: Invoice) => Promise<void>;
  markInvoicePaid: (id: string) => void;
  addTransaction: (transaction: Transaction) => Promise<void>;
  addSavingsGoal: (goal: SavingsGoal) => Promise<void>;
  addToSavings: (id: string, amount: number) => void;
  setNotificationSettings: (settings: NotificationSettings) => void;
  getChartData: () => { barData: any; pieData: any; };
  getOverspendingAlerts: () => OverspendingAlert[];
  getHistoryAnalysis: () => MonthlyHistory[];
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  callJsonRpc: (method: string, params: any[]) => Promise<any>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Default Filecoin node URL (public Glif node)
const FILECOIN_RPC_URL = 'https://api.node.glif.io';

export function AppProvider({ children }: { children: ReactNode }) {
  const [earnings, setEarnings] = useState<ExpectedEarning[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [savingsGoals, setSavingsGoals] = useState<SavingsGoal[]>([]);
  const [notificationSettings, setNotificationSettings] = useState<NotificationSettings>({ email: '', enabled: false });
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [alerts, setAlerts] = useState<OverspendingAlert[]>([]);
  const [monthlyHistory, setMonthlyHistory] = useState<MonthlyHistory[]>([]);
  const [walletState, setWalletState] = useState<{ address: string | null; isConnected: boolean; networkName?: string }>({ address: null, isConnected: false });

  const monthlyBudget = 1000; // FIL

  const addTransaction = async (transaction: Transaction) => {
    const newTransaction = { ...transaction, id: uuidv4() };
    setTransactions((prev) => [...prev, newTransaction]);

    const categoryExpenses = transactions.filter(t => t.category === transaction.category).reduce((sum, t) => sum + t.amount, 0) + transaction.amount;
    const categoryBudget = monthlyBudget / 4;
    if (categoryExpenses > categoryBudget) {
      const alert: OverspendingAlert = {
        id: uuidv4(),
        message: `Overspending in ${transaction.category}! Over by ${(categoryExpenses - categoryBudget).toFixed(2)} FIL.`,
        category: transaction.category || 'General',
        overAmount: categoryExpenses - categoryBudget,
        timestamp: new Date().toISOString(),
      };
      setAlerts((prev) => [...prev, alert]);
    }

    updateHistoryAnalysis();
  };

  const updateHistoryAnalysis = () => {
    const history = [
      { month: 'Aug 2025', totalExpenses: 850, creditLine: 2000, overspent: false },
      { month: 'Sep 2025', totalExpenses: 1200, creditLine: 2000, overspent: true },
      { month: 'Oct 2025', totalExpenses: 950, creditLine: 2000, overspent: false },
    ];
    setMonthlyHistory(history);
  };

  useEffect(() => {
    updateHistoryAnalysis();
  }, [transactions]);

  const getChartData = () => {
    const barData = {
      labels: ['Food', 'Transport', 'Entertainment', 'Other'],
      datasets: [{ label: 'Expenses (FIL)', data: [300, 200, 400, 300], backgroundColor: ['#f6e05e', '#1a202c', '#2d3748', '#e2e8f0'] }],
    };
    const pieData = {
      labels: ['Expenses', 'Savings', 'Income'],
      datasets: [{ data: [1200, 500, 800], backgroundColor: ['#f6e05e', '#2d3748', '#1a202c'] }],
    };
    return { barData, pieData };
  };

  const getOverspendingAlerts = () => alerts;
  const getHistoryAnalysis = () => monthlyHistory;

  const addEarning = async (earning: ExpectedEarning) => {
    const newEarning = { ...earning, id: uuidv4(), isReceived: false };
    setEarnings((prev) => [...prev, newEarning]);
  };

  const markEarningReceived = (id: string) => {
    setEarnings((prev) => prev.map((earning) => (earning.id === id ? { ...earning, isReceived: true } : earning)));
  };

  const addInvoice = async (invoice: Invoice) => {
    const newInvoice = { ...invoice, id: uuidv4(), isPaid: false };
    setInvoices((prev) => [...prev, newInvoice]);
  };

  const markInvoicePaid = (id: string) => {
    setInvoices((prev) => prev.map((invoice) => (invoice.id === id ? { ...invoice, isPaid: true } : invoice)));
  };

  const addSavingsGoal = async (goal: SavingsGoal) => {
    const newGoal = { ...goal, id: uuidv4(), currentAmount: 0 };
    setSavingsGoals((prev) => [...prev, newGoal]);
  };

  const addToSavings = (id: string, amount: number) => {
    setSavingsGoals((prev) => prev.map((goal) => (goal.id === id ? { ...goal, currentAmount: goal.currentAmount + amount } : goal)));
  };

  const logout = () => {
    setWalletState({ address: null, isConnected: false });
  };

  const connectWallet = async () => {
    if (typeof window.ethereum === 'undefined') {
      alert('Please install MetaMask or a compatible wallet.');
      return;
    }

    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const address = accounts[0];

      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      let networkName = 'Unknown Network';
      if (chainId === '0x1') networkName = 'Ethereum Mainnet';
      else if (chainId === '0x5') networkName = 'Goerli Testnet';
      else if (chainId === '0xaa36a7') networkName = 'Sepolia Testnet';

      setWalletState({ address, isConnected: true, networkName });
      setNotifications((prev) => [...prev, { 
        id: uuidv4(), 
        message: `Connected to ${networkName}: ${address.slice(0, 6)}...${address.slice(-4)}`, 
        timestamp: new Date().toISOString() 
      }]);
    } catch (error) {
      console.error('Connection failed:', error);
      setNotifications((prev) => [...prev, { 
        id: uuidv4(), 
        message: `Failed to connect: ${error.message || 'Unknown error'}`, 
        timestamp: new Date().toISOString() 
      }]);
    }
  };

  const disconnectWallet = () => {
    setWalletState({ address: null, isConnected: false, networkName: undefined });
    setNotifications((prev) => [...prev, { id: uuidv4(), message: 'Disconnected from wallet', timestamp: new Date().toISOString() }]);
  };

  const callJsonRpc = async (method: string, params: any[] = []) => {
    try {
      const response = await fetch(FILECOIN_RPC_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
          method,
          params,
        }),
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      if (data.error) throw new Error(data.error.message);

      setNotifications((prev) => [...prev, { 
        id: uuidv4(), 
        message: `JSON-RPC call to ${method} successful`, 
        timestamp: new Date().toISOString() 
      }]);
      return data.result;
    } catch (error) {
      console.error('JSON-RPC call failed:', error);
      setNotifications((prev) => [...prev, { 
        id: uuidv4(), 
        message: `JSON-RPC failed: ${error.message || 'Unknown error'}`, 
        timestamp: new Date().toISOString() 
      }]);
      throw error;
    }
  };

  return (
    <AppContext.Provider
      value={{
        earnings,
        invoices,
        transactions,
        savingsGoals,
        notificationSettings,
        notifications,
        alerts,
        monthlyHistory,
        walletState,
        logout,
        addEarning,
        markEarningReceived,
        addInvoice,
        markInvoicePaid,
        addTransaction,
        addSavingsGoal,
        addToSavings,
        setNotificationSettings,
        getChartData,
        getOverspendingAlerts,
        getHistoryAnalysis,
        connectWallet,
        disconnectWallet,
        callJsonRpc,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within an AppProvider');
  return context;
};