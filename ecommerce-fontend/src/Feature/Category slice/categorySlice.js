import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCategory } from './getCategoryData';
export const categoryData = createAsyncThunk("category",
    async () => {
        const categories = getCategory();
        return categories;
        
    }
)
const categorySlice = createSlice({
    name:"category",
    initialState:{
        categoriesData: [], 
        isLoading: false,
        isError: false,
        error:null
    },
    extraReducers: (builder)=>{
        builder.addCase(categoryData.pending, (state)=>{
            state.isLoading = true
            state.isError = false
        }).addCase(categoryData.fulfilled, (state, action)=>{
            state.isLoading = false
            state.categoriesData = action.payload
        }).addCase(categoryData.rejected, (state,action)=>{
            state.isLoading= false
            state.isError = false,
            state.error = action?.error?.message
        })
    }
})

export default categorySlice.reducer;