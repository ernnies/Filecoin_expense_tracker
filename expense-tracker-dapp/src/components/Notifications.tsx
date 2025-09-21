// src/components/Notifications.tsx
'use client';

import { useState } from 'react';
import { useAppContext } from '@/lib/AppContext';
import { storeNotificationSettings } from '@/lib/filecoin';

export function Notifications() {
  const { notificationSettings, setNotificationSettings } = useAppContext();
  const [email, setEmail] = useState(notificationSettings.email);
  const [enabled, setEnabled] = useState(notificationSettings.enabled);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await storeNotificationSettings({ email, enabled }); // Simulate FilecoinWarmStorageService
    setNotificationSettings({ email, enabled });
  };

  return (
    <div className="bg-secondary p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-accent mb-4">Notification Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-textPrimary mb-1">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-primary text-textPrimary focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Enter email address"
          />
        </div>
        <div>
          <label className="flex items-center text-textPrimary">
            <input
              type="checkbox"
              checked={enabled}
              onChange={(e) => setEnabled(e.target.checked)}
              className="mr-2"
            />
            Enable Email Notifications
          </label>
        </div>
        <button
          type="submit"
          className="bg-accent text-primary px-4 py-2 rounded hover:bg-yellow-400 transition"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
}