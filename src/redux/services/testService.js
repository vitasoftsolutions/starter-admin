import { baseApi } from "../api/baseApi";

const testService = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTest: build.query({
      query: () => ({
        url: "/all",
        method: "GET",
      }),
      providesTags: ["test"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetTestQuery } = testService;
