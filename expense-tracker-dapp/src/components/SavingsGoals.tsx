// src/components/SavingsGoals.tsx
'use client';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAppContext } from '@/lib/AppContext';
import type { SavingsGoal } from '@/lib/types';
//import { storeSavingsGoal } from '@/lib/filecoin';

export function SavingsGoals() {
  const { savingsGoals, addSavingsGoal, addToSavings } = useAppContext();
  const [targetAmount, setTargetAmount] = useState('');
  const [description, setDescription] = useState('');
  const [targetDate, setTargetDate] = useState('');
  const [addAmount, setAddAmount] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetAmount || !description || !targetDate) return;
    const newGoal: SavingsGoal = {
      id: uuidv4(),
      targetAmount: parseFloat(targetAmount),
      currentAmount: 0,
      description,
      targetDate,
    };
    await addSavingsGoal(newGoal); // Use the context function
    setTargetAmount('');
    setDescription('');
    setTargetDate('');
  };

  const handleAddToSavings = (e: React.FormEvent, id: string) => {
    e.preventDefault();
    if (!addAmount) return;
    addToSavings(id, parseFloat(addAmount)); // Use the context function
    setAddAmount('');
  };

  return (
    <div className="p-4 bg-secondary rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-accent mb-4">Savings Goals</h2>
      <form onSubmit={handleSubmit} className="space-y-4 mb-4">
        <input
          type="number"
          value={targetAmount}
          onChange={(e) => setTargetAmount(e.target.value)}
          placeholder="Target Amount (FIL)"
          className="w-full p-2 bg-bgPrimary text-textPrimary rounded"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full p-2 bg-bgPrimary text-textPrimary rounded"
        />
        <input
          type="date"
          value={targetDate}
          onChange={(e) => setTargetDate(e.target.value)}
          className="w-full p-2 bg-bgPrimary text-textPrimary rounded"
        />
        <button type="submit" className="bg-accent text-primary px-4 py-2 rounded">
          Add Goal
        </button>
      </form>
      <ul className="space-y-4">
        {savingsGoals.map((goal) => (
          <li key={goal.id} className="flex flex-col bg-bgPrimary p-2 rounded">
            <span>{goal.description} - Target: {goal.targetAmount} FIL (Current: {goal.currentAmount} FIL)</span>
            <span className="text-sm text-textSecondary">Target Date: {goal.targetDate}</span>
            <form onSubmit={(e) => handleAddToSavings(e, goal.id)} className="mt-2 flex space-x-2">
              <input
                type="number"
                value={addAmount}
                onChange={(e) => setAddAmount(e.target.value)}
                placeholder="Add Amount"
                className="p-1 rounded"
              />
              <button type="submit" className="bg-green-500 text-white px-2 py-1 rounded">
                Add
              </button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}