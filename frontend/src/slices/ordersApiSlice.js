import { apiSlice } from "./apiSlice";
import { ORDERS_URL, PAYPAL_URL } from "../constants";

export const ordersApiSlice = apiSlice.injectEndpoints({
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
        getMyOrders: builder.query({
            query: () => ({url: `${ORDERS_URL}/myorders`}),
            keepUnusedDataFor: 5
        }),

        getOrders: builder.query({
            query: () => ({url: ORDERS_URL}),
            keepUnusedDataFor: 5
        }),
        deliverOrder: builder.mutation({
            query: (id) => ({
                url: `${ORDERS_URL}/${id}/deliver`,
                method: "PUT",
            }),
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
        
    }),
});


export const {
    useCreatOrderMutation,
    useGetOrderDetailsQuery,
    usePayOrderMutation,
    useGetPayPalClientIdQuery,
    useGetMyOrdersQuery,
    useGetOrdersQuery,
    useDeliverOrderMutation,

    useGetOrderByIdQuery,
    useAddOrderItemsMutation,
    useUpdateOrderToPaidMutation,
} = ordersApiSlice;