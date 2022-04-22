import React from 'react';
import { Route } from "react-router-dom";

function Welcome() {
    return (
        <>
            <h1>Welcome</h1>
            <Route path="/welcome/newuser">
                <h1>hello new user</h1>
            </Route>
        </>

    )
}

export default Welcome