import { createBrowserRouter } from "react-router-dom";
import SignIn from "./features/auth/signIn";
import ForgotPassword from "./features/auth/forgotPassword";
import SignUp from "./features/auth/signUp";
import VerifyOtp from "./features/auth/verifyOtp";
import ResetPassword from "./features/auth/ressetPassword";
import Logo from "./features/auth/logo";
import Logos from "./features/auth/logos";
import Request from "./features/auth/request";

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
    path: "logo",
    element: <Logo />,
  },
  {
    path: "logos",
    element: <Logos />,
  },
  {
    path: "request",
    element: <Request />,
  },
]);
