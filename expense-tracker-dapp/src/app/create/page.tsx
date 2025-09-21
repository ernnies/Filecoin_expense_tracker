// src/app/create/page.tsx
'use client';

import { useState } from 'react';
import { useAppContext } from '@/lib/AppContext';
import { ExpectedEarning, Invoice, Transaction } from '@/lib/types';
import { v4 as uuidv4 } from 'uuid';

export default function Create() {
  const { addEarning, addInvoice, addTransaction } = useAppContext();
  const [earningData, setEarningData] = useState<Partial<ExpectedEarning>>({});
  const [invoiceData, setInvoiceData] = useState<Partial<Invoice>>({});
  const [transactionData, setTransactionData] = useState<Partial<Transaction>>({});

  const handleAddEarning = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!earningData.amount || !earningData.description || !earningData.date) return;
    const newEarning: ExpectedEarning = {
      ...earningData,
      id: uuidv4(),
      isReceived: false,
    } as ExpectedEarning;
    await addEarning(newEarning);
    setEarningData({});
  };

  const handleAddInvoice = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!invoiceData.amount || !invoiceData.description || !invoiceData.dueDate) return;
    const newInvoice: Invoice = {
      ...invoiceData,
      id: uuidv4(),
      isPaid: false,
    } as Invoice;
    await addInvoice(newInvoice);
    setInvoiceData({});
  };

  const handleAddTransaction = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!transactionData.amount || !transactionData.description || !transactionData.date || !transactionData.category) return;
    const newTransaction: Transaction = {
      ...transactionData,
      id: uuidv4(),
      type: 'Expense',
    } as Transaction;
    await addTransaction(newTransaction);
    setTransactionData({});
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 md:p-10">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-yellow-300">Expense Tracker DApp - Create & Track</h1>
      </header>

      <main className="max-w-4xl mx-auto space-y-8">
        {/* Add Expected Earning */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-yellow-300 mb-4">Add Expected Earning</h2>
          <form onSubmit={handleAddEarning} className="space-y-4">
            <input
              type="number"
              value={earningData.amount || ''}
              onChange={(e) => setEarningData({ ...earningData, amount: parseFloat(e.target.value) })}
              placeholder="Amount (FIL)"
              className="w-full p-2 bg-gray-700 rounded"
            />
            <input
              type="text"
              value={earningData.description || ''}
              onChange={(e) => setEarningData({ ...earningData, description: e.target.value })}
              placeholder="Description"
              className="w-full p-2 bg-gray-700 rounded"
            />
            <input
              type="date"
              value={earningData.date || ''}
              onChange={(e) => setEarningData({ ...earningData, date: e.target.value })}
              className="w-full p-2 bg-gray-700 rounded"
            />
            <button type="submit" className="w-full bg-yellow-300 text-gray-900 p-2 rounded hover:bg-yellow-400">
              Add Earning
            </button>
          </form>
        </div>

        {/* Add Invoice */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-yellow-300 mb-4">Add Invoice</h2>
          <form onSubmit={handleAddInvoice} className="space-y-4">
            <input
              type="number"
              value={invoiceData.amount || ''}
              onChange={(e) => setInvoiceData({ ...invoiceData, amount: parseFloat(e.target.value) })}
              placeholder="Amount (FIL)"
              className="w-full p-2 bg-gray-700 rounded"
            />
            <input
              type="text"
              value={invoiceData.description || ''}
              onChange={(e) => setInvoiceData({ ...invoiceData, description: e.target.value })}
              placeholder="Description"
              className="w-full p-2 bg-gray-700 rounded"
            />
            <input
              type="date"
              value={invoiceData.dueDate || ''}
              onChange={(e) => setInvoiceData({ ...invoiceData, dueDate: e.target.value })}
              className="w-full p-2 bg-gray-700 rounded"
            />
            <button type="submit" className="w-full bg-yellow-300 text-gray-900 p-2 rounded hover:bg-yellow-400">
              Add Invoice
            </button>
          </form>
        </div>

        {/* Add Transaction */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-yellow-300 mb-4">Add Transaction</h2>
          <form onSubmit={handleAddTransaction} className="space-y-4">
            <input
              type="number"
              value={transactionData.amount || ''}
              onChange={(e) => setTransactionData({ ...transactionData, amount: parseFloat(e.target.value) })}
              placeholder="Amount (FIL)"
              className="w-full p-2 bg-gray-700 rounded"
            />
            <input
              type="text"
              value={transactionData.description || ''}
              onChange={(e) => setTransactionData({ ...transactionData, description: e.target.value })}
              placeholder="Description"
              className="w-full p-2 bg-gray-700 rounded"
            />
            <input
              type="date"
              value={transactionData.date || ''}
              onChange={(e) => setTransactionData({ ...transactionData, date: e.target.value })}
              className="w-full p-2 bg-gray-700 rounded"
            />
            <select
              value={transactionData.category || ''}
              onChange={(e) => setTransactionData({ ...transactionData, category: e.target.value })}
              className="w-full p-2 bg-gray-700 rounded"
            >
              <option value="">Select Category</option>
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Other">Other</option>
            </select>
            <button type="submit" className="w-full bg-yellow-300 text-gray-900 p-2 rounded hover:bg-yellow-400">
              Add Transaction
            </button>
          </form>
        </div>
      </main>

      <nav className="mt-12 text-center">
        <ul className="flex justify-center space-x-6">
          <li><a href="/" className="text-yellow-300 hover:underline">Home</a></li>
          <li><a href="/features" className="text-yellow-300 hover:underline">Features</a></li>
          <li><a href="/dashboard" className="text-yellow-300 hover:underline">Dashboard</a></li>
          <li><a href="/connect" className="text-yellow-300 hover:underline">Connect Wallet</a></li>
        </ul>
      </nav>
    </div>
  );
}