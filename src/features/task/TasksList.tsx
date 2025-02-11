import { useQuery } from "@tanstack/react-query";
import {
  Paper,
  Text,
  Stack,
  Loader,
  Badge,
  Group,
  Flex,
  Modal,
} from "@mantine/core";
import http from "../../http";
import { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import CreateTask from "./CreateTask";
import { Task } from "../../http/api";

const TasksList = () => {
  const [hoveredId, setHoveredId] = useState<string | null>("");
  const { isLoading, data: tasks } = useQuery({
    queryKey: ["tasks"],
    queryFn: http.todos.todoControllerFindAll,
  });

  const [opened, { open: openModel, close: closeModel }] = useDisclosure();
  const [task, setTask] = useState<Task | null>(null);
  const handleModalOpen = (task: Task) => {
    setTask(task);
    openModel();
  };
  useEffect(() => {
    if (!opened) {
      setTask(null); // Reset task when modal closes
    }
    console.log("compoent re rendered");
  }, [opened]);

  return (
    <>
      <Stack p="lg">
        <Text size="xl" ta="center">
          Your Tasks
        </Text>
        <Flex gap={"xl"}>
          {tasks?.data?.length > 0 ? (
            tasks?.data?.map((task) => (
              <Paper
                key={task.id}
                p="md"
                radius="md"
                withBorder
                style={{
                  transition:
                    "box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out",
                  boxShadow:
                    hoveredId === task.id
                      ? "0px 10px 20px rgba(0, 0, 0, 0.3)"
                      : "none",
                }}
                onMouseEnter={() => setHoveredId(task.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleModalOpen(task)}
              >
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
                  Due: {task.dueDate}
                </Text>
              </Paper>
            ))
          ) : (
            <Text ta="center">No tasks found.</Text>
          )}
        </Flex>
      </Stack>

      <Modal opened={opened} onClose={closeModel} size={"lg"}>
        <CreateTask isUpdate={true} task={task} closeModal={closeModel} />
      </Modal>
    </>
  );
};

export default TasksList;
