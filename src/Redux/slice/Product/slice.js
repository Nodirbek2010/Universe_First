import { createApi } from '@reduxjs/toolkit/query/react';
import { api } from '../../../api/api';

export const ProductsCrud = createApi({
    baseQuery: api,
    reducerPath: 'ProductsCrud',
    tagTypes: ['Products'],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'products/',
            providesTags: ['Products'],
        }),
        createProducts: builder.mutation({
            query: (body) => ({
                url: `products/`,
                method: "POST",
                body,
            }),
            invalidatesTags: ['Products'],
        }),
        updateProducts: builder.mutation({
            query: (body) => ({
                url: `products/${body.get('id')}/`,

                method: "PATCH",
                body,
            }),
            invalidatesTags: ['Products'],
        }),
        deleteProducts: builder.mutation({
            query: (body) => ({
                url: `products/${body.id}`,
                method: 'DELETE',
                body,
            }),
            invalidatesTags: ['Products']
        }),
    }),
});

export const {
  useGetProductsQuery,
  useCreateProductsMutation,
  useDeleteProductsMutation,
  useUpdateProductsMutation,
 
    
} = ProductsCrud;