import { apiSlice } from "./apiSlice";
import { ORDERS_URL, PAYPAL_URL } from "../constants";

export const orderApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        creatOrder: builder.mutation({
            query: (order) => ({
                url: ORDERS_URL,
                method: "POST",
                body: {...order},
            }),
        }),
        getOrderDetails: builder.query({
            query: (orderId) => ({
                url: `${ORDERS_URL}/${orderId}`
            }),
            keepUnusedDataFor: 5
        }),
        payOrder: builder.mutation({
            query: ({ orderId, details }) => ({
                url: `${ORDERS_URL}/${orderId}/pay`,
                method: "PUT",
                body: {...details},
            }),
        }),
        getPayPalClientId: builder.query({
            query: () => ({
                url: PAYPAL_URL
            }),
            keepUnusedDataFor: 5
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
    useGetOrderDetailsQuery,
    usePayOrderMutation,
    useGetPayPalClientIdQuery,

    useGetOrdersQuery,
    useGetOrderByIdQuery,
    useAddOrderItemsMutation,
    useUpdateOrderToPaidMutation,
    useUpdateOrderToDeliveredMutation,
} = orderApiSlice;