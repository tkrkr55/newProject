import { configureStore, createSlice } from '@reduxjs/toolkit'


let products = createSlice({
  name:'products',
  initialState:[{
     "id":0,
          "img":"https://media.gucci.com/style/HEXF1E9FB_Center_0_0_490x490/1674692157/730392_ZALYA_1187_002_100_0000_Light-.jpg",
          "title":"구찌 아이스크림 프린트 코튼 드레스",
          "price":3400000,
          count:0
  },
  {
    "id":1,
         "img":"https://media.gucci.com/style/HEXF1E9FB_Center_0_0_490x490/1674692157/730392_ZALYA_1187_002_100_0000_Light-.jpg",
         "title":"구찌 아이스크림 프린트 코튼 드레스",
         "price":3400000,
         count:0
 },
 

],
reducers :{
  pluscount(state,action){
    state.count += action.payload
  }
}
})

export let {pluscount} = products.actions


export default configureStore({
  reducer: { 
    products : products.reducer,
 

  }
}) 