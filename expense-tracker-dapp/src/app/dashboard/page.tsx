// src/app/dashboard/page.tsx
'use client';

import { useAppContext } from '@/lib/AppContext';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

export default function Dashboard() {
  const { getChartData, getOverspendingAlerts, getHistoryAnalysis } = useAppContext();
  const { barData, pieData } = getChartData();
  const alerts = getOverspendingAlerts();
  const history = getHistoryAnalysis();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 md:p-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-yellow-300">Expense Tracker DApp - Dashboard</h1>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Charts */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-yellow-300 mb-4">Expense Breakdown (Bar Chart)</h2>
          <Bar data={barData} options={{ responsive: true }} />
        </div>

        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-yellow-300 mb-4">Overall Allocation (Pie Chart)</h2>
          <Pie data={pieData} options={{ responsive: true }} />
        </div>

        {/* Overspending Alerts */}
        <div className="bg-red-900 p-4 rounded-lg shadow-lg col-span-full">
          <h2 className="text-xl font-semibold text-yellow-300 mb-4">Overspending Alerts</h2>
          {alerts.length > 0 ? (
            <ul className="space-y-2">
              {alerts.map((alert) => (
                <li key={alert.id} className="bg-red-800 p-2 rounded">
                  <strong>{alert.message}</strong> - Over by {alert.overAmount.toFixed(2)} FIL in {alert.category}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">No overspending detected. Good job!</p>
          )}
        </div>

        {/* History Analysis */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg col-span-full">
          <h2 className="text-xl font-semibold text-yellow-300 mb-4">Expense History & Credit Analysis</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="p-2">Month</th>
                <th className="p-2">Total Expenses (FIL)</th>
                <th className="p-2">Credit Line</th>
                <th className="p-2">Overspent?</th>
              </tr>
            </thead>
            <tbody>
              {history.map((month) => (
                <tr key={month.month} className="border-b border-gray-700">
                  <td className="p-2">{month.month}</td>
                  <td className="p-2">{month.totalExpenses}</td>
                  <td className="p-2">{month.creditLine}</td>
                  <td className="p-2">
                    <span className={month.overspent ? 'text-red-400' : 'text-green-400'}>
                      {month.overspent ? 'Yes' : 'No'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <nav className="mt-12 text-center">
        <ul className="flex justify-center space-x-6">
          <li><a href="/" className="text-yellow-300 hover:underline">Home</a></li>
          <li><a href="/features" className="text-yellow-300 hover:underline">Features</a></li>
          <li><a href="/create" className="text-yellow-300 hover:underline">Create</a></li>
          <li><a href="/connect" className="text-yellow-300 hover:underline">Connect Wallet</a></li>
        </ul>
      </nav>
    </div>
  );
}