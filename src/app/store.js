import { configureStore } from '@reduxjs/toolkit'
import { issue } from '../features/issueSlice';

const initialState = [];

export const store = configureStore({
    reducer: {
        app : issue
    },

})