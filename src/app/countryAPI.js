import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const countryApi = createApi({
  reducerPath: "countryApis",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/data",
  }),
  endpoints: (builder) => ({
    allData: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),
    createCity: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/",
          body: data,
          method: "POST",
        };
      },
    }),
  }),
});
export default countryApi;
export const { useAllDataQuery, useCreateCityMutation } = countryApi;
