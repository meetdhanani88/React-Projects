import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchfake = createAsyncThunk(
//     "counter/fetchfake",
//     async () => {
//         try {
//             const res = await fetch("https://jsonplaceholder.typicode.com/ers");
//             const data = res.json();
//             return data
//         } catch (error) {
//             throw Error(error);
//         }
//     }
// )
// console.log(fetchfake());

const counterslice = createSlice({
    name: 'counter',
    initialState: { counter: 0, Toggle: true, data: [], err: "" },
    reducers: {
        increment(state, action) {

            state.counter += action.payload
        },
        decrement(state) {
            state.counter--;
        },
        Toggle(state) {
            state.Toggle = !state.Toggle;
        }
    },
    // extraReducers: {
    //     [fetchfake.fulfilled]: (state, action) => {
    //         console.log(action);
    //         state.data = action.payload;
    //     },

    //     [fetchfake.rejected]: (state, action) => {

    //     }
    // }
}
    /* this function will return object(reducer &&  actions)   */

)

export const counterActions = counterslice.actions;
export default counterslice;
