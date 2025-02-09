"use client";

import {
  Button,
  Center,
  Stack,
  TextInput,
  Title,
  PasswordInput,
  Group,
  Text,
  Paper,
  Anchor,
  Box,
  Flex,
  Container,
  Card,
  Checkbox,
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";


import { Link } from "react-router-dom";
import { SignInDto } from "../../types/signInDto";
import axios from "axios";


export default function SignIn() {

  const schema = yup.object<SignInDto>({
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const form = useForm<SignInDto>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: yupResolver(schema),
  });


  const handleSignIn = async () => {
    await axios.post("http://localhost:3000/users/sign-in", form.values);
  };

   const newForm = useForm({
    initialValues:{
      email:"",
      password:"",
    }
   })
   function sendForm() {
    console.log(newForm.values)
   }


  return (
    <>

      <Center h="100vh" bg="#e6e9e9ff">
        <Paper w={400} p="xl" radius="md" withBorder shadow="md"
          bg={"#ae21c2"}>
          {/* <form onSubmit={form.onSubmit(handleSignIn)}> */}
          <form onSubmit={newForm.onSubmit(sendForm)}>
            <Stack>
              <Box
                w={88}
                h={88}
                bg={"grape"}
                style={{ borderRadius: "45px" }}
              ></Box>


              <TextInput
                data-test="email"
                label="Email"
                placeholder="your@email.com"
                required
               {...newForm.getInputProps("email")}
              />

              <PasswordInput
                data-test="password"
                label="Password"
                placeholder="Your password"
                {...newForm.getInputProps("password")}
                required
              />

              <Group justify="flex-end">
                <Text
                  data-test="forgot-password-link"
                  component={Link}
                  to="/auth/forgot-password"
                  size="sm"
                  c="dimmed"
                >
                  Forgot password?
                </Text>
              </Group>
                <Button
                  w={120}
                  h={50}
                  radius={30}
                  bg={"white"}
                  c={"#afafb1ff"}
                  fw={500}
                  fz={17}
                  type="submit"
                >
                  Login
                </Button>
              <Group justify="center">
                <Text size="sm" c="dimmed" data-test="dont-have-account">
                  Don&apos;t have an account?{" "}
                  <Text
                    data-test="sign-up-link"
                    component={Link}
                    to="/auth/signup"
                    span
                    c="blue"
                    td="underline"
                  >
                    Sign up Now!
                  </Text>
                </Text>
              </Group>
            </Stack>
          </form>
        </Paper>
      </Center>


      {/* <Container fluid h={"100vh"} bg={"#e6e9e9ff"} p={0}>
        <Flex h={"100%"} p={0} w={"100%"} justify={"center"} align={"center"}>
          <Card
            w={{
              xs: "40%",
              sm: "40%",
              md: "40%",
              lg: "35%",
              xl: "35%",
            }}
            radius={20}
            bg={"#ae21c2"}
          >
            <Flex justify={"center"}>
              <Box
                w={88}
                h={88}
                bg={"grape"}
                style={{ borderRadius: "45px" }}
              ></Box>
            </Flex>
            <Text fw={600} fz={30} ta={"center"} c={"#edededff"}>
              Log In
            </Text>
            <Stack gap={30} mt={24}>
              <TextInput
                w={"100%"}
                // leftSection={<IconUsers width={20} height={20} />}
                placeholder="Username"
                size="md"
                radius={15}
              />
              <TextInput
                w={"100%"}
                // leftSection={<IconLock width={20} height={20} />}
                placeholder="password"
                size="md"
                radius={15}
              />
              <Flex align={"center"} gap={15}>
                <Checkbox label="Remember me" c={"white"} size="sm" />
              </Flex>
            </Stack>
            <Flex justify={"center"}>
              <Stack>
                <Button
                  w={120}
                  h={50}
                  radius={30}
                  bg={"white"}
                  c={"#afafb1ff"}
                  fw={500}
                  fz={17}
                >
                  Login
                </Button>
                <Anchor c={"#afafb1ff"} fw={500} fz={17}>
                  Forgot Password
                </Anchor>
              </Stack>
            </Flex>
          </Card>
        </Flex>
      </Container> */}
    </>

  );
}