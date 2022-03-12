import styles from './Title.module.scss'

const Title = ({ 
  h = '2', 
  size = 'md', 
  color = 'secondary', 
  className = '', 
  children, 
}) => {
  const HTag = `h${h}`

  return (
    <HTag className={`${styles.title} ${styles[size]} ${styles[color]} ${className}`}>{children}</HTag>
  )
}

export default Title
