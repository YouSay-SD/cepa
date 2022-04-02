import styles from './Progressivity.module.scss'
import { Container, Switch, Map } from "../../atoms"
import { Heading, Sidebar } from "../../molecules"

const Progressivity = ({ countries }) => {
  return (
    <section className={styles.progressivity}>
      <Container className={styles['heading-container']}>
        <Heading
          title='Progresividad y Presión Fiscal'
          description='La progresividad se define como el peso de los impuestos a los que mas ganan o más tienen sobre el conjunto de la recaudacion de un pais. Califican como progresivos  los impuestos que tributan la renta, el patrimonio, la herencia, los impuestos al comercio exterior.
          <br /><br />
          La presión tributaria se define como la relación que existe entre la recaudación tributaria y el producto bruto interno de un país. Y se mide como la suma del total de los tributos recaudados en un período de tiempo sobre el producto bruto interno.'
        />

        <Switch className={styles['switch-mobile']} />
      </Container>

      <Container className={styles.content}>
        <Sidebar items={countries?.data} />

        <div className={styles.map}>
          <Map countries={countries?.data} />
        </div>
      </Container>
    </section>
  )
}

export default Progressivity