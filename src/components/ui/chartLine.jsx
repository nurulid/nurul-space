"use client"

import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip } from 'recharts';
import useMeasure from 'react-use-measure';

const chartData = [
  { month: 'July', value: 95 },
  { month: 'August', value: 80 },
  { month: 'September', value: 75 },
  { month: 'October', value: 65 },
  { month: 'November', value: 5 },
  { month: 'December', value: 40 },
];

export const ChartLine = (props) => {
  const { unit } = props;
  const [chartRef, chartDimensions] = useMeasure();

  return (
    <div ref={chartRef} className="w-full h-full min-h-[180px] max-h-[200px]">
      <LineChart
        width={chartDimensions.width}
        height={chartDimensions.height}
        data={chartData}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={true} />
        <XAxis dataKey="month" />
        <Tooltip
          contentStyle={{
            fontSize: 12,
            borderRadius: 12,
            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
            border: '1px #eee solid',
            padding: '4px 10px',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
          formatter={(value) => [`${value}${unit}`]}
        />
        <Line dataKey="value" stroke="#06B6D4" fill="#06B6D4" fillOpacity={0.4} activeDot={{ r: 6 }} />
      </LineChart>
    </div>
  );
}
