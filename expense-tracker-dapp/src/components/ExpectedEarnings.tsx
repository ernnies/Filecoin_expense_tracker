// src/components/ExpectedEarnings.tsx
'use client';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAppContext } from '@/lib/AppContext';
import type { ExpectedEarning } from '@/lib/types';

export function ExpectedEarnings() {
  const { earnings, addEarning, markEarningReceived } = useAppContext();
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !description || !date) return;
    const newEarning: ExpectedEarning = {
      id: uuidv4(),
      amount: parseFloat(amount),
      description,
      date,
      isReceived: false,
    };
    await addEarning(newEarning);
    setAmount('');
    setDescription('');
    setDate('');
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount (FIL)"
          className="w-full p-2 bg-gray-700 rounded"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full p-2 bg-gray-700 rounded"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 bg-gray-700 rounded"
        />
        <button type="submit" className="w-full bg-yellow-300 text-gray-900 p-2 rounded hover:bg-yellow-400">
          Add Earning
        </button>
      </form>
      <ul className="space-y-2">
        {earnings.map((earning) => (
          <li key={earning.id} className="flex justify-between items-center">
            <span>{earning.description} - {earning.amount} FIL</span>
            <button
              onClick={() => markEarningReceived(earning.id)}
              className={`px-2 py-1 rounded ${earning.isReceived ? 'bg-green-700' : 'bg-green-500'} text-white`}
              disabled={earning.isReceived}
            >
              {earning.isReceived ? 'Received' : 'Mark Received'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}