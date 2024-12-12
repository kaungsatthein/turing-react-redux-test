"use client";

import React, {createContext, useContext, useState} from 'react'

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    setTheme: () => {
    },
});


const useGetTheme = () => useContext(ThemeContext)

function Child() {
    const {theme, setTheme} = useGetTheme()
    return (
        <div>
            Child: {theme}
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Toggle Theme</button>
        </div>
    )
}

const ThemeContextMode = () => {
    const [theme, setTheme] = useState<Theme>("light")
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <Child/>
        </ThemeContext.Provider>
    )
}
export default ThemeContextMode
