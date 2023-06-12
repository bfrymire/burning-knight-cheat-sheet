import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "../features/item/itemSlice";
import modalReducer from "../features/modal/modalSlice";

export default configureStore({
    reducer: {
        item: itemReducer,
        modal: modalReducer,
    },
});
