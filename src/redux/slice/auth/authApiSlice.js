import { apiSlice } from '../api/apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: {...credentials},
            }),
        }),
    }),
});

export const { useLoginMutation } = authApiSlice;
