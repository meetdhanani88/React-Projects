import { createContext, useState } from "react";

const AuthContext = createContext()

export function AuthContextProvider(props) {

    const initialtk = localStorage.getItem("token")

    const [token, settoken] = useState(initialtk);

    const userLoggin = !!token;

    const login = (token) => {
        settoken(token);
        localStorage.setItem("token", token)
    }

    const logout = () => {
        settoken(null);
        localStorage.removeItem("token")
    }

    const contexValue = {
        token: token,
        isLoggedIn: userLoggin,
        login: login,
        logout: logout
    }

    return <AuthContext.Provider value={contexValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext;