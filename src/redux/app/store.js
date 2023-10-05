import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../fetures/authSlice/authSlice";

export const store = configureStore({
    reducer: {
        authReducer
    }
})