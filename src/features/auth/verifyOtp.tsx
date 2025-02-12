import {
  Box,
  Button,
  Card,
  Text,
  Center,
  Flex,
  Title,
  Group,
  Stack,
  PinInput,
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const VerifyOtp = () => {
    const navigate = useNavigate()
  const validateSchema = yup.object({
    otp: yup.number().required("otp is required"),
  });
  const form = useForm({
    initialValues: { 
      otp: 0,
    },
    validate: yupResolver(validateSchema),
  });
  const { mutate: verifyotp, isPending } = useMutation({
    mutationFn: () =>
      axios.post("http://localhost:3000/users/reset-password", form.values),
    onSuccess: (data) => {
      console.log(data.data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  function sendForm() {
    verifyotp();
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
                Verify Otp
              </Title>
              <Text ta={"center"} fw={400} fz={21} c={"white"}>
                Enter the otp sent to your email to continue
              </Text>
              <Group justify="center">
                <PinInput length={6} {...form.getInputProps("otp")} />
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
                  Verify OTP
                </Button>
              </Group>
            </Stack>
          </form>
        </Card>
      </Center>
    </>
  );
};
export default VerifyOtp;
