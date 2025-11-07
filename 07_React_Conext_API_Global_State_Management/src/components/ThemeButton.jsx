import { useContext } from "react";
import ThemeContext from "./ThemeContext";
function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return <button onClick={toggleTheme}>Current Theme: {theme}</button>;
}

export default ThemeButton;
