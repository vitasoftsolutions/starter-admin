import { jwtDecode } from "jwt-decode";
import { baseApi } from "../../api/baseApi";

const systemAssetSettingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllSystemAssetSettings: build.query({
      query: () => ({
        url: `/system-assets/1/`,
        method: "GET",
      }),
      transformResponse: (response) => {
        const resData = jwtDecode(response.data.results.token);
        return { data: resData.data };
      },
      providesTags: ["system-assets"],
    }),
    updateSystemAssetSetting: build.mutation({
      query: (payload) => ({
        url: `/system-assets/${payload.id}/`,
        method: "PATCH",
        body: payload.data,
      }),
      invalidatesTags: ["system-assets"],
    }),
  }),
});

export const {
  useGetAllSystemAssetSettingsQuery,
  useUpdateSystemAssetSettingMutation,
} = systemAssetSettingApi;
