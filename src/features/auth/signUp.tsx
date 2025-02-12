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
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import * as yup from "yup";

const SignUp = () => {
  const validateSchema = yup.object({
    fullName: yup.string().required("full name is required"),
    email: yup.string().email().required("email is required"),
    password: yup.string().required("password is required"),
    confirmPassword: yup.string().required("confirmPassword is required"),
  });
  const form = useForm({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: yupResolver(validateSchema),
  });

  const { mutate: signup, isPending } = useMutation({
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
    signup();
  }

  return (
    <>
      <Center h="110vh" bg="#e6e9e9ff" w="100vw" px={"xs"}>
        <Card w={410} bg={"#ae21c2"} radius={10} p={20}>
          <form onSubmit={form.onSubmit(sendForm)}>
            <Stack gap={10}>
              <Flex justify={"center"}>
                <Box
                  h={80}
                  w={80}
                  bg={"grape"}
                  style={{ borderRadius: "40px" }}
                ></Box>
              </Flex>
              <Title fw={600} fz={32} ta={"center"}>
                Sign Up
              </Title>
              <Text fw={400} fz={21} ta={"center"} c={"white"}>
                Sign up If you don’t have an account
              </Text>
              <TextInput
                size="md"
                label="Full Name"
                c={"white"}
                placeholder="Full Name"
                required
                {...form.getInputProps("fullName")}
              />
              <TextInput
                size="md"
                label="Email"
                c={"white"}
                placeholder="Email"
                required
                {...form.getInputProps("email")}
              />
              <TextInput
                size="md"
                label="Password"
                c={"white"}
                placeholder="Password"
                required
                {...form.getInputProps("password")}
              />
              <TextInput
                size="md"
                label="Confirm Password"
                c={"white"}
                placeholder="Confirm Password"
                required
                {...form.getInputProps("confirmPassword")}
              />
              <Group justify="center">
                <Button
                  type="submit"
                  mt={10}
                  radius={30}
                  w={120}
                  h={50}
                  bg={"white"}
                  c={"#afafb1ff"}
                  fw={500}
                  fz={17}
                  disabled={isPending} // Disable while logging in
                >
                  Sign Up
                </Button>
              </Group>
              <Flex justify={"center"}>
                <Text c={"white"} fw={500} fz={17}>
                  Or Sign up with{" "}
                </Text>
              </Flex>
            </Stack>
          </form>
        </Card>
      </Center>
    </>
  );
};
export default SignUp;
