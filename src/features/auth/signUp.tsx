import { Box,Button,Card,Text, Center, Flex, Group, Stack , TextInput,  Title,} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import * as yup from "yup";

export default function SignUp() {
    const navigate = useNavigate()
    const validateSchema = yup.object({
        fullName:yup.string().required("full name is required"),
        email:yup.string().email().required("email is required"),
        password:yup.string().required("password is required"),
        confirmPassword:yup.string().required("confirmPassword is required")
    })
    const form = useForm({
    initialValues:{
        fullName: "",
        email: "",
        password:"",
        confirmPassword: "",
    },
    validate:yupResolver(validateSchema)
    })
    async function sendForm() {
   const response = await axios.post('http://localhost:3000/users/signUp',form.values)
     if (response.data) {
        navigate('/forgot-password')
     }
    }
    return(
        <>
       <Center h="110vh" bg="#e6e9e9ff" w="100vw" px={"xs"}>
        <Card  w={410}  bg={"#ae21c2"} radius={10} p={20}>
            <form onSubmit={form.onSubmit(sendForm)}>
            <Stack>
            <Flex justify={"center"}>
                <Box h={88} w={88} bg={"grape"} style={{borderRadius:"45px"}}></Box>
            </Flex>
            <Title fw={600} fz={32} ta={"center"}>Sign Up</Title>
            <Text fw={400} fz={21} ta={"center"} c={"white"}>Sign up If you don’t have an account</Text>
             <TextInput
             size="md"
             label = "Full Name"
             c={"white"}
             placeholder="Full Name"
              required
              {...form.getInputProps("fullName")}
             />
              <TextInput
             size="md"
              label = "Email"
              c={"white"}
             placeholder="Email"
             required
             {...form.getInputProps("email")}
             
             />
              <TextInput
             size="md"
              label = "Password"
              c={"white"}
             placeholder="Password"
             required
             {...form.getInputProps("password")}
             
             />
              <TextInput
             size="md"
              label = "Confirm Password"
              c={"white"}
             placeholder="Confirm Password"
             required
             {...form.getInputProps("confirmPassword")}
             />
                         <Group justify="center">
            <Button type="submit" mt={15} radius={30} w={120} h={50} bg={"white"} c={"#afafb1ff"} fw={500} fz={17}>Sign Up</Button>
            </Group>
            <Flex justify={"center"} >
            <Text c={"white"} fw={500} fz={17}>Or Sign up with </Text>
         
            </Flex>
            </Stack>


            </form>
        </Card>
       </Center>
        </>
    )
}