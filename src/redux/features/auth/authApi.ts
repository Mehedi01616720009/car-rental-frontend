import { baseApi } from "@/redux/api/baseApi";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => {
                console.log(credentials);
                return {
                    url: "/auth/signin",
                    method: "POST",
                    body: credentials,
                };
            },
        }),
    }),
});
