import styles from './Button.module.scss'

const Button = props => {
    <div className={styles.root}>
        <button>{props.children}</button>
    </div>

}
export default Button