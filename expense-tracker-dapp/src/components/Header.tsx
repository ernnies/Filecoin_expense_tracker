// src/components/Header.tsx
'use client';

import { useState } from 'react';
import { useAppContext } from '@/lib/AppContext';
import { WalletConnect } from './WalletConnect';

export function Header() {
  const { notifications, logout, initiateTransfer } = useAppContext();
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => setShowNotifications(!showNotifications);

  return (
    <header className="bg-primary p-4 text-textPrimary flex justify-between items-center">
      <h1 className="text-xl font-bold">Filecoin DApp</h1>
      <div className="flex items-center space-x-4">
        <WalletConnect />
        <button onClick={toggleNotifications} className="relative">
          Notifications ({notifications.length})
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-48 bg-secondary p-2 rounded shadow-lg">
              {notifications.map((n) => (
                <p key={n.id} className="text-sm">{n.message}</p>
              ))}
            </div>
          )}
        </button>
        <button onClick={logout} className="bg-accent text-primary px-2 py-1 rounded">
          Logout
        </button>
      </div>
    </header>
  );
}