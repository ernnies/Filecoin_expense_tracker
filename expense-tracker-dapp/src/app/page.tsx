// src/app/page.tsx
export default function Home() {
  return (
    <div className="min-h-screen p-6 md:p-10 bg-gray-900 text-gray-100">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-yellow-300 mb-4">Expense Tracker DApp</h1>
        <p className="text-lg">Your decentralized financial companion</p>
      </header>

      <div className="max-w-4xl mx-auto space-y-12">
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-4">What it does</h2>
          <p>
            Expense Tracker DApp is a sleek, decentralized expense tracker that empowers users to manage earnings, invoices, transactions, savings goals, and notifications on the Filecoin Onchain Cloud. With a dark-themed, responsive UI, it simulates secure storage via FilecoinWarmStorageService, seamless payments with Filecoin Pay, and fast data retrieval through FilCDN, all while offering a user-friendly experience with real-time notifications and wallet integration.
          </p>
        </section>

        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-4">The problem it solves</h2>
          <p>
            Expense Tracker DApp addresses the challenge of managing financial data in a decentralized ecosystem, where traditional centralized trackers lack security and scalability. It solves the pain points of unreliable storage, complex payment systems, and inaccessible data by leveraging Filecoin's warm storage and payment infrastructure, providing a trustworthy, efficient solution for users in the Web3 space to track and secure their financial activities.
          </p>
        </section>

        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-4">Challenges I ran into</h2>
          <p>
            Integrating mock Filecoin Onchain Cloud services posed a challenge due to the absence of a live Synapse SDK, requiring creative placeholder functions. Ensuring seamless UI responsiveness across devices demanded extensive Tailwind CSS adjustments. Resolving initial errors like undefined functions and missing modules required debugging and restructuring the Next.js project. Balancing mock data with future real integration also tested code maintainability.
          </p>
        </section>

        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-4">Technologies I used</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Next.js: For a robust, server-rendered React framework with client-side capabilities.</li>
            <li>TypeScript: To ensure type safety and scalable code structure.</li>
            <li>Tailwind CSS: For a customizable, responsive dark-themed UI with #1a202c and #f6e05e accents.</li>
            <li>ethers.js: To simulate wallet connectivity and Filecoin network interactions.</li>
            <li>Chart.js & react-chartjs-2: For interactive expense visualizations.</li>
            <li>Heroicons: For intuitive UI icons (e.g., Bell, Arrow icons).</li>
            <li>uuid: To generate unique identifiers for data entries.</li>
            <li>Filecoin Onchain Cloud: Simulated integration with FilecoinWarmStorageService, Filecoin Pay, and FilCDN.</li>
          </ul>
        </section>

        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-4">How we built it</h2>
          <p>
            We started with a Next.js TypeScript template, integrating Tailwind CSS for a dark, modern UI. The app's core was built using a custom AppContext for state management, mimicking decentralized data with mock functions in a filecoin.ts module. Components like ExpectedEarnings, Invoices, and SavingsGoals were crafted with reactive forms and tables, styled with Tailwind. The Header and Sidebar were designed for navigation and notifications, while WalletConnect simulated Filecoin wallet integration. Iterative testing ensured responsiveness and functionality across routes.
          </p>
        </section>
      </div>

      <div className="text-center mt-12">
        <a href="/create" className="bg-yellow-300 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-400 transition duration-200">
          Get Started
        </a>
      </div>

      <nav className="mt-8 text-center">
        <ul className="flex justify-center space-x-6">
          <li><a href="/features" className="text-yellow-300 hover:underline">Features</a></li>
          <li><a href="/create" className="text-yellow-300 hover:underline">Create</a></li>
          <li><a href="/dashboard" className="text-yellow-300 hover:underline">Dashboard</a></li>
          <li><a href="/connect" className="text-yellow-300 hover:underline">Connect Wallet</a></li>
        </ul>
      </nav>
    </div>
  );
}