import styles from './LinkSection.module.scss'
import { Link } from 'react-scroll'
import { useDispatch } from 'react-redux'
import { setSectionLink } from 'actions/general'
import { useRouter } from 'next/router'

const LinkSection = ({children, to }) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const handleClick = async () => {
    dispatch(setSectionLink(to))

    if (router.route !=='/') {
      await router.push('/')
    }
  }

  return (
    <Link 
      className={styles['link-section']}
      activeClass={styles.active}
      to={to} 
      spy={true} 
      smooth={true} 
      offset={-95} 
      duration={500}
      id={to}
      onClick={handleClick}
    >
      {children}
    </Link>
  )
}

export default LinkSection