import "./Styles.css";
import { useTheme } from "../ThemeContext";

const Switch = () => {
  //Switch can be connected to the toggleTheme function returned from useTheme:
  const { theme, toggleTheme } = useTheme();
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={toggleTheme}
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
