import { createContext } from "react"
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const themes = {
    light: {
        background: '#00529B',
        text: '#FFFFFF',
        switch: "#FFFFFF"
    },    
    dark: {
        background: '#00396C',
        text: '#F2F2F2',
        switch: "#F2F2F2"
    },
}

export const ThemeContext = createContext({themes: themes.light, toggleTheme: ()=>{}});