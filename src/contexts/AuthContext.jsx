import { createContext, useState } from "react";

export const AuthContext = createContext({
    isAuthenticated: false,
});

export const AuthContextProvider = ({
    children,
}) => {
    const [auth, setAuth] = useState({});

    const login = (authData) => {
        setAuth(authData);
    };

    const contextData = {
        ...auth,
        login,
        isAuthenticated: auth.email,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}