import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: false,
    user: {}
}

const usersSlice = createSlice({
    name: 'usersSlice', 
    initialState,
    reducers: {
        setUserData: (state, action)=>{
                state.login = action.payload.login,
                state.user = action.payload.user
        },
        logOut: (state) =>{
            state.login = false
            state.user = {}
        }
    }

})

export const {setUserData,logOut} = usersSlice.actions
export default usersSlice.reducer