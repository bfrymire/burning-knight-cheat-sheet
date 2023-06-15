import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        show: false,
        item: null,
    },
    reducers: {
        showModal: (state) => { state.show = true },
        hideModal: (state) => { state.show = false },
        setModalItem: (state, actions) => { state.item = actions.payload.item },
        clearModalItem: (state) => { state.item = null },
    },
});

export const { showModal, hideModal, setModalItem, clearModalItem } = modalSlice.actions;

export default modalSlice.reducer;
