# Expense_Tracker_DApp

Welcome to **Expense Tracker DApp**, a decentralized expense tracking application built to empower users with financial management in a Web3 environment. This app leverages wallet connectivity and JSON-RPC integration to interact with blockchain networks, including the Filecoin network, providing a secure and scalable platform. This README offers an in-depth overview, setup instructions, and technical details for developers and contributors.

## Table of Contents
- [Overview](#overview)
- [What It Does](#what-it-does)
- [The Problem It Solves](#the-problem-it-solves)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [How It Was Built](#how-it-was-built)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Challenges & Solutions](#challenges--solutions)
- [What We Learned](#what-we-learned)
- [What's Next](#whats-next)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview
Expense Tracker DApp is a Next.js-based application designed to track earnings, invoices, transactions, savings goals, and notifications in a decentralized ecosystem. Built with TypeScript and styled with Tailwind CSS, it features a dark-themed UI with responsive design and real-time wallet connectivity to any network via MetaMask. The app includes a JSON-RPC client to fetch data from the Filecoin network (e.g., `Filecoin.ChainHead`), simulating decentralized financial interactions. This project serves as a prototype for managing finances across Web3 platforms.

- **Repository**: [https://github.com/ernnies/expense-tracker-dapp.git](https://github.com/ernnies/expense-tracker-dapp.git)

## What It Does
Expense Tracker DApp empowers users to:
- **Track Earnings**: Add and mark expected earnings with a user-friendly interface.
- **Manage Invoices**: Create and mark invoices as paid, storing data locally.
- **Log Transactions**: Record purchases and expenses with real-time categorization.
- **Set Savings Goals**: Define and contribute to savings targets with progress tracking.
- **Configure Notifications**: Set email preferences for alerts and updates.
- **Connect Wallets**: Link to any MetaMask-supported network for authentication.
- **Fetch Blockchain Data**: Use JSON-RPC to query Filecoin network data, enhancing decentralization.

The UI features a notification bell with a badge, a navigation sidebar, and a header with connect/disconnect options, styled with a dark theme (#1a202c background, #f6e05e accents).

## The Problem It Solves
Traditional financial trackers rely on centralized servers, risking data breaches and limited transparency. Expense Tracker DApp addresses these by:
- **Decentralized Access**: Enabling wallet-based authentication across multiple networks.
- **Data Interaction**: Using JSON-RPC to interact with Filecoin, offering a glimpse into decentralized data retrieval.
- **User Control**: Providing real-time overspending alerts and historical analysis without intermediaries.
- **Flexibility**: Supporting any EVM-compatible network, catering to diverse Web3 users.

This makes it ideal for individuals seeking a trustless, customizable financial tool in decentralized ecosystems.

## Features
- **Responsive UI**: Dark-themed interface with Tailwind CSS, optimized for all devices.
- **Real-Time Notifications**: Dropdown with badge, triggered by actions like adding transactions.
- **Modular Components**: Reusable React components for earnings, invoices, etc.
- **State Management**: Custom AppContext for managing app data and wallet state.
- **Wallet Connectivity**: Connect to any network via MetaMask with ethers.js.
- **JSON-RPC Integration**: Fetch Filecoin network data (e.g., `ChainHead`) for enhanced functionality.

## Technologies Used
- **Next.js (15.5.0)**: Server-rendered React framework with client-side capabilities.
- **TypeScript**: Ensures type safety and scalable code architecture.
- **Tailwind CSS (3.4.13)**: Utility-first CSS framework for responsive styling.
- **ethers.js (6.13.4)**: Ethereum-compatible library for wallet connectivity.
- **Heroicons (2.1.5)**: SVG icons for intuitive UI elements.
- **uuid (10.0.0)**: Generates unique IDs for data entries.
- **Filecoin JSON-RPC**: Public Glif node (`https://api.node.glif.io`) for network interaction.

## How It Was Built
1. **Initialization**: Created a Next.js project with TypeScript, ESLint, Tailwind CSS, and src directory using `npx create-next-app@latest`.
2. **UI Design**: Developed a dark-themed layout with Tailwind CSS, featuring a sidebar, header, and main content area.
3. **Component Development**: Built React components (e.g., ExpectedEarnings, Invoices) with forms and tables, integrated with AppContext.
4. **State Management**: Implemented a custom AppContext to manage earnings, invoices, transactions, savings, and wallet state.
5. **Wallet Connectivity**: Added ethers.js for generic wallet connection to any MetaMask network.
6. **JSON-RPC Integration**: Created a `callJsonRpc` function in AppContext to query Filecoin data via the Glif node.
7. **Testing**: Iteratively tested responsiveness, wallet connectivity, and RPC calls across routes (/connect, /dashboard, etc.).
8. **Optimization**: Ensured clean CSS in `globals.css` and resolved module import issues.

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ernnies/expense-tracker-dapp.git
   cd expense-tracker-dapp
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app.

4. **Build for Production**:
   ```bash
   npm run build
   npm run start
   ```

## Usage
- Navigate to `/connect` to link your MetaMask wallet to any network.
- Visit `/dashboard` for an overview of earnings, invoices, transactions, savings, and notifications.
- Add earnings, invoices, or transactions via forms; mark items as received/paid to trigger notifications.
- View Filecoin `ChainHead` data on the connect page after wallet connection.
- Check the console for RPC call logs or errors.

## File Structure
```
expense-tracker-dapp/
├── public/              # Static assets (e.g., favicon)
├── src/
│   ├── app/            # Next.js pages (e.g., connect, dashboard)
│   ├── components/     # Reusable React components (e.g., ExpectedEarnings)
│   ├── lib/            # Context and types (e.g., AppContext.tsx, types.ts)
│   └── styles/         # Global styles (e.g., globals.css)
├── package.json        # Project dependencies and scripts
└── README.md           # This file
```

## Challenges & Solutions
- **Wallet Connectivity**: Struggled with network-specific errors; solved by making it agnostic to any MetaMask network.
- **JSON-RPC Integration**: Faced downtime with the Glif node; mitigated by adding error handling and notifications.
- **Responsive Design**: Adjusted Tailwind CSS to fix layout issues on mobile devices.
- **Context Errors**: Resolved `useContext` undefined issues by ensuring AppProvider wraps all components.
- **RPC Response Size**: Handled large `ChainHead` JSON with a scrollable display.

## What We Learned
- Mastered Next.js client-side rendering with TypeScript for dynamic UIs.
- Gained expertise in wallet connectivity across multiple networks using ethers.js.
- Learned to implement and troubleshoot JSON-RPC calls with public nodes.
- Improved UI responsiveness with Tailwind CSS for diverse screen sizes.
- Understood the potential of decentralized data interaction for future enhancements.

## What's Next
- **Real-Time Data**: Integrate live transaction tracking and balance updates.
- **Advanced Analytics**: Add Chart.js for interactive financial visualizations.
- **Multi-Chain Features**: Support network-specific configurations within the app.
- **Enhanced RPC**: Expand JSON-RPC to include methods like `Filecoin.WalletBalance` with authentication.
- **User Feedback**: Refine features based on community input for broader adoption.

## Contributing
1. Fork the repository: [https://github.com/ernnies/expense-tracker-dapp.git](https://github.com/ernnies/expense-tracker-dapp.git)
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Open a Pull Request with a detailed description.

Please adhere to the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact
- **Author**: Ernest [ernnies]
- **Email**: ernest@example.com
- **GitHub**: [https://github.com/ernnies](https://github.com/ernnies)
- **Issues**: Report bugs or suggest features at [https://github.com/ernnies/expense-tracker-dapp/issues](https://github.com/ernnies/expense-tracker-dapp/issues)

---

# Expense Tracker DApp Roadmap: Journey to Decentralized Financial Mastery

Welcome to the **Expense Tracker DApp Roadmap**, a visually stunning guide charting the evolution from its current Wave 1 prototype to the grand finale of Wave 4. Inspired by the cosmic beauty of decentralized networks, this roadmap blends technical ambition with artistic flair, using a dark-themed palette (#1a202c background, #f6e05e accents) to mirror the app's UI.

---

## Roadmap Overview
```
🌌════════════════════ Expense Tracker DApp Roadmap ══════════════════════🌌
         Wave 1        |     Wave 2     |     Wave 3     |     Wave 4    
──────────────┬─────────┼───────────────┼───────────────┼───────────────
  Prototype   |  Growth  |  Expansion    |  Mastery     
  (Now)       |          |               |      
──────────────┴─────────┴───────────────┴───────────────┴───────────────
  🌠 Starting Point    🌠 Scaling Up    🌠 Global Reach  🌠 Final Vision
```

- **Theme**: A celestial journey through decentralized space, with each wave represented by a star (🌠) and cosmic connectors (─, ┬, ┴).
- **Timeline**: Starts at Wave 1, progressing through Waves 2, 3, and 4.
- **Design**: Imagine a starry night sky background with golden orbits (#f6e05e) linking milestones, each wave adorned with nebula-like illustrations.

---

## Wave 1: Prototype
```
🌠════════════════════ Wave 1: Prototype ════════════════════🌠
    🛠️ Initial Build      ➡️ UI and Core Functionality
    🌐 Wallet Connectivity ➡️ Any Network Support
    📡 JSON-RPC Integration ➡️ Filecoin Data Fetch
    📅 Launched: 21/09/2025
    ✨ Current Status: Active
```

### Plan
- **Milestones**:
  - **Initial Build**: Completed a Next.js TypeScript app with components for earnings, invoices, transactions, savings, and notifications.
  - **Wallet Connectivity**: Implemented ethers.js for connecting to any MetaMask network.
  - **JSON-RPC Integration**: Added `callJsonRpc` to fetch Filecoin `ChainHead` data via the Glif node.
- **Technical Highlights**:
  - Used AppContext for state management, fixing context errors.
  - Resolved wallet connection issues by removing network-specific constraints.
  - Handled large JSON-RPC responses with scrollable displays.
- **Visual Illustration**: Picture a nascent star forming in a nebula, with golden lines (#f6e05e) representing wallet and RPC connections to a central node.

---

## Wave 2: Growth
```
🌠════════════════════ Wave 2: Growth ══════════════════════🌠
    📊 Analytics Dashboard ➡️ Chart.js Visuals
    🔄 Real-Time Updates  ➡️ Live Transaction Tracking
    🌍 Multi-Chain Config ➡️ Network-Specific Features
    📅 Target: 01/12/2025
    ✨ Goal: Scalable Prototype
```

### Plan
- **Milestones**:
  - **Analytics Dashboard**: Integrate Chart.js for interactive expense and savings charts.
  - **Real-Time Updates**: Add live transaction and balance tracking.
  - **Multi-Chain Config**: Support network-specific settings within the app.
- **Technical Highlights**:
  - Develop Chart.js components with dynamic data binding.
  - Use WebSocket or polling for real-time updates via RPC.
  - Enhance wallet state to store network preferences.
- **Visual Illustration**: Envision a growing star with orbiting planets (#f6e05e rings), symbolizing analytics and real-time data streams.

---

## Wave 3: Expansion
```
🌠════════════════════ Wave 3: Expansion ════════════════════🌠
    🛒 Community Marketplace ➡️ Decentralized Services
    🔐 Enhanced Security   ➡️ User Data Protection
    🌐 Cross-Chain RPC    ➡️ Broader Network Support
    📅 Target: 30/06/2026
    ✨ Goal: Global Adoption
```

### Plan
- **Milestones**:
  - **Community Marketplace**: Add a marketplace for decentralized financial tools.
  - **Enhanced Security**: Implement encryption for user data.
  - **Cross-Chain RPC**: Expand JSON-RPC to support multiple blockchains.
- **Technical Highlights**:
  - Build a React marketplace component with listings.
  - Integrate AES encryption for local data storage.
  - Develop a multi-RPC handler for different chain endpoints.
- **Visual Illustration**: Imagine a galactic network with multiple stars (chains) linked by golden bridges (#f6e05e), a bustling marketplace, and a secure shield.

---

## Wave 4: Mastery
```
🌠════════════════════ Wave 4: Mastery ══════════════════════🌠
    🌐 Full Decentralization ➡️ P2P Data Management
    🤖 AI Insights         ➡️ Predictive Analytics
    🎉 Community Governance ➡️ DAO Integration
    📅 Target: 31/12/2026
    ✨ Goal: Final Vision
```
