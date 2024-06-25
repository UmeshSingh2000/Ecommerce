import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartCounter: 0,
    cartProducts: [],
    TotalAmount: 0
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            const isExist = state.cartProducts.find((product) => product.id === action.payload.id && product.title === action.payload.title);
            if (isExist) {
                isExist.qnty += 1;
                return;
            }
            state.cartProducts.push(action.payload),
                state.cartCounter += 1;
        },
        decrement: (state, action) => {
            const findProd = state.cartProducts.find((product) => product.id === action.payload.id && product.title === action.payload.title)
            if (findProd.qnty >= 0) {
                findProd.qnty -= 1;
                if (findProd.qnty === 0) {
                    state.cartProducts = state.cartProducts.filter((product) => product.id !== action.payload.id && product.title !== action.payload.title);
                    state.cartCounter -= 1;
                }
            }
        },
        removeProduct : (state,action)=>{
            state.cartProducts = state.cartProducts.filter((product)=>product.id !== action.payload.id && product.title !== action.payload.title);
            state.cartCounter -= 1;

        }
    },
})
export const { increment, decrement,removeProduct } = counterSlice.actions

export default counterSlice.reducer