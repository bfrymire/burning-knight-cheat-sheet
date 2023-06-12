import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
    name: 'item',
    initialState: {
        activeItem: null
    },
    reducers: {
        setItem: (state, action) => { state.activeItem = action.payload.item },
        clearItem: (state) => { state.activeItem = null }
    }
});

export const { setItem, clearItem } = itemSlice.actions;

export default itemSlice.reducer;
