import { Button } from "@/components/ui/button";
import NavMenu from "@/components/ui/navmenu";
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
            <div className="flex justify-between items-center gap-10 mx-6">
                <div className="grow">
                    <NavMenu />
                </div>

                <Button onClick={logoutHandler}>Logout</Button>
            </div>
        </div>
    );
};

export default Home;
