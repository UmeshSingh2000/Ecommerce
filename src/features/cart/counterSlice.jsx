import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartCounter: 0,
    cartProducts: [],
    TotalAmount: 0
}
const calculateTotalAmount = (cartProducts) => {
    return cartProducts.reduce((total, product) => {
        let priceString = product.price.slice(1);
        priceString = priceString.replace(/,/g, '');
        const price = Number(priceString);
        return total + (price * product.qnty)
    }, 0);
};
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            const isExist = state.cartProducts.find(product => product.productId === action.payload.productId
            );
            if (isExist) {
                isExist.qnty += 1;
            } else {
                state.cartProducts.push({ ...action.payload, qnty: 1 });
                state.cartCounter += 1;
            }
            state.TotalAmount = calculateTotalAmount(state.cartProducts);
        },
        incrementQnty: (state, action) => {
            const isExist = state.cartProducts.find((product) => product.productId === action.payload.productId);
            if (isExist) {
                isExist.qnty += 1;
            }
            state.TotalAmount = calculateTotalAmount(state.cartProducts);
        },
        decrementQnty: (state, action) => {
            const isExist = state.cartProducts.find((product) => product.productId === action.payload.productId);
            if (isExist.qnty >= 0) {
                isExist.qnty -= 1;
                if (isExist.qnty === 0) {
                    state.cartProducts = state.cartProducts.filter((product) => product.productId !== action.payload.productId);
                    state.cartCounter -= 1;
                }
            }
            state.TotalAmount = calculateTotalAmount(state.cartProducts);
        },

        removeProduct: (state, action) => {
            const findProd = state.cartProducts.find((product) => product.productId === action.payload.productId);
            if (findProd) {
                state.cartProducts = state.cartProducts.filter(product => !(product.productId === action.payload.productId));
                state.cartCounter -= 1;
            }
            state.TotalAmount = calculateTotalAmount(state.cartProducts);

        }
    },
})
export const { increment, removeProduct, incrementQnty, decrementQnty } = counterSlice.actions

export default counterSlice.reducer