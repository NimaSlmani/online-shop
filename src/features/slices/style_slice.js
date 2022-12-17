import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open_sidebar : false,
    login_page_check : true
}

export const styleSlice = createSlice({
    name: "style",
    initialState,
    reducers : {
        setOpen_sidebar : (state,action) => {
            state.open_sidebar = action.payload
        },
        setLogin_page_check : (state,action) => {
            state.login_page_check = action.payload
        }
    }
})

export const {
    setOpen_sidebar,
    setLogin_page_check
} = styleSlice.actions;

export default styleSlice.reducer;