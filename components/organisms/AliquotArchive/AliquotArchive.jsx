import styles from './AliquotArchive.module.scss'
import { Container, Pagination } from "../../atoms"
import { Grid } from "../../molecules"
import { useSelector } from 'react-redux'

const AliquotArchive = () => {
  const { countries } = useSelector(state => state.country)

  return (
    <section className={styles['aliquot-archive']}>
      <Container className={styles.container}>
        <Grid items={countries} />
        <Pagination />
      </Container>
    </section>
  )
}

export default AliquotArchive