import styles from './Button.module.scss'

const Button = ({ type, color, children }) => {
  return (
    <button className={`${styles.button} ${styles[type]} ${styles[color]}`}>{children}</button>
  )
}

export default Button