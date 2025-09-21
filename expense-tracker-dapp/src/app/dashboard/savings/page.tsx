// src/app/dashboard/savings/page.tsx
'use client';

import { SavingsGoals } from '@/components/SavingsGoals';

export default function Savings() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-accent">Savings</h1>
      <SavingsGoals />
    </div>
  );
}