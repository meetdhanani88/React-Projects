import { createSlice } from "@reduxjs/toolkit";

const authslice = createSlice({
    name: "auth",
    initialState: { isauth: false },
    reducers: {
        login(state) {
            state.isauth = true;
        },
        logout(state) {
            state.isauth = false;
        }
    }
})
/* this function will return object(reducer && actions) */
export const authAction = authslice.actions;
export default authslice;