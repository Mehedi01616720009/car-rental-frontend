import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

type TUser = {
    _id: string;
    name: string;
    email: string;
    role: "superAdmin" | "admin" | "user";
    password: string;
    phone: string;
    address: string;
};

type TAuthState = {
    user: TUser | null;
    token: string | null;
};

const initialState: TAuthState = {
    user: null,
    token: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
        },
        logOut: (state) => {
            state.user = null;
            state.token = null;
        },
    },
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;

export const useCurrentToken = (state: RootState) => state.auth.token;
export const useCurrentUser = (state: RootState) => state.auth.user;
