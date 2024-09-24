import { TQueryParam } from "../../../types/global.type";
import { baseApi } from "../../api/baseApi";

const metaApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMetaData: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args?.forEach((item: TQueryParam) => {
            params?.append(item.name, item.value as string);
          });
        }
        return {
          url: "/meta",
          method: "GET",
          params,
        };
      },
      providesTags: ["meta"],
    }),
    getProductChartData: builder.query({
      query: (duration) => {
        return {
          url: `/meta/product-chart?duration=${duration}`,
          method: "GET",
        };
      },
      providesTags: ["meta"],
    }),
    getCategoryProductChartData: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args?.forEach((item: TQueryParam) => {
            params?.append(item.name, item.value as string);
          });
        }
        return {
          url: "/meta/category-product-chart",
          method: "GET",
          params,
        };
      },
      providesTags: ["meta"],
    }),
  }),
});

export const {
  useGetMetaDataQuery,
  useGetProductChartDataQuery,
  useGetCategoryProductChartDataQuery,
} = metaApi;
