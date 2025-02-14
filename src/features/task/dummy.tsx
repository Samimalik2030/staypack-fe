import { Group, Select } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";

const Dummy = () => {
  const categories = {
    Technology: ["AI", "Blockchain"],
    Education: ["Online Courses", "Schools"],
    "Health & Wellness": ["Fitness", "Mental Health"],
    Finance: ["Banking", "Investments"],
    Travel: ["Hotels", "Flights"],
  };

  const [category, setCategory] = useState("");
  const [categoryValues, setCategoryValues] = useState([]);

  async function handleChange(v) {
    setCategory(v);
    setCategoryValues(categories[v]);
  }

  return (
    <>
      <Group justify="center" mt={100}>
        <Select
          label="Category"
          placeholder="Select Category"
          data={Object.keys(categories)}
          clearable
          searchable
          onChange={(v) => handleChange(v)}
        />

        <Select
          label="Field"
          clearable
          searchable
          placeholder="Select Field"
          data={categoryValues}
          onChange={(v) => handleChange(v)}
        />
      </Group>
    </>
  );
};
export default Dummy;
