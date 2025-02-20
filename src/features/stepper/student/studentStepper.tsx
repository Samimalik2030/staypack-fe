import {
  Button,
  Container,
  Group,
  Stepper,
  Grid,
  Box,
  Title,
  Flex,
  Anchor,
} from "@mantine/core";
import { useState } from "react";
import IconArrowNarrowLeft from "../../../assets/icons/IconArrowNarrowLeft";
import IconBinance from "../../../assets/icons/IconBinance";
const StudentStepper = () => {
  const [active, setActive] = useState(1);

  const nextStep = () =>
    setActive((current) => (current < 6 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <Container fluid p={0}>
      <Grid p={"lg"}>
        {/* Left column for Stepper */}
        <Grid.Col
          span={3}
          style={{ borderRadius: "12px" }}
          bg={"#f4f4f7"}
          h={"97vh"}
        >
          <Flex
            direction={"column"}
            h={"100%"}
            justify={"space-between"}
            p={"xl"}
            align={"start"}
          >
            <Group>
              <IconBinance color="#2A8C82" />
              <Title
                c={"#2A8C82"}
                style={{
                  fontSize: "24px",
                }}
              >
                StayPack
              </Title>
            </Group>

            <Stepper
              color="#2A8C82"
              orientation="vertical"
              active={active}
              onStepClick={setActive}
              styles={{
                stepIcon: {
                  borderRadius: "8px",
                },
              }}
            >
              <Stepper.Step
                label="First step"
                description="Create an account"
                icon={<IconArrowNarrowLeft size={18} />}
              ></Stepper.Step>
              <Stepper.Step
                label="Second step"
                description="Verify email"
              ></Stepper.Step>
              <Stepper.Step
                label="Third step"
                description="Fill in your profile"
              ></Stepper.Step>
              <Stepper.Step
                label="Fourth step"
                description="Add payment information"
              ></Stepper.Step>
              <Stepper.Step
                label="Fifth step"
                description="Review and confirm details"
              ></Stepper.Step>
              <Stepper.Step
                label="Final step"
                description="Get full access"
              ></Stepper.Step>

              <Stepper.Completed>
                Completed, click back button to get to previous step
              </Stepper.Completed>
            </Stepper>
            <Box h={150}></Box>
            <Group justify="space-between" w={"100%"}>
              <Group>
                {/* <IconArrowNarrow color="#2A8C82" /> */}
                <IconArrowNarrowLeft color="#2A8C82" />
                <Anchor>Back to Home</Anchor>
              </Group>
              <Anchor>SignIn</Anchor>
            </Group>
          </Flex>
        </Grid.Col>

        {/* Right column for content */}
        <Grid.Col span={9} p="lg">
          <Container>
            {active === 0 && <Box>Step 1 content: Create an account</Box>}
            {active === 1 && <Box>Step 2 content: Verify email</Box>}
            {active === 2 && <Box>Step 3 content: Fill in your profile</Box>}
            {active === 3 && <Box>Step 4 content: Add payment information</Box>}
            {active === 4 && (
              <Box>Step 5 content: Review and confirm details</Box>
            )}
            {active === 5 && <Box>Step 6 content: Get full access</Box>}
            {active === 6 && (
              <Box>Completed, click back button to get to previous step</Box>
            )}
          </Container>

          <Group justify="end" mt="xl">
            <Button variant="default" onClick={prevStep}>
              Back
            </Button>
            <Button onClick={nextStep}>Next</Button>
          </Group>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default StudentStepper;
