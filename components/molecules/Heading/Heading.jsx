import styles from './Heading.module.scss'
import { Title, P } from '../../atoms'
import ReactMarkdown from 'react-markdown'

const Heading = ({ title, description, className = '' }) => {
  return (
    <div className={className}>
      <Title className={styles.title} size='md'>
        <ReactMarkdown>{title}</ReactMarkdown>
      </Title>
      <P className={styles.description}>
        <ReactMarkdown>{description}</ReactMarkdown>
      </P>
    </div>
  )
}

export default Heading