// src/components/Sidebar.tsx
'use client';

import Link from 'next/link';
import { HomeIcon, ChartBarIcon, CurrencyDollarIcon, DocumentTextIcon, BellIcon } from '@heroicons/react/24/solid';

export function Sidebar() {
  return (
    <aside className="w-64 bg-secondary h-screen p-4 shadow-md">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center p-2 hover:bg-accent hover:text-primary rounded transition"
            >
              <HomeIcon className="w-6 h-6 mr-2" /> Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/expenses"
              className="flex items-center p-2 hover:bg-accent hover:text-primary rounded transition"
            >
              <ChartBarIcon className="w-6 h-6 mr-2" /> Expenses
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/savings"
              className="flex items-center p-2 hover:bg-accent hover:text-primary rounded transition"
            >
              <CurrencyDollarIcon className="w-6 h-6 mr-2" /> Savings
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/invoices"
              className="flex items-center p-2 hover:bg-accent hover:text-primary rounded transition"
            >
              <DocumentTextIcon className="w-6 h-6 mr-2" /> Invoices
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/notifications"
              className="flex items-center p-2 hover:bg-accent hover:text-primary rounded transition"
            >
              <BellIcon className="w-6 h-6 mr-2" /> Notifications
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}