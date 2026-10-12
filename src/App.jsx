import { useTheme } from "./contexts/ThemeContext";
import { Home } from "./components/Home";

export const App = () => {
  const { theme } = useTheme();

  return (

    <div className={theme}>
      Hello Coders!
      <Home />
    </div>

  );
};
