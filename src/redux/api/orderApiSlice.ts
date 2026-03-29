import { ICartType } from "@/types/cart-type";
import { apiSlice } from "../api/apiSlice";
import { IDBResponseDT } from "@/types/db-response-dt";
import { ISaveOrderUserInfo, IUserOrdersRes } from "@/types/order-d-t";

export const authApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    createPaymentIntent: builder.mutation<
      IDBResponseDT<string>,
      { amount: number }
    >({
      query: (body) => ({
        url: "/order/create-payment-intent",
        method: "POST",
        body,
      }),
    }),
    saveOrder: builder.mutation<
      IDBResponseDT<{ message: string; orderId: number }>,
      {
        amount: number;
        paymentIntentId: string;
        products: ICartType[];
        shipCost: number;
        status: string;
        userInfo: ISaveOrderUserInfo;
      }
    >({
      query: (body) => ({
        url: "/order/save-order",
        method: "POST",
        body,
      }),
      invalidatesTags: ["user-orders"],
    }),

    // getUserOrders
    getUserOrders: builder.query<IDBResponseDT<IUserOrdersRes>, void>({
      query: () => `/order/user-orders`,
      providesTags: ["user-orders"],
      keepUnusedDataFor: 600,
    }),
  }),
});

export const { useCreatePaymentIntentMutation, useSaveOrderMutation, useGetUserOrdersQuery } = authApi;
