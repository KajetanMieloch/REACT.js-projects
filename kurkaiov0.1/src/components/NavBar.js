import styles from './NavBar.module.css'
import { SignOut } from './SignOut'
export const NavBar = () =>{
    return(
        <div className={styles.topnav}>
            <a className={styles.btn}><SignOut/></a>
            <a className={styles.logo}>Kurka.IO</a>
        </div>
    )
}