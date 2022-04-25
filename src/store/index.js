import { configureStore } from "@reduxjs/toolkit";
/** Reducer */
import todoReducer from "./TodoSplice"

const store = configureStore ({
    reducer: {
        todo: todoReducer
    }
});

export default store;