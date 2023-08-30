import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
    <div className={styles.container}>
        <div className={styles.info}>
            <div className={styles.left}>
                <p>© 2023 NaturEscape, All Rights Reserved</p>
            </div>
            <div className={styles.right}>
                <p>Ready for a unique tour?</p>
                <p> <i className="fa-solid fa-phone"></i> +48 765 432 198</p>
                <p> <i className="fa-solid fa-envelope"></i> info@nature-escape.com</p>
            </div>
        </div>
        <div className={styles.main}>
            <div className={styles.logo}>
                NaturEscape
            </div>
            <div className={styles.nav}>
                <li><NavLink className={ ({ isActive }) =>  isActive ? styles.linkActive : undefined}
                    to="/">Home</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                    to="/favorite">Your Cart</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                    to="/about">About</NavLink></li>
            </div>
            <div className={styles.symbols}>
                <i className="fa-solid fa-basket-shopping"></i>
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
    </div>
    )
}

export default NavBar;