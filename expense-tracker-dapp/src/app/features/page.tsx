// src/app/features/page.tsx
export default function Features() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 md:p-10">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-300 mb-4">Expense Tracker DApp - Features</h1>
        <p className="text-lg">Discover what our app can do for you</p>
      </header>

      <main className="max-w-4xl mx-auto space-y-8">
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-3 text-lg">
            <li>
              <strong>Expense Tracking:</strong> Monitor and manage earnings, invoices, transactions, and savings goals with a user-friendly interface.
            </li>
            <li>
              <strong>Visual Data Representation:</strong> Display expenses through interactive bar and pie charts for a clear overview of spending patterns.
            </li>
            <li>
              <strong>Overspending Detection:</strong> Analyze expenses against a budget threshold (e.g., 1000 FIL monthly) and alert users when they exceed limits in specific categories.
            </li>
            <li>
              <strong>History and Trend Analysis:</strong> Provide a historical view of expenses and mock credit line usage over the past months, highlighting overspending trends.
            </li>
            <li>
              <strong>Real-Time Notifications:</strong> Deliver instant alerts for overspending or other financial updates, with a count of active notifications.
            </li>
            <li>
              <strong>Data Management:</strong> Add, edit, and mark earnings as received, invoices as paid, and transactions with categorized details.
            </li>
            <li>
              <strong>Savings Goal Tracking:</strong> Set and track progress toward savings goals, allowing manual additions to current amounts.
            </li>
            <li>
              <strong>Responsive Design:</strong> Offer a sleek, dark-themed UI that adapts seamlessly across devices for an optimal user experience.
            </li>
            <li>
              <strong>Introductory Guidance:</strong> Present a detailed intro page explaining the app's purpose, challenges, technologies, and development process.
            </li>
          </ul>
        </section>
      </main>

      <nav className="mt-12 text-center">
        <ul className="flex justify-center space-x-6">
          <li><a href="/" className="text-yellow-300 hover:underline">Home</a></li>
          <li><a href="/create" className="text-yellow-300 hover:underline">Create</a></li>
          <li><a href="/connect" className="text-yellow-300 hover:underline">Connect Wallet</a></li>
        </ul>
      </nav>
    </div>
  );
}