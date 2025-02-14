import {
  Box,
  Button,
  Card,
  Text,
  Center,
  Flex,
  Group,
  Stack,
  TextInput,
  Title,
  Anchor,
  Image,
  Container,
  PasswordInput,
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { useMediaQuery } from "@mantine/hooks";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import * as yup from "yup";

const ResetPassword = () => {
  const isMobile = useMediaQuery("(max-width: 56.25em)");
  const navigate = useNavigate();

  const validateSchema = yup.object({
    email: yup.string().email().required("email is required"),
    password: yup.string().required("password is required"),
  });
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: yupResolver(validateSchema),
  });
  const { mutate: ResetPassword, isPending } = useMutation({
    mutationFn: () =>
      axios.post("http://localhost:3000/users/sign-in", form.values),
    onSuccess: (data) => {
      console.log(data.data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  function sendForm() {
    ResetPassword();
  }
  return (
    <>
      <Container fluid h={"100vh"} w={"100vw"} p={10} py={0}>
        <Flex h={"100%"}>
          <Card p={6} w={"50%"} display={isMobile ? "none" : "block"}>
            <Image
              radius={20}
              style={{
                objectFit: "cover",
              }}
              src={
                "https://ik.imagekit.io/yzrrrgg3d/stayPack/d617ef3e-f483-4eef-a48e-d915d4dbb397.jfif?updatedAt=1739463303420"
              }
            />
          </Card>
          <Card
            w={isMobile ? "100%" : "50%"}
            radius={20}
            style={{
              background: "linear-gradient(to bottom, #eaffcf, #ecfffd",
            }}
          >
            <Flex justify={"end"} align={"center"} gap={15} px={20}>
              <Text fw={400} fz={16}>
                Don't have an account?
              </Text>
              <Button
                fw={600}
                fz={16}
                style={{ border: "1px solid #2A8C82" }}
                bg={"transparent"}
                c={"#2A8C82"}
                onClick={() => navigate("/sign-up")}
              >
                Sign Up
              </Button>
            </Flex>
            <Center h={"100%"}>
              <Card w={"80%"} bg={"transparent"}>
                <Flex justify={"center"}>
                  <Box
                    w={75}
                    h={50}
                    bg={"#d9d9d9"}
                    style={{ borderRadius: "16px" }}
                  >
                    <Flex justify={"center"} align={"center"} h={"100%"}>
                      <Text fw={600} fz={16}>
                        Logo
                      </Text>
                    </Flex>
                  </Box>
                </Flex>
                <Stack gap={8} mt={10}>
                  <Title fw={600} fz={25} ta={"center"}>
                    Reset <span style={{ color: "#2A8C82" }}>Password</span>
                  </Title>
                  <Group justify="center">
                    <Text ta={"center"} fw={400} fz={21} w={400}>
                      Reset your password? Let’s get you back on the track.
                    </Text>
                  </Group>
                </Stack>
                <Stack gap={13} mt={7}>
                  <PasswordInput
                    fw={300}
                    fz={9}
                    c={"#6d7572"}
                    label="Password"
                    placeholder="password"
                    size="md"
                    w={"100%"}
                    radius={16}
                  />
                  <PasswordInput
                    fw={300}
                    fz={9}
                    c={"#6d7572"}
                    label="Confirm Password"
                    placeholder="password"
                    size="md"
                    w={"100%"}
                    radius={16}
                  />

                  <Button
                    fw={600}
                    fz={16}
                    w={"100%"}
                    mt={7}
                    h={42}
                    radius={16}
                    bg={"#2A8C82"}
                    onClick={() => navigate("/")}
                  >
                    Reset
                  </Button>
                </Stack>
              </Card>
            </Center>
          </Card>
        </Flex>
      </Container>
    </>
  );
};
export default ResetPassword;
