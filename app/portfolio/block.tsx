"use client";
import { useState } from "react";
import { OktoContextType, useOkto } from "okto-sdk-react";
import GetButton from "../components/GetButton";
import axios from "axios";
import TokensDashboard from "./token/compo";
import TransactionDashboard from "./transactions/compo";
import WalletDropdown from "./wallet/compo";
import { LoginButton } from "../components/LoginButton";

const CommonNavbar =()=> {
  const [response, setResponse] = useState<string>("");
//   const { getPortfolio, getWallets } = useOkto() as OktoContextType;
  const [activeTab, setActiveTab] = useState<string>("tokens");
  const auth_token = process.env.NEXT_PUBLIC_AUTH_TOKEN;
  // Functions to handle button clicks
  const handleGetTokens = async () => {
    // const data = await getPortfolio();
    // setResponse(data.tokens);
    setActiveTab("tokens")
}

  const handleGetWallets = async () => {
    setActiveTab("wallets")
  };

  const handleGetTransactions = async () => {
    // const data = await getPortfolioactivity();
    // setResponse(data.activity);
    setActiveTab("transactions")
  };

  return (
    <div>
      {/* Navbar */}
      <header className="flex items-center justify-between bg-gray-800 text-white py-4 px-8">
        <h1 className="text-lg font-bold">Dec-Dex</h1>
        <nav className="flex gap-4">
          {/* Replace buttons with GetButton components */}
          <button
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleGetTokens}
        >
           TOKENS
        </button>
        <button
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleGetTransactions}
        >
          TRANSACTIONS
        </button>
        <LoginButton/>
        <WalletDropdown/>
        </nav>
      </header>

      <main className="mt-4 p-4">
        {activeTab === "tokens"  && (
          <TokensDashboard  />
        )}
        {activeTab === "transactions"  && (
          <TransactionDashboard/>
        )}
      </main>
    </div>
  );
}

export default CommonNavbar;
