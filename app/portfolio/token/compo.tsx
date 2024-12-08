"use client";
import { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const TokensDashboard = () => {
  // Calculate total quantity and the data for pie chart
  const totalQuantity = tokensData.tokens.reduce(
    (acc, token) => acc + parseFloat(token.quantity),
    0
  );

  const chartData = {
    labels: tokensData.tokens.map((token) => token.token_name),
    datasets: [
      {
        label: "Token Distribution",
        data: tokensData.tokens.map((token) => (parseFloat(token.quantity) / totalQuantity) * 100),
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(255, 159, 64, 0.7)",
          "rgba(153, 102, 255, 0.7)",
        ],
        hoverBackgroundColor: [
          "rgba(255, 99, 132, 0.9)",
          "rgba(54, 162, 235, 0.9)",
          "rgba(255, 206, 86, 0.9)",
          "rgba(75, 192, 192, 0.9)",
          "rgba(255, 159, 64, 0.9)",
          "rgba(153, 102, 255, 0.9)",
        ],
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.5)",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 flex flex-col items-center">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-100">Tokens Dashboard</h2>

      {/* Table to show token data */}
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
        <table className="min-w-full table-auto text-center border-collapse">
          <thead>
            <tr className="bg-gray-700 text-gray-100">
              <th className="p-4">Token Name</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Amount (INR)</th>
              <th className="p-4">Network</th>
            </tr>
          </thead>
          <tbody>
            {tokensData.tokens.map((token, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-800/70" : "bg-gray-700/70"
                } hover:bg-gray-600/70 transition`}
              >
                <td className="p-4">{token.token_name}</td>
                <td className="p-4">{token.quantity}</td>
                <td className="p-4">{token.amount_in_inr}</td>
                <td className="p-4">{token.network_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pie Chart to show token contribution */}
      <div className="mt-12 w-full max-w-lg bg-gray-800/30 backdrop-blur-md rounded-lg p-6 shadow-md">
        <Pie
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: { position: "bottom", labels: { color: "#ffffff" } },
              tooltip: {
                callbacks: {
                  label: (tooltipItem) =>{
                    const value = tooltipItem.raw as number;
                    `${tooltipItem.label}: ${value.toFixed(2)}%`
                  }
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default TokensDashboard;
