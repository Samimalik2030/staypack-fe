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
import {
  TaskCategory,
  TaskPriority,
  TaskRecurrence,
  UpdateFormValues,
} from "./types";
import { DateTimePicker } from "@mantine/dates";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "../../http";
import { CreateTaskDto, Task, UpdateTaskDto } from "../../http/api";
import { notifications } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";
const CreateTask = ({
  isUpdate,
  task,
  closeModal,
}: {
  isUpdate: boolean;
  task: Task | null;
  closeModal: () => void;
}) => {
  const navigate = useNavigate();

  const form = useForm<UpdateFormValues>({
    initialValues: {
      title: task?.title || "",
      description: task?.description || "",
      priority: task?.priority || TaskPriority.HIGH,
      notes: task?.notes || "",
      isRecurring: task?.isRecurring ?? false,
      category: task?.category || "entertainment",
      dueDate: task?.dueDate ? new Date(task.dueDate) : "",
      startDate: task?.startDate ? new Date(task.startDate) : "",
      recurrenceType: task?.recurrenceType || "daily",
    },
  });

  const { mutate: createTask, isPending } = useMutation({
    mutationFn: http.todos.todoControllerCreate,
  });
  const QueryClient = useQueryClient();
  const { mutate: updateTask } = useMutation({
    mutationFn: (updatedTask: UpdateTaskDto) =>
      http.todos.todoControllerUpdate(task?.id, updatedTask),
  });

  const handleSubmit = () => {
    if (task) {
      updateTask(form.values, {
        onSuccess: () => {
          notifications.show({ message: "Task updated successfully" });
          QueryClient.invalidateQueries({ queryKey: "" });
          closeModal();
        },
      });
    } else {
      createTask(form.values, {
        onSuccess: () => {
          notifications.show({ message: "Task created successfully" });
          navigate("/tasks");
        },
      });
    }
  };

  return (
    <Center h={"100vh"} bg={"#E9ECEF"}>
      <Stack>
        <Title size="xl" ta={"center"}>
          {isUpdate ? "Update Your To-Do" : "Create Your To-Do"}
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
                {isUpdate ? "Update" : "Create"}
              </Button>
            </Stack>
          </form>
        </Paper>
      </Stack>
    </Center>
  );
};

export default CreateTask;
