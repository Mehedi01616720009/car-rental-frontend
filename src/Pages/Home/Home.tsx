import { Button } from "@/components/ui/button";
import { logOut } from "@/redux/features/auth/authSlice";
import { carApi } from "@/redux/features/car/carApi";
import { useAppDispatch } from "@/redux/hook";

const Home = () => {
    const dispatch = useAppDispatch();
    const { data, isError, error } = carApi.useGetAllCarQuery(undefined);
    console.log(data, isError, error);

    const logoutHandler = () => {
        dispatch(logOut());
    };

    return (
        <div>
            <h1>this is home</h1>
            <Button onClick={logoutHandler}>Logout</Button>
        </div>
    );
};

export default Home;
