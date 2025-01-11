import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../Feature/userSlice/userSlice'
const store = configureStore({
  reducer: {
    users: userSlice,
  },
})

export default store;