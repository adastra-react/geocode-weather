import { configureStore } from "@reduxjs/toolkit";
import { weatherSlice } from "./weatherSlice";

const store = configureStore({
    reducer: {
        weather: weatherSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;