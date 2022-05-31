import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';
/* import {BASIC_URL} from '../api/basicData'; */

export const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: axios.defaults.baseURL,
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
    addNewUser: builder.mutation({
      query: ({ name, email, password }) => ({
        url: `/users/signup`,
        method: 'POST',
        body: {
          name: name,
          email: email,
          password: password,
        },
      }),
      invalidatesTags: ['User'],
    }),
    loginUser: builder.mutation({
      query: ({ email, password }) => ({
        url: `/users/login`,
        method: 'POST',
        body: {
          email: email,
          password: password,
        },
      }),
      invalidatesTags: ['User'],
    }),
    logoutUser: builder.mutation({
      query: ({ token }) => ({
        url: `/users/logout`,
        method: 'POST',
        body: {
          token: token,
        },
      }),
      invalidatesTags: ['User'],
    }),
    getUserInformation: builder.query({
      query: token => ({
        url: `/users/current`,
        method: 'GET',
        body: {
          token: token,
        },
      }),
      providesTags: ['User'],
    }),
  }),
});

export const {
  useAddNewUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useGetUserInformationQuery,
} = usersApi;


