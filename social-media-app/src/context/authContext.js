import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = async (inputs) => {
        const res = await axios.post("http://localhost:8081/api/auth/login", inputs, {
            withCredentials: true,
        });

        setCurrentUser(res.data)

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

// import { createContext, useEffect, useState } from "react";
// import axios from "axios";

// export const AuthContext = createContext();

// export const AuthContextProvider = ({ children }) => {
//     const storedUser = localStorage.getItem("user");
//     let initialUser;

//     try {
//         initialUser = storedUser ? JSON.parse(storedUser) : null;
//     } catch (error) {
//         console.error("Error parsing storedUser from localStorage:", error);
//         // Handle the error accordingly, e.g., set initialUser to null
//         initialUser = null;
//     }

//     const [currentUser, setCurrentUser] = useState(initialUser);

//     const login = async (inputs) => {
//         try {
//             const res = await axios.post("http://localhost:8081/api/auth/login", inputs, {
//                 withCredentials: true,
//             });

//             setCurrentUser(res.data);
//         } catch (error) {
//             console.error("Error during login:", error);
//         }
//     };

//     useEffect(() => {
//         try {
//             const userJSON = JSON.stringify(currentUser);
//             localStorage.setItem("user", userJSON);
//         } catch (error) {
//             console.error("Error storing user data in localStorage:", error);
//         }
//     }, [currentUser]);

//     useEffect(() => {
//         console.log("currentUser:", currentUser);
//     }, [currentUser]);

//     useEffect(() => {
//         console.log("storedUser:", storedUser);
//     }, [storedUser]);

//     return (
//         <AuthContext.Provider value={{ currentUser, login }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };


