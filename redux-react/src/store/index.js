// import { createStore } from "redux";

// const reducerfun = (state = { counter: 0, Toggle: true }, action) => {

//     if (action.type === "inc") {
//         return { ...state, counter: state.counter + 1 }
//     }
//     if (action.type === "dec") {
//         return { ...state, counter: state.counter - 1 }
//     }
//     if (action.type === "toggel") {
//         return { ...state, Toggle: !state.Toggle }
//     }
//     return state
// }

// const store = createStore(reducerfun)


// export default store;

import { configureStore } from "@reduxjs/toolkit";
import authslice from "./auth";
import counterslice from "./counter";

const store = configureStore({ reducer: { counter: counterslice.reducer, auth: authslice.reducer } })

export default store;