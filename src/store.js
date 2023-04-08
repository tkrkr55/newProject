import { configureStore, createSlice } from '@reduxjs/toolkit'
import products from './store/userSlice'




// configureStore 에는 combinereducer / thunk / applyMiddleware / composeWithDevTools 가 포함되어 있다.
export default configureStore({
  reducer: { 
    products : products.reducer,
 

  }
}) 