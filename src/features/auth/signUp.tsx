import { Box,Button,Card,Text, Center, Flex, Group, Stack , TextInput,} from "@mantine/core";

export default function SignUp() {
    return(
        <>
       <Center h="100vh" bg={"red"} w="100vw">
        <Card  w={410}  bg={"#ae21c2"} radius={10}>
            <Stack>
            <Flex justify={"center"}>
                <Box h={88} w={88} bg={"grape"} style={{borderRadius:"45px"}}></Box>
            </Flex>
             <TextInput
             size="md"
             label = "Full Name"
             placeholder="Full Name"

             />
              <TextInput
             size="md"
              label = "Email"
             placeholder="Email"
             
             />
              <TextInput
             size="md"
              label = "Password"
             placeholder="Password"
             
             />
              <TextInput
             size="md"
              label = "Confirm Password"
             placeholder="Confirm Password"
             
             />
            </Stack>
            <Button mt={15} radius={30} w={120} h={50} bg={"white"} c={"#afafb1ff"} fw={500} fz={17}>Sign Up</Button>
            <Group>
                <Text>Don't have an account? Sign up Now!</Text>
            </Group>
        </Card>
       </Center>
        </>
    )
}