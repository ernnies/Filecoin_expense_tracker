// src/app/dashboard/notifications/page.tsx
'use client';

import { Notifications } from '@/components/Notifications';

export default function NotificationsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-accent">Notifications</h1>
      <Notifications />
    </div>
  );
}