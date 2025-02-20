import { Button, Container, Group, Stepper, Grid, Box } from "@mantine/core";
import { useState } from "react";

const StudentStepper = () => {
  const [active, setActive] = useState(1);

  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <Container maw={1440} fluid p={"xl"}>
      <Grid>
        {/* Left column for Stepper */}
        <Grid.Col span={2} style={{ borderRight: "1px solid #ddd" }}>
          <Stepper
            orientation="vertical"
            active={active}
            onStepClick={setActive}
          >
            <Stepper.Step
              label="First step"
              description="Create an account"
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
        </Grid.Col>

        {/* Right column for content */}
        <Grid.Col span={10} p="lg" bg={"red"}>
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
            <Button onClick={nextStep}>Next step</Button>
          </Group>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default StudentStepper;
