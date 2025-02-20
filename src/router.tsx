import { createBrowserRouter } from "react-router-dom";
import ForgotPassword from "./features/auth/forgotPassword";
import SignUp from "./features/auth/signUp";
import VerifyOtp from "./features/auth/verifyOtp";
import ResetPassword from "./features/auth/ressetPassword";

import Request from "./features/auth/request";
import TasksList from "./features/task/TasksList";
import StudentStepper from "./features/stepper/student/studentStepper";
import SignIn from "./features/auth/logo";

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
    path: "request",
    element: <Request />,
  },
  {
    path: "tasks",
    element: <TasksList />,
  },
  {
    path: "student-stepper",
    element: <StudentStepper />,
  },
]);
