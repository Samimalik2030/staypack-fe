"use client";

import {
  Button,
  Center,
  Stack,
  TextInput,
  PasswordInput,
  Group,
  Text,
  Paper,
  Box,
  Title,
} from "@mantine/core";
import { isEmail, useForm, yupResolver,} from "@mantine/form";
import * as yup from "yup";


import { Link } from "react-router-dom";
import { SignInDto } from "../../types/signInDto";
import axios from "axios";
import { useAuth } from "../../context/authContext";


export default function SignIn() {

  const { setAccessToken } = useAuth();
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
   const newForm = useForm({
    initialValues:{
      email:"",
      password:"",
    },
    validate: yupResolver(schema),
   })
   function sendForm() {
   const response = axios.post("http://localhost:3000/users/sign-in", newForm.values);
   console.log(response)
   }


  return (
    <>

      <Center h="100vh" bg="#e6e9e9ff">
        <Paper w={400} p="lg" radius="md" withBorder shadow="md"
          bg={"#ae21c2"}>
          <form onSubmit={newForm.onSubmit(sendForm)}>
            <Stack>
              <Group justify="center">
              <Box
                w={88}
                h={88}
                bg={"grape"}
                style={{ borderRadius: "45px" }}
              ></Box>
            </Group>
            <Title fw={600} fz={32} ta={"center"} c={"white"}>Sign In</Title>
            <Text fw={400} fz={21} ta={"center"} c={"white"}>Sign in If you have an account in here</Text>
              <TextInput
                data-test="email"
                label="Your Email"
                c={"white"}
                placeholder="your@email.com"
                required
               {...newForm.getInputProps("email")}
              />

              <PasswordInput
                data-test="password"
                label="Your Password"
                c={"white"}
                placeholder="Your password"
                {...newForm.getInputProps("password")}
                required
              />

              <Group justify="flex-end">
                <Text
                  data-test="forgot-password-link"
                  component={Link}
                  to="forgot-password"
                  size="sm"
                  c="white"
                >
                  Forgot password?
                </Text>
              </Group>
              <Group justify="center">
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
                Sign In
                </Button>
                </Group>
              <Group justify="center" wrap="wrap">
                <Text size="sm" c={"white"} data-test="dont-have-account">
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
    </>

  );
}