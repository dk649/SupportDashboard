"use client";
import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    office: 82,
    wfh: 44,
  },
  {
    name: "Feb",
    office: 80,
    wfh: 40,
  },
  {
    name: "Mar",
    office: 83,
    wfh: 42,
  },
  {
    name: "Apr",
    office: 50,
    wfh: 50,
  },
  {
    name: "May",
    office: 40,
    wfh: 60,
  },
  {
    name: "Jun",
    office: 60,
    wfh: 40,
  },
  {
    name: "Jul",
    office: 55,
    wfh: 55,
  },
  {
    name: "Aug",
    office: 49,
    wfh: 61,
  },
  {
    name: "Sep",
    office: 44,
    wfh: 70,
  },
  {
    name: "Oct",
    office: 40,
    wfh: 40,
  },
  {
    name: "Nov",
    office: 50,
    wfh: 50,
  },
  {
    name: "Dec",
    office: 50,
    wfh: 50,
  },
];

const WorkLocationTrends = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={data}
        className="[&_.recharts-tooltip-cursor]:fill-zinc-200 dark:[&_.recharts-tooltip-cursor]:fill-zinc-800"
      >
        <XAxis dataKey="name" stroke="#888888" />
        <YAxis stroke="#888888" />
        <Tooltip wrapperClassName="dark:!bg-black rounded-md dark:!border-border " />
        <Legend
          iconType="circle"
          formatter={(value) => {
            if (value === "wfh") {
              return <div>Work from home</div>;
            } else {
              return <div>Work form office</div>;
            }
          }}
        />
        <Bar
          dataKey="office"
          stackId={1}
          fill="#76ff03"
          radius={[2, 2, 0, 0]}
        />
        <Bar dataKey="wfh" stackId={2} fill="#01579b" radius={[2, 2, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default WorkLocationTrends;
