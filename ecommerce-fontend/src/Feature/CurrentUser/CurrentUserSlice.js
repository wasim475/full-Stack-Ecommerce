import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const currentUser = createAsyncThunk("curuser", 
    async () => {
        const currentUser = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")): null
        return currentUser
    }
)

const currentUserSlice = createSlice({
    name:"currentUser",
    initialState:{
        currUser: null,
        isLoading: false
    },
    extraReducers: (builder)=>{
        builder.addCase(currentUser.pending, (state)=>{
            state.isLoading = true
        }).addCase(currentUser.fulfilled, (state, action)=>{
            state.isLoading=false
            state.currUser = action.payload
        })
    }
})

export default currentUserSlice.reducer