import {
  TextInput,
  Textarea,
  Select,
  Checkbox,
  Button,
  Text,
  Center,
  Paper,
  Stack,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { TaskCategory, TaskPriority, TaskRecurrence } from "./types";
import { DateTimePicker } from "@mantine/dates";
import { useMutation } from "@tanstack/react-query";
import http from "../../http";
import { CreateTaskDto } from "../../http/api";
import { notifications } from "@mantine/notifications";
const CreateTask = () => {
  const form = useForm<CreateTaskDto>({
    initialValues: {
      title: "",
      description: "",
      priority: TaskPriority.HIGH,
      notes: "",
      isRecurring: false,
      category: "entertainment",
      dueDate: "",
      recurrenceType: "daily",
      startDate: "",
    },
  });

  const { mutate: createTask, isPending } = useMutation({
    mutationFn: http.todos.todoControllerCreate,
  });

  const handleSubmit = () => {
    createTask(form.values, {
      onSuccess: () => {
        notifications.show({ message: "Task created successfully" });
      },
    });
  };

  return (
    <Center h={"100vh"} bg={"#E9ECEF"}>
      <Stack>
        <Title size="xl" ta={"center"}>
          Create Your To-Do
        </Title>
        <Text size="sm" color="dimmed" ta="center">
          Stay organized and productive! Add your tasks below and start checking
          them off.
        </Text>
        <Paper w={520} p={"lg"} shadow="xl" radius={"xl"}>
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack gap={"sm"} p={"xs"}>
              <TextInput
                label="Title"
                placeholder="Enter task title"
                {...form.getInputProps("title")}
                required
              />

              <Textarea
                label="Description"
                placeholder="Enter task description"
                {...form.getInputProps("description")}
              />

              <Select
                label="Priority"
                data={Object.values(TaskPriority)}
                {...form.getInputProps("priority")}
              />

              <DateTimePicker
                label="Start Date"
                placeholder="Pick a start date"
                {...form.getInputProps("startDate")}
              />

              <DateTimePicker
                label="End Date"
                placeholder="Pick a deadline"
                {...form.getInputProps("dueDate")}
              />

              <Checkbox
                mt="md"
                label="Recurring Task"
                {...form.getInputProps("isRecurring", { type: "checkbox" })}
              />

              {form.values.isRecurring && (
                <Select
                  label="Recurrence Type"
                  data={Object.values(TaskRecurrence)}
                  {...form.getInputProps("recurrenceType")}
                />
              )}

              <Select
                label="Category"
                data={Object.values(TaskCategory)}
                {...form.getInputProps("category")}
              />

              <Textarea
                label="Notes"
                placeholder="Additional notes..."
                {...form.getInputProps("notes")}
              />

              <Button type="submit" mt="md" fullWidth loading={isPending}>
                Create Task
              </Button>
            </Stack>
          </form>
        </Paper>
      </Stack>
    </Center>
  );
};

export default CreateTask;
