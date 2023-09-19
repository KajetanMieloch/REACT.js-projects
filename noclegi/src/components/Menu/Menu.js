import styles from './Menu.module.css'
import Changetheme from '../UI/Changetheme/Changetheme'
import AuthContext from '../../context/authContext';
import { useContext } from 'react'

function Menu(props) {
    const auth = useContext(AuthContext)

    const login = (e) =>{
        e.preventDefault();
        auth.login();        
    }
    const logout = (e) =>{
        e.preventDefault();
        auth.logout();        
    }
    
    return(
        <div className={`${styles.menuContainer}`}>
            <ul className={styles.menu}>
                <li className={styles.menuItem}>
                    <a href="#">Home</a>
                </li>
                    
                    {auth.isAuthenticated ?
                    (                 
                        <li className={styles.menuItem}>
                            <a onClick={logout} href="#">Wyloguj</a>
                        </li>
                    ):( 
                        <li className={styles.menuItem}>
                            <a onClick={login} href="#">Zaloguj</a>
                        </li>)}


                <li className={`${styles.bucket} float-end`}>
                    <Changetheme/>
                </li>
            </ul>

        </div>
    );
    
}

export default Menu;