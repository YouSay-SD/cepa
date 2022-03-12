import { LinkSection } from '../../atoms'
import styles from './MenuItems.module.scss'

const MenuItems = () => {
  return (
    <div className={styles['menu-items']}>
      <LinkSection to='hero'>Progresividad y Presión fiscal</LinkSection>
      <LinkSection to='alicuota'>Alícuota máxima</LinkSection>
      <LinkSection to='impuestos'>Impuestos a la riqueza</LinkSection>
      <LinkSection to='paraisos'>Paraísos fiscales</LinkSection>
    </div>
  )
}

export default MenuItems