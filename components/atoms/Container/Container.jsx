import styles from './Container.module.scss'

const Container = ({ children, className = '', side = '' }) => {
  return (
    <div className={`${styles.container} ${styles[side]} ${className}`}>
      {children}
    </div>
  )
}

export default Container;
