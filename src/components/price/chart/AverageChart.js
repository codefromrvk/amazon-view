import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

export default function AverageChart({ data }) {
  console.log("sdata inside avgchart", data);
  const dataFiltered = [
    {
      max: data.reduce(function (prev, current) {
        return prev.value > current.value ? prev : current;
      }, 0).value,
      min: data.reduce(function (prev, current) {
        return prev.value < current.value ? prev : current;
      }, 0).value
    }
  ];

  return (
    // <ResponsiveContainer width="100%" height="100%">
    <BarChart
      width={150}
      height={300}
      data={dataFiltered}
      margin={{
        top: 10,
        right: 0,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid vertical={false} strokeDasharray="4 4" />
      <XAxis dataKey="value" tickLine={false} />
      {/* tickFormatter={(number) => `Rs.${number}`} */}
      <YAxis axisLine={false} />
      <Tooltip />
      {/* <Legend /> */}
      <Bar dataKey="max" barSize={20} fill="#A9DAF2" />
      <Bar dataKey="min" barSize={20} fill="#F86112" />
    </BarChart>
    // </ResponsiveContainer>
  );
}
