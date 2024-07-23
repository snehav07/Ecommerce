import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
         addCart:(state,action)=>{
         const existingProduct = state.find(item=>item.id==action.payload.id)
         if(existingProduct){
              existingProduct.quantity++
              existingProduct.totalPrice = existingProduct.quantity * existingProduct.price 
              const remainingProducts = state.filter(item=>item.id!=existingProduct.id)
              state = [...remainingProducts,existingProduct] 
         }else{
            state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
         }
        },
        deleteCartItem:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        },
        incQuantity:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload)
            existingProduct.quantity++
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price 
            const remainingProducts = state.filter(item=>item.id!=existingProduct.id)
            state = [...remainingProducts,existingProduct] 
        },
        decQuantity:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload)
            existingProduct.quantity--
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price 
            const remainingProducts = state.filter(item=>item.id!=existingProduct.id)
            state = [...remainingProducts,existingProduct] 
        },
        deleteCart:(state,action)=>{
           return state = []
        }
    }
})

export const {addCart,deleteCartItem,incQuantity,decQuantity,deleteCart} = cartSlice.actions
export default cartSlice.reducer