import countryApi from "./countryAPI";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        [countryApi.reducerPath]:countryApi.reducer
    },
    middleware: (getDefaultMiddleware) =>(
        getDefaultMiddleware().concat(countryApi.middleware)
    )
})
export default store;