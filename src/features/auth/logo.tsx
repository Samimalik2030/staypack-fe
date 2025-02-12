import {
  Card,
  Container,
  Image,
  Flex,
  Text,
  Button,
  Center,
  Box,
  Title,
  Stack,
  TextInput,
  Divider,
} from "@mantine/core";
export default function SignIn() {
  return (
    <>
      <Container fluid h={"100vh"} w={"100vw"} p={10}>
        <Flex>
          <Card p={6} w={"50%"} h={"98vh"}>
            <Image
              radius={20}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "fill",
              }}
              src={
                "https://ik.imagekit.io/yzrrrgg3d/Frame%201.png?updatedAt=1739258795564"
              }
            ></Image>
          </Card>
          <Card bg={"#eafbe4"} w={"50%"} h={"98vh"} radius={20}>
            <Flex justify={"end"} align={"center"} gap={15} px={20}>
              <Text fw={400} fz={16} c={"white"}>
                All ready have an account?
              </Text>
              <Button
                fw={600}
                fz={16}
                style={{ border: "1px solid #2A8C82" }}
                bg={"transparent"}
                c={"#2A8C82"}
                w={151}
                h={41}
              >
                Sign In
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
                    Sign <span style={{ color: "#2A8C82" }}>Up</span>
                  </Title>
                  <Text ta={"center"} fw={400} fz={21} c={"white"}>
                    Sign up If you don’t have an account
                  </Text>
                </Stack>
                <Stack gap={13} mt={7}>
                  <TextInput
                    fw={300}
                    fz={9}
                    c={"#6d7572"}
                    label="Full Name"
                    placeholder="Enter Your Email"
                    size="md"
                    w={"100%"}
                    radius={16}
                  />
                  <TextInput
                    fw={300}
                    fz={9}
                    c={"#6d7572"}
                    label="Your Email"
                    placeholder="Enter Your Email"
                    size="md"
                    w={"100%"}
                    radius={16}
                  />
                  <TextInput
                    fw={300}
                    fz={9}
                    c={"#6d7572"}
                    label=" Password"
                    placeholder="Enter Your Password"
                    size="md"
                    w={"100%"}
                    radius={16}
                  />
                  <TextInput
                    fw={300}
                    fz={9}
                    c={"#6d7572"}
                    //  rightSection={<IconEye />}
                    label="Confirm Password"
                    placeholder="Enter Your Password"
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
                  >
                    Sign Up
                  </Button>
                  <Flex justify={"center"} align={"center"} gap={20}>
                    <Divider size={"sm"} color={"#909090"} w={140}></Divider>
                    <Text fw={600} fz={14} color={"#909090"}>
                      Or Sign up with
                    </Text>
                    <Divider size={"sm"} color={"#909090"} w={140}></Divider>
                  </Flex>
                </Stack>
              </Card>
            </Center>
          </Card>
        </Flex>
      </Container>
    </>
  );
}
