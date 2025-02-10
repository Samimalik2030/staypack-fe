import { Box,Button,Card,Text, Center, Flex, Group, Stack , TextInput, Anchor, Title,} from "@mantine/core";
import { useForm, yupResolver, } from "@mantine/form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";


export default function ForgotPassword() {
        const naviagte = useNavigate()
    
    const validateSchema = yup.object({
        email:yup.string().email().required('email is required')
    })
    const form = useForm({
        initialValues:{
            email: "",
        },
        validate:yupResolver(validateSchema)
    })
   async function sendForm() {
      const response =await  axios.post('http://localhost:3000/users/forgot-Password',form.values)
   if(response.data){
    naviagte('/verify-otp')
   }
    }
  
    return(
        <>
          <Center h="100vh" bg="#e6e9e9ff" w="100vw" px={'xs'}>
                <Card  w={410}  bg={"#ae21c2"} radius={10}>
                 <form onSubmit={form.onSubmit(sendForm)}>
                    <Stack>
                    <Flex justify={"center"}>
                        <Box h={88} w={88} bg={"grape"} style={{borderRadius:"45px"}}></Box>
                    </Flex>
                    <Title ta={"center"} fw={600} fz={32} c={"white"}>Forgot Password</Title>
                    <Text ta={"center"} fw={400} fz={21} c={"white"}>Forgot your password? Let’s get you back on the track.</Text>
                      <TextInput
                     size="md"
                      label = "Your Email"
                      c={"white"}
                     placeholder="Enter Your Email"
                  
                     {...form.getInputProps("email")}
                     />
                      <Group justify="center">
                    <Button type="submit" mt={15} radius={30} w={120} h={50} bg={"white"} c={"#afafb1ff"} fw={500} fz={17}>Next</Button>
                    </Group>
                    </Stack>
                    </form>
                   
                </Card>
               </Center>
        </>
    )
}