import { useTheme } from "../contexts/ThemeContext";
import { Button } from "./Button";

export const Home = () => {
    const { theme } = useTheme();

    return (
        <div>

            <h1>Some Content from Home.jsx</h1>
            <p>You have chosen to use this theme: {theme}</p>
            <Button />

        </div >
    );
};