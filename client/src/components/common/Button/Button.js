import styles from './Button.module.scss'

const Button = ({ onClick, children, colorType}) => {
    const buttonClass = colorType === 'secondary' ? styles.secondary : styles.button;

    return (
    <div className={styles.root}>
        <button className={buttonClass} onClick={onClick}>
            {children}
        </button>
    </div>
    )

}
export default Button;