// src/components/Invoices.tsx
'use client';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAppContext } from '@/lib/AppContext';
import type { Invoice } from '@/lib/types';
import { storeInvoice } from '@/lib/filecoin';

export function Invoices() {
  const { invoices, addInvoice, markInvoicePaid } = useAppContext();
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !description || !dueDate) return;
    const newInvoice: Invoice = {
      id: uuidv4(),
      amount: parseFloat(amount),
      description,
      dueDate,
      isPaid: false,
    };
    await addInvoice(newInvoice); // Use the context function
    setAmount('');
    setDescription('');
    setDueDate('');
  };

  return (
    <div className="p-4 bg-secondary rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-accent mb-4">Invoices</h2>
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
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full p-2 bg-bgPrimary text-textPrimary rounded"
        />
        <button type="submit" className="bg-accent text-primary px-4 py-2 rounded">
          Add Invoice
        </button>
      </form>
      <ul className="mt-4 space-y-2">
        {invoices.map((invoice) => (
          <li key={invoice.id} className="flex justify-between items-center">
            <span>{invoice.description} - {invoice.amount} FIL (Due: {invoice.dueDate})</span>
            <button
              onClick={() => markInvoicePaid(invoice.id)}
              className="bg-green-500 text-white px-2 py-1 rounded"
              disabled={invoice.isPaid}
            >
              {invoice.isPaid ? 'Paid' : 'Mark Paid'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}