"use client";

import { DonutChart } from "@mantine/charts";
import { Card, Text, Group } from "@mantine/core";

const data = [
  { name: "Warehouse A", value: 38, color: "orange.6" },
  { name: "Warehouse B", value: 42, color: "green.6" },
  { name: "Warehouse C", value: 20, color: "red.6" },
];

export default function StockDistributionDonut() {
  return (
    <Card className="w-full" radius="md" withBorder>
      <Text fw={600} mb="sm">
        Stock Distribution by Site
      </Text>

      <Group justify="center">
        <DonutChart data={data} size={220} thickness={30} />
      </Group>
    </Card>
  );
}
