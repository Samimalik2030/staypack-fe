import { createBrowserRouter } from "react-router-dom";
import SignIn from "./features/auth/signIn";
import ForgotPassword from "./features/auth/forgotPassword";
import SignUp from "./features/auth/signUp";
import VerifyOtp from "./features/auth/verifyOtp";
import ResetPassword from "./features/auth/ressetPassword";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <SignIn />
    },
    {
        path: 'signup',
        element: <SignUp />
    },
    {
        path: 'forgot-password',
        element: <ForgotPassword />
    },
    {
        path: 'verify-otp',
        element: <VerifyOtp />
    },
    {
        path: 'reset-password',
        element: <ResetPassword />
    },
])