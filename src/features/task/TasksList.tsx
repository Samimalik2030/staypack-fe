import { useQuery } from "@tanstack/react-query";
import { fetchTasks } from "../../http/api";
import { Paper, Text, Stack, Loader, Badge, Group } from "@mantine/core";

const TasksList = () => {
  const {
    data: tasks,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });

  if (isLoading) return <Loader />;
  if (isError) return <Text color="red">Error: {error.message}</Text>;

  return (
    <Stack p="lg">
      <Text size="xl" ta="center">
        Your Tasks
      </Text>
      {tasks?.length > 0 ? (
        tasks?.map((task) => (
          <Paper key={task.id} shadow="sm" p="md" radius="md" withBorder>
            <Group>
              <Text size="lg">{task.title}</Text>
              <Badge color={task.priority === "high" ? "red" : "blue"}>
                {task.priority.toUpperCase()}
              </Badge>
            </Group>
            <Text size="sm" color="dimmed" mt="xs">
              {task.description}
            </Text>
            <Text size="xs" color="dimmed" mt="xs">
              Category: {task.category} | Status: {task.status}
            </Text>
            <Text size="xs" color="dimmed" mt="xs">
              Due: {new Date(task.dueDate).toLocaleString()}
            </Text>
          </Paper>
        ))
      ) : (
        <Text ta="center">No tasks found.</Text>
      )}
    </Stack>
  );
};

export default TasksList;
