import { LinkSection } from '../../atoms'
import styles from './MenuItems.module.scss'

const MenuItems = () => {
  return (
    <div className={styles['menu-items']}>
      <LinkSection to='hero'>Progresividad y Presión fiscal</LinkSection>
      <LinkSection>Alícuota máxima</LinkSection>
      <LinkSection>Impuestos a la riqueza</LinkSection>
      <LinkSection>Paraísos fiscales</LinkSection>
    </div>
  )
}

export default MenuItems