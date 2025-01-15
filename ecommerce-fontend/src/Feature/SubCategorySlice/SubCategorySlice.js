import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSubCat } from "./getSubCat";
export const subCategoryData = createAsyncThunk("subcat", async () => {
  const subCat = getSubCat();
  return subCat;
});
const subCategorySlice = createSlice({
  name: "subCategory",
  initialState: {
    subCategories: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (build) => {
    build
      .addCase(subCategoryData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(subCategoryData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.subCategories = action.payload;
      })
      .addCase(subCategoryData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message;
      });
  },
});

export default subCategorySlice.reducer;
