import { Group, Select } from "@mantine/core";

import { useState } from "react";

const Dummy = () => {
  interface KeyValue {
    label: string;
    value: string;
  }
  const [state, setState] = useState<KeyValue[]>([]);

  const categories = [
    { id: 1, name: "Education" },
    { id: 2, name: "Tourism" },
    { id: 3, name: "Technology" },
    { id: 4, name: "Health & Fitness" },
    { id: 5, name: "Finance" },
  ];

  const values = [
    { id: 1, categoryId: 1, name: "Online Courses" },
    { id: 2, categoryId: 1, name: "Schools" },
    { id: 3, categoryId: 2, name: "Travel Packages" },
    { id: 4, categoryId: 2, name: "Tourist Attractions" },
    { id: 10, categoryId: 3, name: "Software Development" },
    { id: 11, categoryId: 3, name: "Artificial Intelligence" },
    { id: 14, categoryId: 4, name: "Gym Memberships" },
    { id: 15, categoryId: 4, name: "Yoga Classes" },
    { id: 18, categoryId: 5, name: "Banking Services" },
    { id: 19, categoryId: 5, name: "Investment Plans" },
  ];

  const options = categories.map((c) => {
    return {
      label: c.name,
      value: c.id.toString(),
    };
  });

  const handleChange = (value) => {
    const foundElements = values.filter((v) => v.categoryId === +value);
    const keyValuePair = foundElements.map((v) => ({
      label: v.name,
      value: v.id.toString(),
    }));
    setState(keyValuePair);
  };

  return (
    <>
      <Group justify="center" mt={100}>
        <Select
          label="Category"
          placeholder="Select Category"
          data={options}
          clearable
          searchable
          onChange={(v) => handleChange(v)}
        />

        <Select
          label="Field"
          clearable
          searchable
          placeholder="Select Field"
          data={state}
        />
      </Group>
    </>
  );
};
export default Dummy;
