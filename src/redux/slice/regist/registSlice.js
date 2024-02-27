import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const registSlice = createApi({
    reducerPath: 'regist',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://marathon-api.clevertec.ru/',
    }),
    endpoints: (build) => ({
        registerUser: build.mutation({
            query: (body) => ({
                url: 'auth/registration',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useRegisterUserMutation } = registSlice;
