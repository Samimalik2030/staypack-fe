import {
  Button,
  Center,
  Stack,
  TextInput,
  Text,
  Box,
  Title,
  Image,
  Container,
  Card,
  Flex,
  Group,
  Anchor,
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";
import { useMediaQuery } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const isMobile = useMediaQuery("(max-width: 56.25em)");
  const navigate = useNavigate();

  const schema = yup.object({
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: yupResolver(schema),
  });

  function sendForm() {
    // signIn(newForm.values);
  }

  return (
    <>
      <Container fluid h={"100vh"} w={"100vw"}>
        <Flex h={"100vh"}>
          <Card w={"50%"} display={isMobile ? "none" : "block"}>
            <Image
              radius={20}
              src={
                "https://ik.imagekit.io/yzrrrgg3d/stayPack/d617ef3e-f483-4eef-a48e-d915d4dbb397.jfif?updatedAt=1739463303420"
              }
            />
          </Card>
          <Card
            w={isMobile ? "100%" : "50%"}
            h={"100vh"}
            style={{
              background: "linear-gradient(to bottom, #eaffcf, #ecfffd",
            }}
          >
            <Flex justify={"end"}>
              <Text>Don't have an account?</Text>
              <Button variant="outline" onClick={() => navigate("/sign-up")}>
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
                    Sign <span style={{ color: "#2A8C82" }}>In</span>
                  </Title>
                  <Text ta={"center"} fw={400} fz={21}>
                    Sign in If you have an account
                  </Text>
                </Stack>
                <Stack gap={13} mt={7}>
                  <TextInput label="Full Name" placeholder="John Doe" />
                  <TextInput
                    label="Your Email"
                    placeholder="johndoe@gmail.com"
                  />
                  <Group justify="end">
                    <Anchor
                      c={"#2A8C82"}
                      onClick={() => navigate("/forgot-password")}
                    >
                      Forgot Password?
                    </Anchor>
                  </Group>

                  <Button
                    fw={600}
                    fz={16}
                    w={"100%"}
                    mt={7}
                    h={42}
                    radius={16}
                    bg={"#2A8C82"}
                  >
                    Sign In
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

export default SignIn;
