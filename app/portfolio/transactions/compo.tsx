import React from "react";


function TransactionDashboard() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Transaction Dashboard</h1>
      <div className="overflow-x-auto w-full max-w-6xl">
        <table className="table-auto w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800 text-left">
              <th className="p-4 border border-gray-700">Description</th>
              <th className="p-4 border border-gray-700">Order State</th>
              <th className="p-4 border border-gray-700">Order Type</th>
              <th className="p-4 border border-gray-700">Token</th>
              <th className="p-4 border border-gray-700">Network</th>
              <th className="p-4 border border-gray-700">Quantity</th>
              <th className="p-4 border border-gray-700">Transaction Hash</th>
              <th className="p-4 border border-gray-700">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {transactions.transaction.map((tx, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}
              >
                <td className="p-4 border border-gray-700">{tx.description}</td>
                <td className="p-4 border border-gray-700">{tx.order_state}</td>
                <td className="p-4 border border-gray-700">{tx.order_type}</td>
                <td className="p-4 border border-gray-700">{tx.token_name}</td>
                <td className="p-4 border border-gray-700">{tx.network_name}</td>
                <td className="p-4 border border-gray-700">
                {(parseInt(tx.quantity, 10) / 1e18).toFixed(2)}
                </td>
                <td className="p-4 border border-gray-700 truncate max-w-xs">
                  {tx.transaction_hash}
                </td>
                <td className="p-4 border border-gray-700">
                  {new Date(tx.timestamp * 1000).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionDashboard;
