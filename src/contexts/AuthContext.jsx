import { Children, createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({
    children,
}) => {
    const [auth, setAuth] = useState();

    const login = (authData) => {
        setAuth(authData);
    };

    const contextData = {
        ...auth,
        login,
        isAuthenticated: auth.emial,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}