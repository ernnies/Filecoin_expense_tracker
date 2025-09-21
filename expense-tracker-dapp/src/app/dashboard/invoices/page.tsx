'use client';

import { Invoices } from '@/components/Invoices';

export default function InvoicesPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-accent">Invoices</h1>
      <Invoices />
    </div>
  );
}