import { LinkSection } from '../../atoms'
import styles from './MenuItems.module.scss'

const MenuItems = () => {
  return (
    <div className={styles['menu-items']}>
      <LinkSection to='progressivity'>Progresividad y Presión fiscal</LinkSection>
      <LinkSection to='aliquot'>Alícuota máxima</LinkSection>
      <LinkSection to='proposal-map'>Impuestos a la riqueza</LinkSection>
      <LinkSection to='tax-havens'>Paraísos fiscales</LinkSection>
    </div>
  )
}

export default MenuItems