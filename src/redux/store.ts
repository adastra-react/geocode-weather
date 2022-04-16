import { configureStore } from "@reduxjs/toolkit";
import { AddressSlice } from "./slice";

const store = configureStore({
    reducer: {
        address: AddressSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;