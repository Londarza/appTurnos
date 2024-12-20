import {createApi, fetchBaseQuery}from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({        baseUrl: 'http://localhost:3000/'    }),
    endpoints: (builder) => ({
        loguinUser: builder.mutation({
            query: (userData)=>({
                url: 'users/loguin',
                method: 'POST',
                body: userData
            })
        }),
        getUserById: builder.query({
            query: (id)=> `users/${id}`
        })
    })
})

export const { useLoguinUserMutation, useGetUserByIdQuery} = usersApi