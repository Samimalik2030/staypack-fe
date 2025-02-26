import { createBrowserRouter } from "react-router-dom";
import ForgotPassword from "./features/auth/forgotPassword";
import SignUp from "./features/auth/signUp";
import VerifyOtp from "./features/auth/verifyOtp";
import ResetPassword from "./features/auth/ressetPassword";

import TasksList from "./features/task/TasksList";
import StudentStepper from "./features/stepper/student/studentStepper";
import SignIn from "./features/auth/signIn";
import LandingPage from "./features/landing-page/landingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "verify-otp",
    element: <VerifyOtp />,
  },
  {
    path: "reset-password",
    element: <ResetPassword />,
  },

  {
    path: "tasks",
    element: <TasksList />,
  },
  {
    path: "student-stepper",
    element: <StudentStepper />,
  },
  {
    path: "landing-page",
    element: <LandingPage />,
  },
]);
