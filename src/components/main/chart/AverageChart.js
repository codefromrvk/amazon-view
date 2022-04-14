import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

/**
 * Bar Chart Component (Left part of the entire chart component)
 *
 * Used to display only max and min bars
 *
 */

export default function AverageChart({ data }) {
  const dataFiltered = [
    {
      name :"Average",
      max: data.reduce(function (prev, current) {
        return prev.value > current.value ? prev : current;
      }, 0).value,
      min: data.reduce(function (prev, current) {
        return prev.value < current.value ? prev : current;
      }, 0).value,
    },
  ];

  return (
    <BarChart
      width={200}
      height={300}
      data={dataFiltered}
      margin={{
        top: 10,
        right: 0,
        left: 0,
        bottom: 0,
      }}
      barGap={10}
    >
      <CartesianGrid vertical={false} strokeDasharray="4 4" />
      <XAxis dataKey="name" tickLine={false} stroke="black"/>

      <YAxis axisLine={false} stroke="black" />
      <Tooltip
        itemStyle={{
          color: "white",
        }}
        contentStyle={{
          backgroundColor: "#60608E",
          fontSize: "1rem",
          color: "white"
        }}
        // payload={[...payload,name:""]}
        // formatter={toolTipFormat}
        formatter={function(value, name) {
          return `${value}`;
        }}
        labelFormatter={function(value) {
          return `label: ${value}`;
        }}
      />
      <Bar dataKey="max" barSize={26} fill="#A9DAF2" />
      <Bar dataKey="min" barSize={26} fill="#F86112" />
    </BarChart>
  );
}

function toolTipFormat(value, name, props){

  console.log("ans",value,name,props)
  console.log(props.payload.name);
  
  return [2,"name"]
  // return [{...props.payload,name:""},props.payload]
}