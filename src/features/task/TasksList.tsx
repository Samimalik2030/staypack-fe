import { useQuery } from "@tanstack/react-query";
import {
  Paper,
  Text,
  Stack,
  Badge,
  Group,
  Flex,
  Modal,
  LoadingOverlay,
  Box,
  Button,
} from "@mantine/core";
import http from "../../http";
import { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import CreateTask from "./CreateTask";
import { Task } from "../../http/api";
import { useNavigate } from "react-router-dom";

const TasksList = () => {
  const navigate = useNavigate();

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
      setTask(null);
    }
    console.log("compoent re rendered");
  }, [opened]);

  return (
    <>
      <Stack p="lg">
        <Text size="xl" ta="center">
          Your Tasks
        </Text>
        <Box pos="relative">
          <LoadingOverlay
            visible={isLoading}
            loaderProps={{ children: "Loading..." }}
          />
          {/* ...other content */}
        </Box>

        <Group justify="end">
          <Button onClick={() => navigate("/create-task")}>Create new</Button>
        </Group>
        <Flex gap={"xl"} wrap={"wrap"}>
          {tasks?.data?.length > 0 ? (
            tasks?.data?.map((task) => (
              <Paper
                miw={300}
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
                  cursor: hoveredId === task.id ? "pointer" : "default",
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
                  Category: {task.category}
                </Text>
                <Text size="xs" color="dimmed" mt="xs">
                  Due: 12 july 2024
                </Text>
                <Group justify="end">
                  <Badge>{task.status}</Badge>
                </Group>
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
