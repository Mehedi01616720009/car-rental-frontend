import Home from "@/Pages/Home/Home";
import Login from "@/Pages/Login/Login";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/auth/login",
        element: <Login />,
    },
]);
