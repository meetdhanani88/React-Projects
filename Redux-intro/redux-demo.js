const { log } = require("console");
const redux = require("redux");

const countreducer = (state = { counter: 0 }, action) => {
    if (action.type === "increment") {
        return { counter: state.counter + 1 };
    }
    return state
};

const store = redux.createStore(countreducer);

const countersubscriber = () => {
    const lateststate = store.getState();
    console.log("state", lateststate);
}

store.subscribe(countersubscriber);

store.dispatch({ type: "increment" })



