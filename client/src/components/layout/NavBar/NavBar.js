import { useState } from 'react';
import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible)
    }

    return (
    <div className={styles.container}>
        <div className={styles.info}>
            <div className={styles.left}>
                <p>© 2023 NaturEscape, All Rights Reserved</p>
            </div>
            <div className={styles.right}>
                <p>Ready for a unique tour?</p>
                <p> <i className="fa-solid fa-phone"></i> +48 765 432 198</p>
                <p className={styles.email}> <i className="fa-solid fa-envelope"></i> info@nature-escape.com</p>
            </div>
        </div>
        <div className={styles.main}>
            <div className={styles.logo}>
                NaturEscape
            </div>
            <div className={styles.nav}>
                <li><NavLink className={ ({ isActive }) =>  isActive ? styles.linkActive : undefined}
                    to="/">Home</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined }
                    to="/products">Products</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                    to="/about">About</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                    to="/cart">Cart</NavLink></li>
            </div>
            <div className={styles.symbols}>
                <NavLink to="/cart"><i className="fa-solid fa-basket-shopping"></i></NavLink>
                <i className={`fa-solid fa-bars ${styles.navIcon}`} onClick={toggleNav}></i>
                {isNavVisible && (
                    <ul className={styles.dropdownMenu}>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/products">Products</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/cart">Cart</NavLink></li>
                    </ul>
                )}
            </div>
        </div>
    </div>
    )
}

export default NavBar;