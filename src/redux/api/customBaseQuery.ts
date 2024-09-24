import {
    BaseQueryApi,
    BaseQueryFn,
    DefinitionType,
    FetchArgs,
} from "@reduxjs/toolkit/query";
import { baseQuery } from "./baseApi";
import { logOut, setUser } from "../features/auth/authSlice";
import { RootState } from "../store";

type TErrorData = {
    success: boolean;
    message: string;
    errorMessages: {
        path: string;
        message: string;
    }[];
};

export const baseQueryWithRefreshToken: BaseQueryFn<
    FetchArgs,
    BaseQueryApi,
    DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error?.status === 404) {
        console.log((result.error?.data as TErrorData).message);
    }

    if (result.error?.status === 401) {
        const res = await fetch("http://localhost:3000/api/auth/access-token", {
            method: "GET",
            credentials: "include",
        });
        const refreshToken = await res.json();

        if (refreshToken?.data?.accessToken) {
            const user = (api.getState() as RootState).auth.user;
            api.dispatch(
                setUser({
                    user,
                    token: refreshToken.data.accessToken,
                })
            );

            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logOut());
        }
    }

    return result;
};
