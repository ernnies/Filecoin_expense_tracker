# FDP - Filecoin Decentralized Payments

Welcome to **FDP**, a decentralized expense tracking application built for the **Filecoin Onchain**. FDP leverages the power of Filecoin's decentralized storage and payment infrastructure to provide a secure, scalable, and user-friendly platform for managing financial data. This README provides an in-depth overview, setup instructions, and technical details for developers and contributors.

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
FDP (Filecoin Decentralized Payments) is a Next.js-based application designed to track earnings, invoices, transactions, savings goals, and notifications in a decentralized environment. Built with TypeScript and styled with Tailwind CSS, it simulates integration with Filecoin Onchain Cloud services—**FilecoinWarmStorageService**, **Filecoin Pay**, and **FilCDN**—using mock functions in preparation for real Synapse SDK integration. The app features a dark-themed UI with responsive design, real-time notifications, and wallet connectivity, making it a prototype for decentralized financial management.

- **Repository**: [https://github.com/ernnies/fdp.git](https://github.com/ernnies/fdp.git)


## What It Does
FDP empowers users to:
- **Track Earnings**: Add and mark expected earnings (e.g., 0.001 FIL) with simulated storage via FilecoinWarmStorageService.
- **Manage Invoices**: Create and mark invoices as paid, storing data decentrally.
- **Log Transactions**: Record purchases and expenses with mock Filecoin storage.
- **Set Savings Goals**: Define and contribute to savings targets, secured with decentralized storage.
- **Configure Notifications**: Set email preferences with simulated on-chain storage.
- **Handle Transfers**: Initiate mock Filecoin Pay transactions with a modal interface.
- **Connect Wallets**: Simulate Filecoin wallet integration for user authentication.

The UI includes a notification bell with a badge, a sidebar for navigation, and a header with logout and transfer options, all styled with a dark theme (#1a202c background, #f6e05e accents).

## The Problem It Solves
Traditional financial tracking tools rely on centralized servers, posing risks of data breaches, downtime, and lack of transparency. FDP addresses these issues by:
- **Decentralized Storage**: Using FilecoinWarmStorageService to ensure data integrity with Proof of Data Possession (PDP).
- **Secure Payments**: Simulating Filecoin Pay for reliable FIL or ERC-20 transactions.
- **Fast Retrieval**: Mocking FilCDN for efficient data access.
- **Scalability**: Leveraging Filecoin's peer-to-peer network for long-term reliability.

This makes FDP ideal for Web3 users seeking a trustless, incentivized financial tracking solution.

## Features
- **Responsive UI**: Dark-themed interface with Tailwind CSS, optimized for desktop and mobile.
- **Real-Time Notifications**: Dropdown with badge, triggered by actions like adding earnings.
- **Modular Components**: Reusable React components for earnings, invoices, etc.
- **State Management**: Custom AppContext for managing mock decentralized data.
- **Simulated Integration**: Placeholder functions for Filecoin Onchain Cloud services.
- **Wallet Connectivity**: Mock wallet connection with ethers.js for Filecoin network simulation.

## Technologies Used
- **Next.js (15.5.0)**: Server-rendered React framework with client-side capabilities for dynamic UI.
- **TypeScript**: Ensures type safety and scalable code architecture.
- **Tailwind CSS (3.4.13)**: Utility-first CSS framework for responsive, customizable styling.
- **ethers.js (6.13.4)**: Ethereum-compatible library for wallet and network simulation.
- **Heroicons (2.1.5)**: SVG icons for intuitive UI elements.
- **uuid (10.0.0)**: Generates unique IDs for data entries.
- **Filecoin Onchain Cloud**: Simulated integration with FilecoinWarmStorageService, Filecoin Pay, and FilCDN via mock Synapse SDK.

## How It Was Built
1. **Initialization**: Created a Next.js project with TypeScript, ESLint, Tailwind CSS, and src directory using `npx create-next-app@latest`.
2. **UI Design**: Developed a dark-themed layout with Tailwind CSS, featuring a sidebar, header, and main content area.
3. **Component Development**: Built React components (e.g., ExpectedEarnings, Invoices) with forms and tables, integrated with AppContext for state.
4. **State Management**: Implemented a custom AppContext to manage earnings, invoices, transactions, savings, and notifications.
5. **Filecoin Simulation**: Created `src/lib/filecoin.ts` with mock functions (e.g., `storeEarning`, `initiatePayment`) to simulate Filecoin Onchain Cloud services.
6. **Testing**: Iteratively tested responsiveness, functionality, and error handling across routes (/dashboard, /expenses, etc.).
7. **Optimization**: Ensured clean CSS in `globals.css` and resolved module import issues.

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ernnies/fdp.git
   cd fdp
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
- Navigate to `/dashboard` for an overview of earnings, invoices, transactions, savings, and notifications.
- Use `/dashboard/expenses`, `/dashboard/savings`, `/dashboard/invoices`, and `/dashboard/notifications` for specific sections.
- Add earnings, invoices, or transactions via forms; mark items as received/paid to trigger notifications.
- Connect a wallet via the header button (simulated) and initiate transfers with the transfer modal.
- Check the console for mock Filecoin storage/payment logs (e.g., CIDs).



## Challenges & Solutions
- **Undefined Functions**: Encountered `ReferenceError: getEarnings is not defined` due to async server-side calls. Solved by converting to client-side components with AppContext.
- **Module Not Found**: Fixed `Can't resolve '@/components/Invoices'` by ensuring correct file paths and creation.
- **CSS Syntax Error**: Resolved `Unexpected token` in `globals.css` by validating Tailwind directives.
- **Mock Integration**: Simulated Filecoin Onchain Cloud services without Synapse SDK, using console logs for CIDs and payments.

## What We Learned
- Mastered Next.js client-side rendering with TypeScript for scalable UIs.
- Gained insights into simulating decentralized storage and payment systems.
- Improved debugging skills for module resolution and CSS syntax.
- Understood the importance of modular design for future Synapse SDK integration.

## What's Next
- **Real Integration**: Replace mock functions with the Synapse SDK for live FilecoinWarmStorageService, Filecoin Pay, and FilCDN.
- **Multi-Chain Support**: Extend wallet connectivity to other EVM-compatible chains.
- **Advanced UI**: Add animated charts with Chart.js for financial insights.
- **Community Features**: Develop a marketplace for decentralized financial services.
- **Automation**: Implement automated invoice generation and enhanced notification settings based on user feedback.

## Contributing
1. Fork the repository: [https://github.com/ernnies/fdp.git](https://github.com/ernnies/fdp.git)
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
- **Issues**: Report bugs or suggest features at [https://github.com/ernnies/fdp/issues](https://github.com/ernnies/fdp/issues)

---

### Notes
- **Technical Depth**: The README includes detailed sections on technologies, file structure, and challenges, catering to developers.
- **Creativity**: Incorporates a vision for future features (e.g., charts, marketplace) and aligns with Filecoin's decentralized ethos.







---

# FDP Roadmap: Journey to Decentralized Financial Mastery

Welcome to the **FDP Roadmap**, a visually stunning guide charting the evolution of *Filecoin Decentralized Payments* from its current Wave 1 prototype to the grand finale of Wave 4. Inspired by the cosmic beauty of Filecoin's decentralized network, this roadmap blends technical ambition with artistic flair, using a dark-themed palette (#1a202c background, #f6e05e accents) to mirror FDP's UI.

---

## Roadmap Overview
```
🌌══════════════════════ FDP Roadmap ══════════════════════🌌
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
    🛠️ Initial Build      ➡️ UI-Only Foundation
    🌐 Mock Integration   ➡️ Simulated Filecoin Services
    🎨 Dark Theme UI     ➡️ Tailwind CSS Mastery
    📅 Launched: 02/09/2025
    ✨ Current Status: Active
```

### Plan
- **Milestones**:
  - **Initial Build**: Completed a Next.js TypeScript app with core components (Earnings, Invoices, Transactions, Savings, Notifications).
  - **Mock Integration**: Simulated FilecoinWarmStorageService, Filecoin Pay, and FilCDN with `src/lib/filecoin.ts` mock functions.
  - **UI Design**: Implemented a responsive dark-themed UI with #1a202c background and #f6e05e accents using Tailwind CSS.
- **Technical Highlights**:
  - Leveraged AppContext for state management, resolving errors like `getEarnings` undefined.
  - Fixed module not found issues (e.g., `Invoices`) and CSS syntax errors in `globals.css`.
  - Simulated wallet connectivity with ethers.js.
- **Visual Illustration**: Picture a nascent star forming in a nebula, with golden lines (#f6e05e) representing the UI components connecting to a central mock Filecoin node.

---

## Wave 2: Growth
```
🌠════════════════════ Wave 2: Growth ══════════════════════🌠
    🚀 Synapse SDK Integration ➡️ Real Filecoin Storage
    💰 Filecoin Pay Live     ➡️ Secure Payment Rails
    📊 Analytics Dashboard  ➡️ Chart.js Visuals
    📅 Target: 01/12/2025
    ✨ Goal: Scalable Prototype
```

### Plan
- **Milestones**:
  - **Synapse SDK Integration**: Replace mock functions with the live Synapse SDK for FilecoinWarmStorageService, enabling real PDP-verified storage.
  - **Filecoin Pay Live**: Implement the Filecoin Pay smart contract toolkit for one-time and streaming FIL payments.
  - **Analytics Dashboard**: Add Chart.js for visual financial insights (e.g., expense trends, savings progress).
- **Technical Highlights**:
  - Develop API endpoints in `src/lib/filecoin.ts` to interact with Filecoin contracts.
  - Optimize UI with lazy-loaded charts and real-time data fetching.
  - Enhance wallet connectivity to handle Filecoin Mainnet (chainId: 314).
- **Visual Illustration**: Envision a growing star with orbiting planets (#f6e05e rings), symbolizing expanding features, connected by a golden payment stream to a Filecoin node.

---

## Wave 3: Expansion
```
🌠════════════════════ Wave 3: Expansion ════════════════════🌠
    🌍 Multi-Chain Support   ➡️ EVM Compatibility
    🛒 Marketplace Module   ➡️ Decentralized Services
    🔒 Enhanced Security   ➡️ SLA Compliance
    📅 Target: 30/06/2026
    ✨ Goal: Global Adoption
```

### Plan
- **Milestones**:
  - **Multi-Chain Support**: Extend wallet integration to Ethereum, Polygon, and other EVM chains.
  - **Marketplace Module**: Introduce a community marketplace for decentralized financial services (e.g., custom invoices, payment plans).
  - **Enhanced Security**: Implement SLAs with Filecoin Onchain Cloud for guaranteed data retrieval and uptime.
- **Technical Highlights**:
  - Use ethers.js multi-chain adapters for cross-network compatibility.
  - Build a React component for the marketplace with dynamic listings.
  - Integrate Filecoin’s standardized retrieval interfaces for SLA enforcement.
- **Visual Illustration**: Imagine a galactic network with multiple stars (chains) linked by golden bridges (#f6e05e), a bustling marketplace planet, and a secure shield around the Filecoin core.

---

## Wave 4: Mastery
```
🌠════════════════════ Wave 4: Mastery ══════════════════════🌠
    🌐 Full Decentralization ➡️ Peer-to-Peer Network
    🤖 AI Insights         ➡️ Predictive Analytics
    🎉 Community Governance ➡️ DAO Integration
    📅 Target: 
    ✨ Goal: Final Vision
```

### Plan
- **Milestones**:
  - **Full Decentralization**: Transition to a fully peer-to-peer network, reducing reliance on centralized nodes.
  - **AI Insights**: Incorporate machine learning for predictive financial analytics (e.g., savings forecasts).
  - **Community Governance**: Implement a DAO for user-driven feature voting and fund allocation.
- **Technical Highlights**:
  - Develop a P2P layer with Filecoin’s storage miners for data distribution.
  - Integrate an AI API (e.g., TensorFlow.js) for on-client analytics.
  - Deploy a smart contract for DAO functionality using Filecoin Pay rails.
- **Visual Illustration**: Visualize a majestic galaxy with a radiant central star (FDP), surrounded by orbiting AI nodes and a democratic council ring (#f6e05e), all connected by a decentralized web of golden threads.

---

## Design Inspiration
- **Color Palette**: Dark space (#1a202c) with golden accents (#f6e05e) to reflect FDP’s UI and Filecoin’s vibrant ecosystem.
- **Illustrations**: Nebula clouds, orbiting planets, and starry connections to symbolize growth, connectivity, and decentralization.
- **Layout**: A vertical timeline with wave titles in bold, milestones in bullets, and ASCII art for a tech-art fusion.

## How to Visualize
1. **Tools**: Use Figma or Canva to create a graphical version.
   - Background: Gradient dark sky (#1a202c to #2d3748).
   - Waves: Horizontal bands with nebula textures.
   - Milestones: Golden stars (#f6e05e) with text labels.
   - Connectors: Curved golden lines linking waves.
2. **Export**: Save as PNG or SVG for inclusion in the README or GitHub Pages.


### Notes
- **Creativity**: The roadmap uses a cosmic theme to align with Filecoin’s decentralized vision, with ASCII art and descriptive visuals to inspire beauty.
- **Technicality**: Each wave includes specific technical goals (e.g., Synapse SDK, DAO integration) to guide development.
- **Timeline**: Realistic progression from September 2025 to October 2026, with quarterly targets.
- **Actionable**: Provides visualization instructions for creating diagrams, ensuring the roadmap can be graphically enhanced.







