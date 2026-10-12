import { useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const handleThemeUpdate = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{ theme, handleThemeUpdate }}>
            {children}
        </ThemeContext.Provider>
    );
};