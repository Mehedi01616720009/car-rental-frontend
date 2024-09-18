import { baseApi } from "@/redux/api/baseApi";

export const carApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCar: builder.query({
            query: () => {
                return {
                    url: "/cars",
                    method: "GET",
                };
            },
        }),
    }),
});
