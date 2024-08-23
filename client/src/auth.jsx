import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [services, setServices] = useState([]);
    const [user, setUser] = useState({}); // Initialize user as an empty object
    const [isLoading, setIsLoading] = useState(true);
    const authorizationToken = `Bearer ${token}`;

    const storeTokenInLS = (serverToken) => {
        localStorage.setItem("token", serverToken);
        setToken(serverToken); // Update token state
    };

    const isLoggedIn = !!token;

    const LogoutUser = () => {
        setToken("");
        localStorage.removeItem('token');
    };

    const getServices = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/data/service", {
                method: "GET",
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data.msg);
                setServices(data.msg); // Update services state
            }
        } catch (error) {
            console.log(`Services front-end error: ${error}`);
        }
    };

    const userAuthentication = async () => {
        try {
            setIsLoading(true);
            const response = await fetch("http://localhost:5000/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            if (response.ok) {
                const data = await response.json();
                console.log("user data", data.userData);
                setUser(data.userData || {}); // Ensure user state is set to an empty object if data.userData is undefined
            } else {
                console.error("Error fetching user data");
            }
        } catch (error) {
            console.error("Error fetching user data");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getServices();
        if (isLoggedIn) {
            userAuthentication(); // Fetch user data if logged in
        } else {
            setIsLoading(false); // Ensure loading is false if not logged in
        }
    }, [isLoggedIn]);

    return (
        <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, services, authorizationToken, user, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    
    if (!authContextValue) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return authContextValue;
};
