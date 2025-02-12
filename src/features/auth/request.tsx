import {
  Button,
  Center,
  Stack,
  TextInput,
  Group,
  Text,
  Paper,
  Box,
  Title,
  BackgroundImage,
  Container,
  Checkbox,
  Select,
  Anchor,
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import * as yup from "yup";
const Request = () => {
  const validateSchema = yup.object({
    fullName: yup.string().required("fullName is required"),
    email: yup.string().email().required("email is required"),
    select: yup.string().required("select is required"),
    dateInput: yup.string().email("dateInput is required"),
    inputData: yup.string().email("dateInput is required"),
  });

  const form = useForm({
    initialValues: {
      fullName: "",
      email: "",
      dateInput: "",
      inputData: "",
    },
    validate: yupResolver(validateSchema),
  });

  const { mutate: request, isPending } = useMutation({
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
    request();
  }
  return (
    <>
      <Container fluid px={0}>
        <BackgroundImage
          src="https://ik.imagekit.io/yzrrrgg3d/stayPack/back.png?updatedAt=1739183590617"
          h={"120vh"}
          w={"100vw"}
        >
          <Center h={"100%"}>
            <Paper w={400} p="lg" radius="md" bg={"#ae21c2"}>
              <form onSubmit={form.onSubmit(sendForm)}>
                <Stack gap={6}>
                  <Group justify="center">
                    <Box
                      w={75}
                      h={75}
                      bg={"grape"}
                      style={{ borderRadius: "37px" }}
                    ></Box>
                  </Group>
                  <Title fw={600} fz={32} ta={"center"} c={"white"}>
                    Sign In
                  </Title>
                  <TextInput
                    data-test="Full Name"
                    label=" Your Name"
                    c={"white"}
                    placeholder="Enter your Name"
                    required
                  />

                  <TextInput
                    data-test="email"
                    label=" Your Email"
                    c={"white"}
                    placeholder="your@email.com"
                    required
                  />

                  <Select
                    c={"white"}
                    label="Your favorite library"
                    placeholder="Pick value"
                    data={["low", "medium", "high"]}
                  />

                  <TextInput
                    c={"white"}
                    label=" Input Data"
                    placeholder="Enter Your Date input"
                    size="md"
                    radius={9}
                  />

                  <TextInput
                    c={"white"}
                    label=" Date input"
                    placeholder="Enter Your Date input"
                    size="md"
                    radius={9}
                  />

                  <TextInput
                    data-test="Password"
                    label="Enter Your Password"
                    c={"white"}
                    placeholder="your@email.com"
                    required
                  />

                  <Checkbox c={"white"} defaultChecked label="false" />

                  <Group justify="flex-end">
                    <Anchor
                      data-test="forgot-password-link"
                      size="sm"
                      c="white"
                    >
                      Forgot password?
                    </Anchor>
                  </Group>

                  <Group justify="center">
                    <Button
                      disabled={isPending}
                      w={120}
                      h={50}
                      radius={30}
                      bg={"white"}
                      c={"#afafb1ff"}
                      fw={500}
                      fz={17}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Group>

                  <Group justify="center" wrap="wrap">
                    <Text size="sm" c={"white"} data-test="dont-have-account">
                      Don&apos;t have an account?{" "}
                      <Text
                        data-test="sign-up-link"
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
export default Request;
