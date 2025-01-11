import { asyncThunkCreator, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getusers } from './getApi';

export const fetchUsers = createAsyncThunk("users",
  async () => {
    const users =getusers()
    return users
  }
)

const userSlice = createSlice({
  name:"users",
  initialState:{
    users:[],
    isLoading: false,
    isError: false,
    error:null
  },
  extraReducers: (builder)=>{
    builder.addCase(fetchUsers.pending, (state)=>{
      state.isLoading = true
      state.isError= false
    }).addCase(fetchUsers.fulfilled, (state, action)=>{
        state.isLoading = false,
        state.users = action.payload
    }).addCase(fetchUsers.rejected, (state, action)=>{
      state.isLoading= false,
      state.isError = false,
      state.error = action.error?.message
    })
  }
})

export default userSlice.reducer