import ProtectedRoute from "@/components/layouts/ProtectedRoute/ProtectedRoute";
import Home from "@/Pages/Home/Home";
import Login from "@/Pages/Login/Login";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>
        ),
    },
    {
        path: "/auth/login",
        element: <Login />,
    },
]);
