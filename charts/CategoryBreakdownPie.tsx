"use client";

import { PieChart } from "@mantine/charts";
import { Card, Text } from "@mantine/core";

const data = [
  { name: "Hydraulic", value: 30, color: "violet.6" },
  { name: "Electrical", value: 40, color: "orange.6" },
  { name: "Mechanical", value: 20, color: "blue.6" },
  { name: "Others", value: 10, color: "gray.6" },
];

export default function CategoryBreakdownPie() {
  return (
    <Card className="w-full" radius="md" withBorder>
      <Text fw={600} mb="sm">
        Category Breakdown
      </Text>

      <PieChart h={260} data={data} withTooltip />
    </Card>
  );
}
