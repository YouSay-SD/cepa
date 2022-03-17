import styles from './Heading.module.scss'
import { P, Title } from '../../atoms'

const Heading = ({ title, description, className = '' }) => {
  console.log('des', description)
  return (
    <div className={className}>
      <Title className={styles.title} size='md'>{title}</Title>
      <div className={styles.description} dangerouslySetInnerHTML={{__html: description}} />
    </div>
  )
}

export default Heading