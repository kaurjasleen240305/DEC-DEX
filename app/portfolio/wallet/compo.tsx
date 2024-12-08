'use client'

import React, { useState } from 'react'

type Wallet = {
  network_name: string
  address: string
  success: boolean
}

const contractAddress = (address: string) => {
  return address.slice(0, 6) + '...' + address.slice(-4)
}

export default function WalletDropdown() {
  const [selectedNetwork, setSelectedNetwork] = useState<Wallet>(wallets[0])
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (wallet: Wallet) => {
    setSelectedNetwork(wallet)
    setIsOpen(false)
  }

  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-700 bg-opacity-20 backdrop-blur-sm text-white py-1 px-3 rounded-md flex items-center space-x-1 text-sm"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span>{selectedNetwork.network_name}</span>
          <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isOpen && (
          <ul
            className="absolute right-0 z-10 mt-1 w-40 bg-blue-100 bg-opacity-90 backdrop-blur-sm rounded-md shadow-lg max-h-60 overflow-auto"
            role="listbox"
          >
            {wallets.map((wallet) => (
              <li
                key={wallet.network_name}
                onClick={() => handleSelect(wallet)}
                className="px-3 py-1 cursor-pointer hover:bg-blue-200 text-blue-800 text-sm"
                role="option"
                aria-selected={selectedNetwork.network_name === wallet.network_name}
              >
                {wallet.network_name}
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <div className="bg-blue-700 bg-opacity-20 backdrop-blur-sm rounded-md px-3 py-1">
        <p className="text-white font-mono text-sm">{contractAddress(selectedNetwork.address)}</p>
      </div>
    </div>
  )
}

