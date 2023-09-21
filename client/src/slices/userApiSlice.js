import { apiSlice } from "./apiSlice";
const URL = '/api/users';
const PAY_URL = '/api/bkash';

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        login: builder.mutation({
            query: (data) => ({
                url: `${URL}/auth`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['User']
        }),



        register: builder.mutation({
            query: (data) => ({
                url: `${URL}`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['User']
        }),

        forgotPassword: builder.mutation({
            query: (data) => ({
                url: `${URL}/auth/forgot-password`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['User']
        }),

        resetPassword: builder.mutation({
            query: (data) => ({
                url: `${URL}/auth/reset-password/${data.token}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['User']
        }),


        updateProfile: builder.mutation({
            query: (data) => ({
                url: `${URL}/profile`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['User']
        }),

        deleteProfile: builder.mutation({
            query: () => ({
                url: `${URL}/profile`,
                method: 'DELETE',
            }),
            invalidatesTags: ['User']
        }),



        logout: builder.mutation({
            query: () => ({
                url: `${URL}/logout`,
                method: 'POST',
            }),
            invalidatesTags: ['User']
        }),


        paymentCreate: builder.mutation({
            query: () => ({
                url: `${PAY_URL}/payment/create`,
                method: 'POST',
            }),
            invalidatesTags: ['User']
        }),


    })
});

export const {
    useLoginMutation,

    useRegisterMutation,

    useUpdateProfileMutation,
    useDeleteProfileMutation,

    useLogoutMutation,

    useForgotPasswordMutation,
    useResetPasswordMutation,

    usePaymentCreateMutation,

} = userApiSlice;
