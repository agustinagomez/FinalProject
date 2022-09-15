import { configureStore } from '@reduxjs/toolkit'
import  usersReducer  from '../features/users/userSlice'

//If I have several files, data, they will all be grouped into one to be able to access from anywhere
export const store = configureStore({
  reducer:{
    users: usersReducer
  }
})

