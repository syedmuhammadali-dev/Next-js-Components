"use client";

import { BarChart } from "@mantine/charts";
import { Card, Text } from "@mantine/core";

const data = [
  { supplier: "Bosch UK", value: 95 },
  { supplier: "Conductix", value: 85 },
  { supplier: "Siemens", value: 90 },
  { supplier: "Hit UK", value: 70 },
];

export default function SupplierPerformanceBar() {
  return (
    <Card className="w-full" radius="md" withBorder>
      <Text fw={600} mb="sm">
        Suppliers Performance
      </Text>

      <BarChart
        h={260}
        data={data}
        dataKey="supplier"
        orientation="vertical"
        series={[{ name: "value", color: "green.6" }]}
        barSize={20}
      />
    </Card>
  );
}
