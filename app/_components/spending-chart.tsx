"use client";

import * as React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

type SpendingChartProps = {
  data: {
    name: string;
    value: number;
  }[];
};

// Use primary color and its variations for a consistent purple theme
const COLORS = [
  "hsl(var(--primary))",
  "hsl(315, 60%, 40%)",
  "hsl(315, 50%, 60%)",
  "hsl(315, 75%, 65%)",
  "hsl(315, 40%, 35%)",
  "hsl(315, 65%, 55%)",
  "hsl(315, 55%, 45%)",
  "hsl(315, 45%, 35%)",
];

export function SpendingChart({ data }: SpendingChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="flex flex-col md:flex-row md:items-center h-[280px]">
      {/* Pie Chart */}
      <div className="w-full md:w-1/2 h-52 md:h-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={70}
              innerRadius={30}
              fill="#8884d8"
              dataKey="value"
              paddingAngle={2}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  stroke="hsl(var(--background))"
                  strokeWidth={2}
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number) => [
                `$${value.toLocaleString()}`,
                "Amount",
              ]}
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                borderColor: "hsl(var(--border))",
                color: "hsl(var(--foreground))",
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                borderRadius: "0.375rem",
                padding: "0.75rem",
                fontWeight: "500",
              }}
              itemStyle={{
                color: "hsl(var(--foreground))",
                padding: "4px 0",
              }}
              labelStyle={{
                color: "hsl(var(--foreground))",
                fontWeight: "bold",
                marginBottom: "8px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-4 flex flex-col justify-center">
        <div className="space-y-3">
          {data.map((item, index) => (
            <div key={item.name} className="flex items-center">
              <div
                className="mr-3 h-4 w-4 rounded-full border border-background flex-shrink-0"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <div className="flex justify-between w-full min-w-0">
                <span className="text-sm font-medium text-foreground truncate mr-2">
                  {item.name}
                </span>
                <span className="text-sm font-medium text-foreground whitespace-nowrap">
                  ${item.value.toLocaleString()} (
                  {((item.value / total) * 100).toFixed(0)}%)
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
