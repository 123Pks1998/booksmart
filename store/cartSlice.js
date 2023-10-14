import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const item = state.cartItems.find((product) => product._id === action.payload._id)
            if (item) {
                item.quantity++,
                    item.price = item.oneQuantityPrice * item.quantity

            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 })
            }
        },
        updateCart: (state, action) => {
            state.cartItems = state.cartItems.map((product) => {
                if (product._id === action.payload._id) {
                    if (action.payload.key === "quantity") {
                        product.price = product.oneQuantityPrice * action.payload.val
                    }
                    return { ...product, [action.payload.key]: action.payload.val }

                }
                return product;
            })
        }
        ,

        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((product) => product._id !== action.payload._id)
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, updateCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer