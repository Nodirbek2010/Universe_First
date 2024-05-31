import { createApi } from '@reduxjs/toolkit/query/react';
import { api } from '../../../api/api';

export const CatigoriesCrud = createApi({
    baseQuery: api,
    reducerPath: 'CategoriesCrud',
    tagTypes: ['Catigories'],
    endpoints: (builder) => ({
        getCatigories: builder.query({
            query: () => 'categories/',
            providesTags: ['Catigories'],
        }),
        createCatigories: builder.mutation({
            query: (body) => ({
                url: `categories/`,
                method: "POST",
                body,
            }),
            invalidatesTags: ['Catigories'],
        }),
        updateCatigories: builder.mutation({
            query: (body) => ({
                url: `categories/${body.get('id')}/`,

                method: "PATCH",
                body,
            }),
            invalidatesTags: ['Catigories'],
        }),
        deleteCatigories: builder.mutation({
            query: (body) => ({
                url: `categories/${body.id}`,
                method: 'DELETE',
                body,
            }),
            invalidatesTags: ['Catigories']
        }),
    }),
});

export const {
  useGetCatigoriesQuery,
  useCreateCatigoriesMutation,
  useDeleteCatigoriesMutation,
  useUpdateCatigoriesMutation,
 
    
} = CatigoriesCrud;