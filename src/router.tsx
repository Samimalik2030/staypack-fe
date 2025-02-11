import { createBrowserRouter } from "react-router-dom";
import SignIn from "./features/auth/signIn";
import ForgotPassword from "./features/auth/forgotPassword";
import SignUp from "./features/auth/signUp";
import VerifyOtp from "./features/auth/verifyOtp";
import ResetPassword from "./features/auth/ressetPassword";
import CreateTask from "./features/task/CreateTask";
import TasksList from "./features/task/TasksList";

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
    path: "create-task",
    element: <CreateTask />,
  },
]);
