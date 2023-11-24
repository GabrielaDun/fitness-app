import styles from './Footer.module.scss';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.logo}>
                    NaturEscape
                </div>
                <div className={styles.nav}>
                    <li><NavLink className={ ({ isActive }) =>  isActive ? styles.linkActive : undefined}
                        to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                        to="/cart">Your Cart</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                        to="/about">About</NavLink></li>
                </div>
                <div className={styles.right}>
                    <p>Get the best offers first:</p>
                    <p className={styles.subscribe}>Subscribe</p>
                </div>
            </div>
        </div>
        )
}

export default Footer;