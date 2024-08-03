"use client";
import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    delta: 40,
    alpha: 24,
    canary: 24,
  },
  {
    name: "Feb",
    delta: 30,
    alpha: 13,
    canary: 22,
  },
  {
    name: "Mar",
    delta: 20,
    alpha: 58,
    canary: 29,
  },
  {
    name: "Apr",
    delta: 14,
    alpha: 30,
    canary: 15,
  },
  {
    name: "May",
    delta: 29,
    alpha: 28,
    canary: 18,
  },
  {
    name: "Jun",
    delta: 19,
    alpha: 19,
    canary: 10,
  },
  {
    name: "Jul",
    delta: 34,
    alpha: 24,
    canary: 14,
  },
  {
    name: "Aug",
    delta: 21,
    alpha: 20,
    canary: 19,
  },
  {
    name: "Sep",
    delta: 49,
    alpha: 43,
    canary: 20,
  },
  {
    name: "Oct",
    delta: 43,
    alpha: 55,
    canary: 4,
  },
  {
    name: "Nov",
    delta: 39,
    alpha: 40,
    canary: 25,
  },
  {
    name: "Dec",
    delta: 34,
    alpha: 43,
    canary: 11,
  },
];

const SupportTicketResolved = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <Tooltip
          labelClassName="font-bold"
          wrapperClassName="dark:[&_.recharts-tooltip-item]:!text-white [&_.recharts-tooltip-item]:!text-black !text-sm dark:!bg-black rounded-md dark:!border-border"
        />
        <CartesianGrid strokeDasharray={3} />
        <Line type="monotone" dataKey="delta" stroke="#84cc16" />
        <Line type="monotone" dataKey="alpha" stroke="#3b82f6" />
        <Line type="monotone" dataKey="canary" stroke="#f97316" />
        <XAxis dataKey="name" />
        <YAxis />
        <Legend
          formatter={(value) => <span className="capitalize">{value}</span>}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SupportTicketResolved;