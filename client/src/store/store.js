import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import leadReducer from './leadSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        leads: leadReducer
    }
})


export default store;