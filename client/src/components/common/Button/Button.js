import styles from './Button.module.scss'

const Button = ({ onClick, children}) => {
    return (
    <div className={styles.root}>
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    </div>
    )

}
export default Button;