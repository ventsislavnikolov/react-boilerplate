import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  credentials: 'same-origin',
  mode: 'cors',
});

const applicationApi = createApi({
  reducerPath: 'applicationApi',
  baseQuery,
  endpoints: (builder) => ({
    getAbility: builder.query({
      query: (params) => `ability/?limit=${params.limit}&offset=${params.offset}`,
    }),
  }),
});

export const { useGetAbilityQuery } = applicationApi;

export default applicationApi;
