import MainLayout from "@/components/layouts/MainLayout/MainLayout";
import AddUser from "@/Pages/AddUser/AddUser";
import Home from "@/Pages/Home/Home";
import Login from "@/Pages/Login/Login";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/users/add",
                element: <AddUser />,
            },
        ],
    },
    {
        path: "/auth/login",
        element: <Login />,
    },
]);
