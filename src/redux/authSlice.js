import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    
}

const userAuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        saveUser(state, action){
            state.user = action.payload
        },
        saveToken(state, action){
            state.authToken = action.payload
        }
    },
})

export const { saveUser, saveToken} = userAuthSlice.actions
export default userAuthSlice.reducer