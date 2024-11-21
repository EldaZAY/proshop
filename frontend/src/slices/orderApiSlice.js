import { apiSlice } from "./apiSlice";
import { ORDERS_URL } from "../constants";

export const orderApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        creatOrder: builder.mutation({
            query: (order) => ({
                url: ORDERS_URL,
                method: "POST",
                body: {...order},
            }),
        }),


        getOrders: builder.query({
            query: () => ORDERS_URL,
        }),
        getOrderById: builder.query({
        query: (id) => `${ORDERS_URL}/${id}`,
        }),
        addOrderItems: builder.mutation({
        query: (order) => ({
            url: ORDERS_URL,
            method: "POST",
            body: order,
        }),
        }),
        updateOrderToPaid: builder.mutation({
        query: ({ id, paymentResult }) => ({
            url: `${ORDERS_URL}/${id}/pay`,
            method: "PUT",
            body: paymentResult,
        }),
        }),
        updateOrderToDelivered: builder.mutation({
        query: (id) => ({
            url: `${ORDERS_URL}/${id}/deliver`,
            method: "PUT",
        }),
        }),
    }),
});


export const {
    useCreatOrderMutation,
    useGetOrdersQuery,
    useGetOrderByIdQuery,
    useAddOrderItemsMutation,
    useUpdateOrderToPaidMutation,
    useUpdateOrderToDeliveredMutation,
} = orderApiSlice;