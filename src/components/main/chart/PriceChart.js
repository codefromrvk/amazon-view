import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { format, parseISO, subDays } from "date-fns";
import { CustomTooltip } from "./CustomToolTip";

/**
 * Area Chart Component (Right part of the entire chart component)
 *
 * Used to display the range of price variation
 */

const PriceChart = ({ data }) => {
  return (
    <div style={{ width: "55%", height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: -60,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F86112" stopOpacity={0.5} />
              <stop offset="80%" stopColor="#F86112" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} strokeDasharray="4 4" />
          <XAxis
            stroke="black"
            dataKey="date"
            tickLine={false}
            tickCount={5}
            tickFormatter={(str) => {
              const date = parseISO(str);
              return format(date, " d");
            }}
          />
          <YAxis opacity={0} axisLine={false} stroke="black" />
          <Tooltip content={<CustomTooltip />} />
          <Area
            dataKey="value"
            stroke="#F86112"
            fill="url(#color)"
            strokeWidth="2"
            activeDot={{
              fill: "#F86112",
              stroke: "#DCD0D0",
              strokeWidth: 3,
              r: 8,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;
