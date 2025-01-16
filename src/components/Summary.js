import React from "react";

const Summary = ({ savings }) => {
  return (
    <div className="p-4 border rounded-md shadow-md bg-white">
      <h2 className="text-lg font-bold mb-4">Potential Savings</h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border">Route</th>
            <th className="px-4 py-2 border">Date</th>
            <th className="px-4 py-2 border">User Price</th>
            <th className="px-4 py-2 border">Min Price</th>
            <th className="px-4 py-2 border">Percentile 10 Price</th>
            <th className="px-4 py-2 border">Max Price</th>
            <th className="px-4 py-2 border">Savings (Min Price)</th>
            <th className="px-4 py-2 border">Savings (Percentile 10)</th>
            <th className="px-4 py-2 border">Savings (Max Price)</th>
          </tr>
        </thead>
        <tbody>
          {savings.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2">{item.route}</td>
              <td className="px-4 py-2">{item.date}</td>
              <td className="px-4 py-2">{item.user_price} USD</td>
              <td className="px-4 py-2">{item.min_price} USD</td>
              <td className="px-4 py-2">{item.percentile_10_price} USD</td>
              <td className="px-4 py-2">{item.max_price} USD</td>
              <td className="px-4 py-2">{item.potential_savings_min_price} USD</td>
              <td className="px-4 py-2">{item.potential_savings_percentile_10_price} USD</td>
              <td className="px-4 py-2">{item.potential_savings_max_price} USD</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Summary;
