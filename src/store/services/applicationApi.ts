import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { env } from '../../env';

const baseQuery = fetchBaseQuery({
  baseUrl: env.VITE_API_URL,
  credentials: 'same-origin',
  mode: 'cors',
});

const applicationApi = createApi({
  reducerPath: 'applicationApi',
  baseQuery,
  endpoints: (builder) => ({
    getAbility: builder.query({
      query: (parameters) => `ability/?limit=${parameters.limit}&offset=${parameters.offset}`,
    }),
  }),
});

export const { useGetAbilityQuery } = applicationApi;

export default applicationApi;
