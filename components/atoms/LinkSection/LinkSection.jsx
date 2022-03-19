import styles from './LinkSection.module.scss'
import { Link } from 'react-scroll'

const LinkSection = ({children, to }) => {
  return (
    <Link 
      className={styles['link-section']}
      activeClass={styles.active}
      to={to} 
      spy={true} 
      smooth={true} 
      offset={-95} 
      duration={500}
    >
      {children}
    </Link>
  )
}

export default LinkSection