import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open_sidebar : false
}

export const styleSlice = createSlice({
    name: "style",
    initialState,
    reducers : {
        setOpen_sidebar : (state,action) => {
            state.open_sidebar = action.payload
        },
    }
})

export const {
    setOpen_sidebar,
} = styleSlice.actions;

export default styleSlice.reducer;