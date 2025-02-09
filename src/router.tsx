import { createBrowserRouter } from "react-router-dom";
import SignIn from "./features/auth/signIn";
import SignUp from "./features/auth/signup";

export const router = createBrowserRouter([
{
    path:'signin',
    element:<SignIn/>
},
{
path:'signup',
element:<SignUp/>
},
])