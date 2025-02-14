import { createBrowserRouter } from "react-router-dom";
import SignIn from "./features/auth/signIn";
import ForgotPassword from "./features/auth/forgotPassword";
import SignUp from "./features/auth/signUp";
import VerifyOtp from "./features/auth/verifyOtp";
import ResetPassword from "./features/auth/ressetPassword";
import Logo from "./features/auth/logo";
import Logos from "./features/auth/logos";
import Request from "./features/auth/request";
import TasksList from "./features/task/TasksList";
import Dummy from "./features/task/dummy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dummy />,
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
]);
