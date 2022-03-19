import styles from './AliquotArchive.module.scss'
import { Container, Pagination } from "../../atoms"
import { Grid } from "../../molecules"

const AliquotArchive = () => {
  return (
    <section className={styles['aliquot-archive']}>
      <Container className={styles.container}>
        <Grid />
        <Pagination />
      </Container>
    </section>
  )
}

export default AliquotArchive