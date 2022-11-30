import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    arrow_left_slider : null,
    arrow_right_slider : null,
}

export const styleSlice = createSlice({
    name: "style",
    initialState,
    reducers : {
        setArrow_left_slider : (state,action) => {
            state.arrow_left_slider = action.payload
        },
        setArrow_right_slider : (state,action) => {
            state.arrow_right_slider = action.payload
        }
    }
})

export const {
    setArrow_left_slider,
    setArrow_right_slider
} = styleSlice.actions;

export default styleSlice.reducer;