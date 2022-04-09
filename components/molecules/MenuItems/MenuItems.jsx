import { LinkSection } from '../../atoms'
import styles from './MenuItems.module.scss'

const MenuItems = ({ firstTextLink, secondTextLink, thirdTextLink, fourthTextLink }) => {
  return (
    <div className={styles['menu-items']}>
      {firstTextLink ? 
        <LinkSection to='progressivity'>{firstTextLink}</LinkSection>
      : null}

      {secondTextLink ? 
        <LinkSection to='aliquot'>{secondTextLink}</LinkSection>
      : null}

      {thirdTextLink ?
        <LinkSection to='proposal-map'>{thirdTextLink}</LinkSection>
      : null}

      {fourthTextLink ?
        <LinkSection to='tax-havens'>{fourthTextLink}</LinkSection>
      : null}
    </div>
  )
}

export default MenuItems