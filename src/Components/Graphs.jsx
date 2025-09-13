import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";
import { FaChartBar } from "react-icons/fa"; 

const Graphs = ({ graphData }) => {
  const [formattedGraphData, setFormattedGraphData] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    formatGraphData();
  }, [graphData]);

  const fixedColors = {
    Connected: "#3b82f6",
    "Not Connected": "#dbeafe",
    Failed: "#dc2626",
    Warning: "#facc15",
    "Not available": "#a3a3a3",
    Passed: "#22c55e",
    Critical: "#8B0000",
    High: "#FF4500",
    Moderate: "#FFA500",
    Low: "#FFD700",
    nil: "#C0C0C0",
  };

  const formatGraphData = () => {
    const tempGraphData = [];
    const tempColors = [];

    if (!graphData || typeof graphData !== "object") {
      setFormattedGraphData([]);
      return;
    }

    for (let key in graphData) {
      const value = graphData[key];
      if (value > 0) {
        tempGraphData.push({ name: key, value });
        tempColors.push(fixedColors[key] || "#8884d8");
      }
    }

    setFormattedGraphData(tempGraphData);
    setColors(tempColors);
  };

  const getTotal = () =>
    formattedGraphData.reduce((acc, item) => acc + item.value, 0);

  const isPieChart = () => {
    const keys = Object.keys(graphData || {});
    return keys.includes("Connected") || keys.includes("Passed");
  };

  // Show placeholder if no data
  if (!formattedGraphData.length) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-500">
        <FaChartBar size={30} className="mb-2" />
        <p className="text-sm">No Graph data available!</p>
      </div>
    );
  }

  return (
    <>
      {isPieChart() ? (
        // PIE CHART
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="relative w-40 h-40 flex items-center justify-center">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={formattedGraphData}
                  cx="50%"
                  cy="50%"
                  startAngle={90}
                  endAngle={-270}
                  innerRadius={45}
                  outerRadius={60}
                  dataKey="value"
                >
                  {formattedGraphData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colors[index % colors.length]}
                      stroke="none"
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute text-center">
              <p className="text-sm font-bold">{getTotal()}</p>
              <p className="text-gray-500 text-[10px]">Total</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 text-[11px] items-start">
            {formattedGraphData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: colors[index % colors.length] }}
                ></span>
                <span>{item.name}</span>
                <span className="font-semibold">({item.value})</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // STACKED BAR CHART
        <>
          <ResponsiveContainer width="100%" height={20}>
            <BarChart layout="vertical" data={[graphData]}>
              <XAxis type="number" hide />
              <Tooltip />
              {Object.keys(graphData).map((key) => (
                <Bar
                  key={key}
                  dataKey={key}
                  stackId="a"
                  fill={fixedColors[key] || "#ccc"}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap justify-between text-xs mt-2">
            {formattedGraphData.map((item, index) => (
              <span key={index} className="flex items-center gap-1">
                <span
                  className="inline-block w-3 h-3 rounded-full"
                  style={{ backgroundColor: colors[index % colors.length] }}
                ></span>
                {item.name} ({item.value})
              </span>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Graphs;
