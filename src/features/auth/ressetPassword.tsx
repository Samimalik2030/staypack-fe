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

const ResetPassword = () => {
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
      <Center h="100vh" bg="#e6e9e9ff" w="100vw">
        <Card w={410} bg={"#ae21c2"} radius={10}>
          <form onSubmit={form.onSubmit(sendForm)}>
            <Stack>
              <Flex justify={"center"}>
                <Box
                  h={88}
                  w={88}
                  bg={"grape"}
                  style={{ borderRadius: "45px" }}
                ></Box>
              </Flex>
              <Title ta={"center"} fw={600} fz={32} c={"white"}>
                Reset Password
              </Title>
              <Text ta={"center"} fw={400} fz={21} c={"white"}>
                Reset your password? Let’s get you back on the track.
              </Text>
              <TextInput
                size="md"
                c={"white"}
                label="Password"
                placeholder="Password"
                required
                {...form.getInputProps("email")}
              />
              <TextInput
                size="md"
                c={"white"}
                label="Confirm Password"
                placeholder="Confirm Password"
                required
                {...form.getInputProps("password")}
              />
              <Group justify="center">
                <Button
                  disabled={isPending} // Disable while logging in
                  type="submit"
                  mt={15}
                  radius={30}
                  w={120}
                  h={50}
                  bg={"white"}
                  c={"#afafb1ff"}
                  fw={500}
                  fz={17}
                >
                  Reset
                </Button>
              </Group>
            </Stack>
          </form>
        </Card>
      </Center>
    </>
  );
};
export default ResetPassword;
