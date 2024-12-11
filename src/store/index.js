import { configureStore } from "@reduxjs/toolkit";
import reviewReducer from '../components/pages/ReviewList/ReviewSlice'
import userReducer from '../components/pages/LoginPage/userSlice'


const store = configureStore({
    reducer: {
        reviews: reviewReducer,
        user: userReducer
    },
    // eslint-disable-next-line no-undef
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;