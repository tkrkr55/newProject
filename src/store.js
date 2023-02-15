import { configureStore, createSlice } from '@reduxjs/toolkit'
import products from './store/userSlice'





export default configureStore({
  reducer: { 
    products : products.reducer,
 

  }
}) 