// src/components/RecentTransactions.tsx
'use client';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAppContext } from '@/lib/AppContext';
import type { Transaction } from '@/lib/types';
import { storeTransaction } from '@/lib/filecoin';

export function RecentTransactions() {
  const { transactions, addTransaction } = useAppContext();
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState<'Purchase' | 'Expense'>('Expense');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !description) return;
    const newTransaction: Transaction = {
      id: uuidv4(),
      amount: parseFloat(amount),
      description,
      date: new Date().toISOString().split('T')[0],
      type,
    };
    await addTransaction(newTransaction); // Use the context function
    setAmount('');
    setDescription('');
    setType('Expense');
  };

  return (
    <div className="p-4 bg-secondary rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-accent mb-4">Recent Transactions</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount (FIL)"
          className="w-full p-2 bg-bgPrimary text-textPrimary rounded"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full p-2 bg-bgPrimary text-textPrimary rounded"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value as 'Purchase' | 'Expense')}
          className="w-full p-2 bg-bgPrimary text-textPrimary rounded"
        >
          <option value="Expense">Expense</option>
          <option value="Purchase">Purchase</option>
        </select>
        <button type="submit" className="bg-accent text-primary px-4 py-2 rounded">
          Add Transaction
        </button>
      </form>
      <ul className="mt-4 space-y-2">
        {transactions.map((transaction) => (
          <li key={transaction.id} className="flex justify-between items-center">
            <span>{transaction.description} - {transaction.amount} FIL ({transaction.type})</span>
            <span className="text-sm text-textSecondary">{transaction.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}