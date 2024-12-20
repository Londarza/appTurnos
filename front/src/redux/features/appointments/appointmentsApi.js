import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const appointmentsApi = createApi({
    reducerPath: 'appointmentsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (builder) => ({
        cancelApp: builder.mutation({
            query: (id) => ({
                url: 'appointments/cancel/' + id,
                method: 'PUT',
            })
        }),
        getAppointmentById: builder.query({
            query: (id) => `appointments/appointment/${id}`
        }),
        newAppointment: builder.mutation({
            query: (appData) => ({
                url: 'appointments/schedule',
                method: 'POST',
                body: appData
            })
        })

    }),

})

export const { useCancelAppMutation, useLazyGetAppointmentByIdQuery, useNewAppointmentMutation } = appointmentsApi