import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../Feature/userSlice/userSlice'
import categories from "../Feature/Category slice/categorySlice"
import subCategory from "../Feature/SubCategorySlice//SubCategorySlice"
import currentUserSlice from "../Feature/CurrentUser/CurrentUserSlice"
const store = configureStore({
  reducer: {
    users: userSlice,
    categories: categories,
    subCategories: subCategory,
    currentUser: currentUserSlice
  },
})

export default store;