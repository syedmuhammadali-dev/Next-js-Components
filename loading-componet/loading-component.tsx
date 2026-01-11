{
  loading ? (
    <Stack gap="md">
      <Skeleton height={20} width="60%" />
      <Skeleton height={15} width="80%" />
      <Skeleton height={15} width="70%" />
      <Divider my="sm" />
      <Skeleton height={40} />
    </Stack>
  ) : data ? (
    <Stack gap="md">
      <Group justify="space-between">
        <Text fw={500} c="#697586">
          Invoice #
        </Text>
        <Text fw={600} c="#202939">
          {data.invoiceNumber || data.invoice || "N/A"}
        </Text>
      </Group>

      <Group justify="space-between">
        <Text fw={500} c="#697586">
          Date
        </Text>
        <Text c="#364152">{data.date || data.invoiceDate || "N/A"}</Text>
      </Group>

      <Group justify="space-between">
        <Text fw={500} c="#697586">
          Amount
        </Text>
        <Text fw={600} c="#FF8A3D">
          {data.amount || "N/A"}
        </Text>
      </Group>

      <Group justify="space-between">
        <Text fw={500} c="#697586">
          Status
        </Text>
        <Text
          style={{
            backgroundColor:
              data.status?.toLowerCase() === "paid" ? "#EDFCF2" : "#FEF2F2",
            color:
              data.status?.toLowerCase() === "paid" ? "#087442" : "#B6271F",
            padding: "2px 10px",
            borderRadius: "99px",
            fontSize: "12px",
            fontWeight: 600,
            textTransform: "capitalize",
          }}
        >
          {data.status || "N/A"}
        </Text>
      </Group>

      <Divider my="xs" />

      <Stack gap="xs">
        <Text fw={500} c="#697586">
          Billing Period
        </Text>
        <Text c="#364152">
          {data.periodStart && data.periodEnd
            ? `${data.periodStart} - ${data.periodEnd}`
            : data.period || "N/A"}
        </Text>
      </Stack>

      {data.description && (
        <Stack gap="xs">
          <Text fw={500} c="#697586">
            Description
          </Text>
          <Text c="#364152" size="sm">
            {data.description}
          </Text>
        </Stack>
      )}

      <Group justify="flex-end" mt="xl">
        <Button onClick={onClose} variant="outline" color="gray" radius="md">
          Close
        </Button>
      </Group>
    </Stack>
  ) : (
    <Text c="dimmed" ta="center" py="xl">
      No data found
    </Text>
  );
}
