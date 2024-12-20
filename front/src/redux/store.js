import { configureStore } from '@reduxjs/toolkit'
import { usersApi } from './features/users/usersApi'
import { appointmentsApi } from './features/appointments/appointmentsApi'
import usersReducer from './features/users/usersSlice'
const store = configureStore({
    reducer: {
        userSlice: usersReducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [appointmentsApi.reducerPath]: appointmentsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersApi.middleware, appointmentsApi.middleware),


})

export default store