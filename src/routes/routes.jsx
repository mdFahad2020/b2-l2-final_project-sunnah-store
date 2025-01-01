import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login/Login";
import Products from "../Pages/Products/Products";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import AuthLayout from "../Layout/AuthLayout";
import SignUp from "../Pages/Auth/SignUp/SignUp";
import NotFound from "../Pages/NotFound/NotFound";
import axios from "axios";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Navigate to={"/books"} replace />,
            },
            {
                path: ":key",
                element: <Home />
            },
            {
                path: "products",
                element: <Products />,
                loader: () => axios.get("https://sunnah-store-server-azure.vercel.app/products")
            },
            {
                path: "products/:key",
                element: <Products />,
                loader: ({ params }) => axios.get(`https://sunnah-store-server-azure.vercel.app/products/${params.key}`)
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
        ]
    },
    {
        path: "auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "signup",
                element: <SignUp />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
])

export default router;
