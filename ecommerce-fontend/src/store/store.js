import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../Feature/userSlice/userSlice'
import categories from "../Feature/Category slice/categorySlice"
import subCategory from "../Feature/SubCategorySlice//SubCategorySlice"
const store = configureStore({
  reducer: {
    users: userSlice,
    categories: categories,
    subCategories: subCategory
  },
})

export default store;