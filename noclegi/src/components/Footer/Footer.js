import ThemeContext from "../../context/themeContext";

const Footer = () =>(
    <ThemeContext.Consumer>
        {({theme}) =>
            <div className={`text-center m-3 mt-3 text-${theme}`}><small>Kajetan Mieloch 2021 &copy;</small></div>
        }
    </ThemeContext.Consumer>

);

export default Footer;