import { useTheme } from "../contexts/ThemeContext";

export const Button = () => {
    const { theme, handleThemeUpdate } = useTheme();

    const buttonText = theme === "light" ? "Dark Mode" : "Light Mode";

    return (
        <button onClick={handleThemeUpdate}>
            {buttonText}
        </button>
    );
};

