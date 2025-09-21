'use client';

import { useAppContext } from '@/lib/AppContext';
import { useEffect, useState } from 'react';

export default function Connect() {
  const { walletState, connectWallet, disconnectWallet, callJsonRpc, notifications } = useAppContext();
  const [chainHead, setChainHead] = useState<any>(null);

  useEffect(() => {
    if (walletState.isConnected && !chainHead) {
      callJsonRpc('Filecoin.ChainHead', [])
        .then((result) => setChainHead(result))
        .catch((error) => console.error('ChainHead fetch failed:', error));
    }
  }, [walletState.isConnected, callJsonRpc, chainHead]);

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined' && window.ethereum.selectedAddress) {
      connectWallet();
    }
  }, [connectWallet]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center bg-gray-900 text-gray-100">
      <h1 className="text-3xl font-bold text-yellow-300 mb-6">Connect Wallet</h1>
      {walletState.isConnected ? (
        <div className="space-y-4">
          <p className="text-lg">Connected: {walletState.address}</p>
          <p className="text-sm text-gray-400">Network: {walletState.networkName || 'Unknown'}</p>
          {chainHead && (
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-md font-semibold text-yellow-300">Chain Head:</h3>
              <pre className="text-sm text-gray-300 overflow-auto max-h-40">{JSON.stringify(chainHead, null, 2)}</pre>
            </div>
          )}
          <button
            onClick={disconnectWallet}
            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-lg">Connect to Your Wallet</p>
          <button
            onClick={connectWallet}
            className="bg-yellow-300 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-400 transition"
          >
            Connect Wallet
          </button>
          <p className="text-sm text-gray-400">Requires MetaMask or compatible wallet.</p>
        </div>
      )}
      <nav className="mt-12">
        <ul className="flex justify-center space-x-6">
          <li><a href="/" className="text-yellow-300 hover:underline">Home</a></li>
          <li><a href="/features" className="text-yellow-300 hover:underline">Features</a></li>
          <li><a href="/create" className="text-yellow-300 hover:underline">Create</a></li>
          <li><a href="/dashboard" className="text-yellow-300 hover:underline">Dashboard</a></li>
        </ul>
      </nav>
    </div>
  );
}