import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = () => {
        setCurrentUser({
            id: 1,
            name: "ak",
            profilePic: "https://lh3.googleusercontent.com/a/ACg8ocITKKVSH5wTImuW2RL0d_Pwfuq5xVPDSKCl0T1z437rir0=s360-c-no",
        });
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));

    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    )
};