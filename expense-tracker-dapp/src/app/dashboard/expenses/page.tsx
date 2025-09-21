'use client';

import { RecentTransactions } from '@/components/RecentTransactions';

export default function Expenses() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-accent">Expenses</h1>
      <RecentTransactions />
    </div>
  );
}