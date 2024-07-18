import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            state.totalAmount += action.payload.price;
        },
        removeItem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                state.totalAmount -= action.payload.price * existingItem.quantity;
                state.items = state.items.filter(item => item.id !== action.payload.id);
            }
        },
        incrementItem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity++;
                state.totalAmount += action.payload.price;
            }
        },
        decrementItem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity--;
                state.totalAmount -= action.payload.price;
            }
        },
    },
});

export const { addItem, removeItem, incrementItem, decrementItem } = cartSlice.actions;
export default cartSlice.reducer;
