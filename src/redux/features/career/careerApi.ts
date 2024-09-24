import { TQueryParam } from "../../../types/global.type";
import { baseApi } from "../../api/baseApi";

const careerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCareer: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args?.forEach((item: TQueryParam) => {
            params?.append(item.name, item.value as string);
          });
        }

        return {
          url: "/career",
          method: "GET",
          params,
        };
      },
      providesTags: ["career"],
    }),

    addCareer: builder.mutation({
      query: (data) => {
        return {
          url: "/career",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["career"],
    }),

    deleteCareer: builder.mutation({
      query: (id) => {
        return {
          url: `/career/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["career"],
    }),

    updateCareer: builder.mutation({
      query: (args) => {
        return {
          url: `/career/${args?.id}`,
          method: "PATCH",
          body: args?.data,
        };
      },
      invalidatesTags: ["career"],
    }),
  }),
});

export const {
  useAddCareerMutation,
  useDeleteCareerMutation,
  useGetAllCareerQuery,
  useUpdateCareerMutation,
} = careerApi;
