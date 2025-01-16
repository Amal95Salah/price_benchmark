import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ data }) => {
  // State to store selected percentiles
  const [selectedPercentiles, setSelectedPercentiles] = useState({
    percentile10: true,
    percentile50: true,
    percentile90: true,
  });

  // Function to toggle selected percentiles
  const handlePercentileToggle = (percentile) => {
    setSelectedPercentiles((prevState) => ({
      ...prevState,
      [percentile]: !prevState[percentile],
    }));
  };

  // Group data by route
  const routes = [...new Set(data.map((item) => `${item.origin} -> ${item.destination}`))];

  // Prepare datasets for each route
  const datasets = routes.map((route) => {
    const routeData = data.filter(
      (item) => `${item.origin} -> ${item.destination}` === route
    );

    let datasetsForRoute = [
      {
        label: `${route} - User Price`,
        data: routeData.map((item) => item.user_price),
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: false,
        yAxisID: "user-price",
      },
    ];

    // Add market prices and percentile datasets if selected
    if (selectedPercentiles.percentile10) {
      datasetsForRoute.push({
        label: `${route} - 10th Percentile Price (Market)`,
        data: routeData.map((item) => item.percentile_10_price),
        borderColor: "rgba(153,102,255,1)",
        backgroundColor: "rgba(153,102,255,0.2)",
        fill: false,
        yAxisID: "market-price",
      });
    }

    if (selectedPercentiles.percentile50) {
      datasetsForRoute.push({
        label: `${route} - Median Price (Market)`,
        data: routeData.map((item) => item.median_price),
        borderColor: "rgba(255,205,86,1)",
        backgroundColor: "rgba(255,205,86,0.2)",
        fill: false,
        yAxisID: "market-price",
      });
    }

    if (selectedPercentiles.percentile90) {
      datasetsForRoute.push({
        label: `${route} - 90th Percentile Price (Market)`,
        data: routeData.map((item) => item.percentile_90_price),
        borderColor: "rgba(255,159,64,1)",
        backgroundColor: "rgba(255,159,64,0.2)",
        fill: false,
        yAxisID: "market-price",
      });
    }

    return datasetsForRoute;
  }).flat();

  // Prepare the chart data object
  const chartData = {
    labels: data.map((item) => item.date),
    datasets: datasets,
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Market vs User Rates",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw;
            return `${context.dataset.label}: ${value}`;
          },
        },
      },
    },
    scales: {
      x: {
        type: "category",
        title: {
          display: true,
          text: "Date",
        },
      },
      "user-price": {
        type: "linear",
        position: "left",
        title: {
          display: true,
          text: "User Price (USD)",
        },
      },
      "market-price": {
        type: "linear",
        position: "right",
        title: {
          display: true,
          text: "Market Price (USD)",
        },
      },
    },
  };

  return (
    <div className="p-4 border rounded-md shadow-md bg-white">
      <h2 className="text-lg font-bold mb-4">Market vs User Rates</h2>

      {/* Percentile Filter Section */}
      <div className="mb-4">
        <label className="mr-2">Select Percentiles to Display:</label>
        <input
          type="checkbox"
          checked={selectedPercentiles.percentile10}
          onChange={() => handlePercentileToggle("percentile10")}
          className="mr-2"
        />
        <span>10th Percentile</span>
        <input
          type="checkbox"
          checked={selectedPercentiles.percentile50}
          onChange={() => handlePercentileToggle("percentile50")}
          className="mx-2"
        />
        <span>50th Percentile (Median)</span>
        <input
          type="checkbox"
          checked={selectedPercentiles.percentile90}
          onChange={() => handlePercentileToggle("percentile90")}
          className="ml-2"
        />
        <span>90th Percentile</span>
      </div>

      <Line data={chartData} options={options} />
    </div>
  );
};

export default Chart;
