import React, { useState } from "react";
import FileUpload from "../components/FileUpload";
import Chart from "../components/Chart";
import Summary from "../components/Summary";

const Dashboard = ({ username, onLogout }) => {
  const [activeSection, setActiveSection] = useState("upload");
  const [data, setData] = useState([]); // State for chart data
  const [savings, setSavings] = useState([]); // State for summary data

  const handleUploadComplete = async () => {
    try {
      const targetDate = "2024-10-15"; // TODO: Replace with dynamic target date
      const response = await fetch(
        `http://127.0.0.1:8000/fetch_user_rates/?user_email=${username}&target_date=${encodeURIComponent(targetDate)}`,
        {
          headers: {
            "Accept": "application/json",
          },
        }
      );

      const result = await response.json();
      console.log("Data result:", result);

      setData(result); // Update chart data

      // Calculate savings and update state
      const calculatedSavings = result.map((item) => ({
        date: item.date,
        route: `${item.origin} -> ${item.destination}`,
        user_price: item.user_price,
        min_price: item.min_price,
        percentile_10_price: item.percentile_10_price,
        max_price: item.max_price,
        potential_savings_min_price: item.potential_savings_min_price,
        potential_savings_percentile_10_price: item.potential_savings_percentile_10_price,
        potential_savings_max_price: item.potential_savings_max_price,
      }));
      setSavings(calculatedSavings); // Update summary data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-indigo-700 text-white flex flex-col">
        <div className="p-6 text-xl font-bold border-b border-indigo-600">
          Welcome, {username}
        </div>
        <nav className="flex-1">
          <ul className="space-y-2 p-4">
            <li>
              <button
                className={`w-full text-left p-2 rounded ${
                  activeSection === "upload"
                    ? "bg-indigo-600"
                    : "hover:bg-indigo-600"
                }`}
                onClick={() => setActiveSection("upload")}
              >
                Upload File
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left p-2 rounded ${
                  activeSection === "chart"
                    ? "bg-indigo-600"
                    : "hover:bg-indigo-600"
                }`}
                onClick={() => setActiveSection("chart")}
              >
                Chart
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left p-2 rounded ${
                  activeSection === "summary"
                    ? "bg-indigo-600"
                    : "hover:bg-indigo-600"
                }`}
                onClick={() => setActiveSection("summary")}
              >
                Summary
              </button>
            </li>
          </ul>
        </nav>
        <button
          onClick={onLogout}
          className="m-4 bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          {activeSection === "upload" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Upload File</h2>
              <FileUpload onUploadComplete={handleUploadComplete} userEmail={username} />
            </div>
          )}
          {activeSection === "chart" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Chart</h2>
              <Chart data={data} />
            </div>
          )}
          {activeSection === "summary" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Summary</h2>
              <Summary savings={savings} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
