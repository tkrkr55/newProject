import { createSlice } from "@reduxjs/toolkit"

let products = createSlice({
  name:'products',
  initialState:[],
reducers :{
  pluscount(state,action){
    
   let index = state.findIndex((item)=> item.id === action.payload)
 
   if(index >= 0){
    state[index].count++
   }},

   minus(state,action){
    let index = state.findIndex((item)=> item.id === action.payload)

   if(index >= 0){
    state[index].count--
   }else if(index < 0){
    alert("수량을 입력하세요!")
   }
  },

   addItem(state,action){
    let 번호 = state.findIndex((item)=> item.id === action.payload.id)
    if(번호 >= 0){
      state[번호].count++
    }else{
    state.push(action.payload)
  } },
   addfilter(state,action){
    state.forEach((item,index)=>{
      if(item.id === action.payload){
        state.splice(index ,1)
      }
    })
  }
   
 

  }
})

export let {pluscount,minus,addItem,addfilter} = products.actions
export default products;