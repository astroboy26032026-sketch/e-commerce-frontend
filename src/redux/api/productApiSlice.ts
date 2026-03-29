import { apiSlice } from "../api/apiSlice";
import { IDBResponseDT } from "@/types/db-response-dt";
import { IProduct } from "@/types/product-d-t";

export const authApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    // get all products
    getAllProducts: builder.query<
      IDBResponseDT<{ products: IProduct[]; totalCount: number }>,
      {
        categoryId?: number | null;
        limit?: number | null;
        page?: number | null;
      }
    >({
      query: ({ categoryId = null, limit = null, page = null }) => {
        let url = "/product/show-all";
        const params = new URLSearchParams();

        if (categoryId !== null) {
          params.append("parentCategory", categoryId.toString());
        }

        if (limit !== null) {
          params.append("limit", limit.toString());
        }

        if (page !== null) {
          params.append("page", page.toString());
        }

        if (params.toString()) {
          url += `?${params.toString()}`;
        }

        return url;
      },
      providesTags: ["all-products"],
    }),
    // get products by price range
    getProductsByPriceRange: builder.query<IDBResponseDT<IProduct[]>, string>({
      query: (query) => `/product/price-range-products?${query}`,
      providesTags: ["all-products"],
      keepUnusedDataFor: 600,
    }),
    getProductsByCategory: builder.query<IDBResponseDT<IProduct[]>, string | null>({
      query: (query) => `/product/category-products?${query}`,
      providesTags: ["all-products"],
      keepUnusedDataFor: 600,
    }),
    getProductsByBrand: builder.query<IDBResponseDT<IProduct[]>, string>({
      query: (query) => `/product/brand-products?${query}`,
      providesTags: ["all-products"],
      keepUnusedDataFor: 600,
    }),
    getSearchProducts: builder.query<IDBResponseDT<IProduct[]>, string | null>({
      query: (query) => `/product/search-products?searchText=${query}`,
      providesTags: ["all-products"],
      keepUnusedDataFor: 600,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductsByPriceRangeQuery,
  useGetProductsByCategoryQuery,
  useGetProductsByBrandQuery,
  useGetSearchProductsQuery,
} = authApi;
