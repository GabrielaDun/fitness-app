import styles from './Button.module.scss'

const Button = ({ onClick, children, colorType, isActive}) => {

    let buttonClass = styles.button;

    if (colorType === 'secondary') {
        buttonClass = styles.secondary;
    } else if (colorType === 'tertiary') {
        buttonClass = styles.tertiary
    } else if (colorType === 'clickedTertiary') {
        buttonClass = styles.clickedTertiary
    }


    return (
    <div className={styles.root}>
        <button className={buttonClass} onClick={onClick}>
            {children}
        </button>
    </div>
    )

}
export default Button;