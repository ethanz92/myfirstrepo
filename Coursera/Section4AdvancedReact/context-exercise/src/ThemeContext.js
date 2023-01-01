import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(undefined);
/**
 * To create the ThemeProvider, the first step is to create a new context object, ThemeContext, using createContext, a function that can be imported from React.
 * The default value argument is only used when a component does not have a matching Provider above it in the tree. 
 * This default value can be helpful for testing components in isolation without wrapping them. 
 * For the purpose of this exercise, it’s not relevant, so undefined can be used.
 */

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
/**
 * You just need to import the useContext hook from React and pass as an argument the ThemeContext object defined before. 
 * That allows your components to access both theme and toggleTheme values, which are the ones the useTheme custom hook returns.
 */



