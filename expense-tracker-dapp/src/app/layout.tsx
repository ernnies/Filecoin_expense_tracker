// src/app/layout.tsx
import '../styles/globals.css'; // Import global CSS
import { AppProvider } from '@/lib/AppContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-100">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}