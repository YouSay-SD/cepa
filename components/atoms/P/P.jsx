import styles from './P.module.scss'

const P = ({ children, className = '', color = 'secondary' }) => {
  return (
    <p className={`${styles.p} ${styles[color]} ${className}`}>{children}</p>
  )
}

export default P
