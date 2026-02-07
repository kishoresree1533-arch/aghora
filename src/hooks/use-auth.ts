import { useState, useEffect } from "react";

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const auth = localStorage.getItem("admin_auth");
        if (auth === "true") {
            setIsAuthenticated(true);
        }
        setIsLoading(false);
    }, []);

    const login = (password: string) => {
        // Simple hardcoded password for demo
        if (password === "admin123") {
            localStorage.setItem("admin_auth", "true");
            setIsAuthenticated(true);
            return true;
        }
        return false;
    };

    const logout = () => {
        localStorage.removeItem("admin_auth");
        setIsAuthenticated(false);
    };

    return { isAuthenticated, isLoading, login, logout };
};
