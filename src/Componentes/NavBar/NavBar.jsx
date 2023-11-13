import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <h2>
               <Link to={'/'}>JOGGAR</Link>
            </h2>
            <ul>
                <li>
                    <Link to={'/login'}>Login</Link>
                </li>
            </ul>
        </nav>
    )

}
export default NavBar