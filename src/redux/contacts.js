import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASIC_URL } from '../api/basicData';

export const phoneBookApi = createApi({
  reducerPath: 'phoneBook',
  baseQuery: fetchBaseQuery({
    baseUrl: BASIC_URL,
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getAllContacts: builder.query({
      query: token => ({
        url: `/contacts`,
        method: 'GET',
        body: {
          token: token,
        },
      }),
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: ({ token, name, number }) => ({
        url: `/contacts`,
        method: 'POST',
        body: {
          token: token,
          name: name,
          phone: number,
        },
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: ({ token, contactId }) => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
        body: {
          token: token,
          contactId: contactId,
        },
      }),
      invalidatesTags: ['Contacts'],
    }),
    patchContact: builder.mutation({
      query: ({ token, name, number, contactId }) => ({
        url: `/contacts/${contactId}`,
        method: 'PATCH',
        body: {
          token: token,
          name: name,
          phone: number,
        },
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  usePatchContactMutation,
} = phoneBookApi;
