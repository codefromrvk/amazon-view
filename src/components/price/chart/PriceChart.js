import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { format, parseISO, subDays } from "date-fns";

const PriceChart = ({ data }) => {
  // console.log("demo", data);
  // const dy = formatDate(data);
  return (

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer >
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -60,
              bottom: 0
            }}
          >
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F86112" stopOpacity={1} />
                <stop offset="80%" stopColor="#F86112" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="4 4" />
            <XAxis
              dataKey="date"
              // axisLine={false}
              tickLine={false}
              tickCount={5}
              tickFormatter={(str) => {
                console.log("str",str)

                const date = parseISO(str);
                console.log("price",date)
                return format(date, " d");
              }}
            />
            <YAxis
              opacity={0}
              // allowDecimals={false}
              axisLine={false}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#F86112"
              fill="url(#color)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
  );
};

export default PriceChart;
