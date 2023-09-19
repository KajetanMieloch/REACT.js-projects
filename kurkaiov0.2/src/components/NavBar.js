import styles from './NavBar.module.css'


export const NavBar = () =>{
    return(
    <nav className={styles.navMenu}>
      <a href="#">Home</a>
      <a href="#">Blog</a>
      <a href="#">Work</a>
      <a href="#">About</a>
      <div class="dot"></div>
    </nav>
    )
}