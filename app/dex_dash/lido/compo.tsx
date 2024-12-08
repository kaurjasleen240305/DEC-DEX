'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Utility function to convert epoch days into human-readable date
const convertEpochDaysToTime = (epochDays: string) => {
  const secondsInADay = 86400; // 24 hours * 60 minutes * 60 seconds
  const epochInSeconds = Math.floor(Number(epochDays) * secondsInADay);
  return new Date(epochInSeconds * 1000).toLocaleString(); // Convert to human-readable date
};

// Fetch data from Lido API
const call = async () => {
  const options = {
    method: 'GET',
    url: `https://reward-history-backend.lido.fi/?address=${process.env.NEXT_PUBLIC_USER_ADDRESS}`,
  };
  const { data } = await axios.request(options);
  console.log(data);
};
call();

const RewardHistory = () => {
  const [address, setAddress] = useState<string>(''); // Address input state
  const [dataList, setDataList] = useState<any[]>([]); // Data state
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  // Handle address input change
  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  // Fetch data from API
  const fetchData = async () => {
    if (!address) return; // Do not fetch if address is empty

    setLoading(true);
    setError(null);

    try {
      const options = {
        method: 'GET',
        url: `https://reward-history-backend.lido.fi/?address=${address}`,
      };
      const response = await axios.request(options);
      if (!response) throw new Error('Failed to fetch data');

      setDataList(response.data.events);
    } catch (error) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  // Fetch data when address changes
  useEffect(() => {
    if (address) fetchData();
  }, [address]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">
      <div className="p-8 rounded-lg backdrop-blur-md bg-white bg-opacity-20 shadow-lg w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          LIDO DETAILS OF A WALLET ADDRESS
        </h1>
        {/* Address Input Field */}
        <div className="mb-6">
          <input
            type="text"
            value={address}
            onChange={handleAddressChange}
            placeholder="Enter Wallet Address"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Loading Indicator */}
        {loading && <div className="text-white mb-4">Loading...</div>}

        {/* Error Message */}
        {error && <div className="text-red-500 mb-4">{error}</div>}

        {/* Data Table */}
        {!loading && !error && dataList.length > 0 && (
          <table className="min-w-full table-auto bg-transparent border-collapse">
            <thead>
              <tr className="text-white">
                <th className="py-3 px-6">Field</th>
                <th className="py-3 px-6">Value</th>
              </tr>
            </thead>
            <tbody>
              {dataList.map((item, index) => (
                <React.Fragment key={index}>
                  <tr className="text-white border-b border-white border-opacity-20">
                    <td className="py-3 px-6">Balance</td>
                    <td className="py-3 px-6">{item.balance}</td>
                  </tr>
                  <tr className="text-white border-b border-white border-opacity-20">
                    <td className="py-3 px-6">Balance After Decrease</td>
                    <td className="py-3 px-6">{item.balanceAfterDecrease}</td>
                  </tr>
                  <tr className="text-white border-b border-white border-opacity-20">
                    <td className="py-3 px-6">Balance After Increase</td>
                    <td className="py-3 px-6">{item.balanceAfterIncrease}</td>
                  </tr>
                  <tr className="text-white border-b border-white border-opacity-20">
                    <td className="py-3 px-6">Epoch Time</td>
                    <td className="py-3 px-6">{convertEpochDaysToTime(item.epochDays)}</td>
                  </tr>
                  <tr className="text-white border-b border-white border-opacity-20">
                    <td className="py-3 px-6">Epoch Full Days</td>
                    <td className="py-3 px-6">{item.epochFullDays}</td>
                  </tr>
                  <tr className="text-white border-b border-white border-opacity-20">
                    <td className="py-3 px-6">From Address</td>
                    <td className="py-3 px-6">{item.from}</td>
                  </tr>
                  <tr className="text-white border-b border-white border-opacity-20">
                    <td className="py-3 px-6">To Address</td>
                    <td className="py-3 px-6">{item.to}</td>
                  </tr>
                  <tr className="text-white border-b border-white border-opacity-20">
                    <td className="py-3 px-6">Transaction Hash</td>
                    <td className="py-3 px-6">{item.transactionHash}</td>
                  </tr>
                  <tr className="text-white border-b border-white border-opacity-20">
                    <td className="py-3 px-6">Transaction Index</td>
                    <td className="py-3 px-6">{item.transactionIndex}</td>
                  </tr>
                  <tr className="text-white border-b border-white border-opacity-20">
                    <td className="py-3 px-6">Change</td>
                    <td className="py-3 px-6">{item.change}</td>
                  </tr>
                  <tr className="text-white border-b border-white border-opacity-20">
                    <td className="py-3 px-6">Currency Change</td>
                    <td className="py-3 px-6">{item.currencyChange}</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default RewardHistory;
