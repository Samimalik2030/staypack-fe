import { Box,Button,Card,Text, Center, Flex, Group, Stack , TextInput, Anchor,Title,} from "@mantine/core";
import { useForm, yupResolver, } from "@mantine/form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

export default function ResetPassword() {
    const navigate = useNavigate()
    const validateSchema = yup.object({
        email:yup.string().email().required("email is required"),
        password:yup.string().required("password is required")
    })
    const form = useForm({
        initialValues:{
            email: "",
            password: "",
        },
        validate:yupResolver(validateSchema)
    })
   async function sendForm() {
    const response = await axios.patch('http://localhost:3000/users/reset-password',form.values)
    if(response.data) {
        navigate('/signin')
    }
    }
    return(
        <>
          <Center h="100vh" bg="#e6e9e9ff" w="100vw">
                        <Card  w={410}  bg={"#ae21c2"} radius={10}>
                         <form onSubmit={form.onSubmit(sendForm)}>
                            <Stack>
                            <Flex justify={"center"}>
                                <Box h={88} w={88} bg={"grape"} style={{borderRadius:"45px"}}></Box>
                            </Flex>
                                <Title ta={"center"} fw={600} fz={32} c={"white"}>Reset Password</Title>
                                                <Text ta={"center"} fw={400} fz={21} c={"white"}>Reset your password? Let’s get you back on the track.</Text>
                              <TextInput
                             size="md"
                             c={"white"}
                              label = "Password"
                             placeholder="Password"
                             required
                             {...form.getInputProps("email")}
                             />
                               <TextInput
                             size="md"
                             c={"white"}
                              label = "Confirm Password"
                             placeholder="Confirm Password"
                             required
                             {...form.getInputProps("password")}
                             />
                              <Group justify="center">
                            <Button type="submit" mt={15} radius={30} w={120} h={50} bg={"white"} c={"#afafb1ff"} fw={500} fz={17}>Reset</Button>
                            </Group>
                            </Stack>
                            </form>
                           
                        </Card>
                       </Center>
        </>
    )
}