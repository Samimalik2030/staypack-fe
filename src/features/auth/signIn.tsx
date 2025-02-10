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
  BackgroundImage,
  Container,
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { SignInDto } from "../../types/signInDto";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { notifications } from "@mantine/notifications";
import { IErrorResponse } from "../../types/IerrorResponse";
import { useAuth } from "../../context/authContext";
import http from "../../http";

// API Function
// const loginUser = async ({ email, password }: SignInDto) => {
//   const response = await axios.post("http://localhost:3000/users/sign-in", {
//     email,
//     password,
//   });

//   return response.data;
// };

const SignIn = () => {
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
    initialValues: {
      email: "",
      password: "",
    },
    validate: yupResolver(schema),
  });

  const { mutate: signIn, isPending } = useMutation({
    mutationFn: http.api.userControllerSignIn,
    onSuccess: (data) => {
      notifications.show({
        title: "Success",
        message: "Sign in successfully",
        color: "green",
      });
      setAccessToken(data.data.token);
      // setUser(data.user);
    },
    onError: (error: IErrorResponse) => {
      alert(error.response?.data?.message || "Login failed. Please try again.");
    },
  });

  function sendForm() {
    signIn(newForm.values);
  }

  return (
    <>
      <Container fluid px={0}>
        <BackgroundImage
          src="https://ik.imagekit.io/yzrrrgg3d/stayPack/back.png?updatedAt=1739183590617"
          h={"100vh"}
          w={"100vw"}
        >
          <Center h={"100%"}>
            <Paper w={400} p="lg" radius="md" bg={"#ae21c2"}>
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
                  <Title fw={600} fz={32} ta={"center"} c={"white"}>
                    Sign In
                  </Title>
                  <Text fw={400} fz={21} ta={"center"} c={"white"}>
                    Sign in If you have an account in here
                  </Text>

                  {/* Email Input */}
                  <TextInput
                    data-test="email"
                    label="Your Email"
                    c={"white"}
                    placeholder="your@email.com"
                    required
                    {...newForm.getInputProps("email")}
                  />

                  {/* Password Input */}
                  <PasswordInput
                    data-test="password"
                    label="Your Password"
                    c={"white"}
                    placeholder="Your password"
                    {...newForm.getInputProps("password")}
                    required
                  />

                  {/* Forgot Password */}
                  <Group justify="flex-end">
                    <Text
                      data-test="forgot-password-link"
                      component={Link}
                      to="/forgot-password"
                      size="sm"
                      c="white"
                    >
                      Forgot password?
                    </Text>
                  </Group>

                  {/* Sign In Button */}
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
                      disabled={isPending} // Disable while logging in
                    >
                      {isPending ? "Signing in..." : "Sign In"}
                    </Button>
                  </Group>

                  {/* Sign Up Link */}
                  <Group justify="center" wrap="wrap">
                    <Text size="sm" c={"white"} data-test="dont-have-account">
                      Don&apos;t have an account?{" "}
                      <Text
                        data-test="sign-up-link"
                        component={Link}
                        to="/sign-up"
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
        </BackgroundImage>
      </Container>
    </>
  );
};

export default SignIn;
