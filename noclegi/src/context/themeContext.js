import React from "react";

const ThemeContext = React.createContext({
    theme: '',
    changeTheme: () => {}
});

ThemeContext.displayName = 'ThemeContext'

export default ThemeContext;