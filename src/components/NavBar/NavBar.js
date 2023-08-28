import styles from './NavBar.module.scss'

const NavBar = () => {
    return (
    <div>
        <div className={styles.info}>
            <div className={styles.left}>
                <p>© 2023 NatureEscape, All Rights Reserved</p>
            </div>
            <div className={styles.right}>
                <p>Ready for a unique experience?</p>
                <p> +48 765 432 198</p>
                <p>info@nature-escape.com</p>
            </div>
        </div>
        <div className={styles.main}></div>
    </div>
    )
}

export default NavBar;