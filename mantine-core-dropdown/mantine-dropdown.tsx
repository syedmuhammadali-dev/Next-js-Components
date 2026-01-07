import { Select, Grid } from "@mantine/core";
import { useState } from "react";

const MantineDropdown = () => {
  const [formData, setFormData] = useState({ type: "" });
  const [error, setError] = useState<{ type?: string }>({});

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (error[field as keyof typeof error]) {
      setError((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Grid>
      <Grid.Col span={{ base: 12, sm: 6 }}>
        <Select
          label="Type"
          placeholder="Contractor"
          data={[
            "Contractor",
            "Plant hire company",
            "Asset owner",
            "Manufacturer / supplier",
            "JV / alliance",
            "Other",
          ]}
          value={formData.type}
          onChange={(value) => handleChange("type", value || "")}
          error={error?.type}
          labelProps={{
            style: { marginBottom: "6px" },
          }}
          radius={8}
        />
      </Grid.Col>
    </Grid>
  );
};
