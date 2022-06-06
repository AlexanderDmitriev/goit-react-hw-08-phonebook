import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const phoneBookApi = createApi({
  reducerPath: 'phoneBook',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  prepareHeaders: (headers, { getState }) => {
    const token = getState().authification.token

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getAllContacts: builder.query({
      query: () => ({
        url: `/contacts`,
        method: 'GET'
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
