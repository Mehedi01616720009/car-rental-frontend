import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hook";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type Props = {
    children: ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
    const token = useAppSelector(useCurrentToken);

    if (!token) {
        return <Navigate to={"/auth/login"} replace={true} />;
    }

    return children;
};

export default ProtectedRoute;
