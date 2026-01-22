"use client";

import { AreaChart } from "@mantine/charts";
import { Card, Text } from "@mantine/core";

const data = [
  { day: "Mon", stock: 120 },
  { day: "Tue", stock: 200 },
  { day: "Wed", stock: 150 },
  { day: "Thu", stock: 280 },
  { day: "Fri", stock: 220 },
  { day: "Sat", stock: 170 },
  { day: "Sun", stock: 250 },
];

export default function StockMovementAreaChart() {
  return (
    <Card className="w-full" radius="md" withBorder>
      <Text fw={600} mb="sm">
        Stock Movement Trends
      </Text>

      <AreaChart
        h={260}
        data={data}
        dataKey="day"
        series={[{ name: "stock", color: "orange.6" }]}
        curveType="monotone"
        withTooltip
        withDots={false}
      />
    </Card>
  );
}
