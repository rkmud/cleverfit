import { apiSlice } from '../api/apiSlice';

export const restoreApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        checkMail: build.mutation({
            query: (body) => ({
                url: '/auth/check-email',
                method: 'POST',
                body,
            }),
        }),
        sendLetter: build.mutation({
            query: (body) => ({
                url: '/auth/confirm-email',
                method: 'POST',
                body,
            }),
        }),
        restorePass: build.mutation({
            query: (body) => ({
                url: '/auth/change-password',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useCheckMailMutation, useSendLetterMutation, useRestorePassMutation } =
    restoreApiSlice;
