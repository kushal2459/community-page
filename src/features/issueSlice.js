import { createSlice } from '@reduxjs/toolkit'

export const issue = createSlice({
    name : 'not fixed',
    initialState : {
        issues : [],
        loading : false,
        error : null,
    } 
})

export default issue.reducer;