import styles from './P.module.scss'

const P = ({ children, className = '', color = 'secondary', as }) => {
  const PTag = as ?? 'p' 

  return (
    <PTag className={`${styles.p} ${styles[color]} ${className}`}>{children}</PTag>
  )
}

export default P
