import styles from './MenuItems.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setSectionLink } from 'actions/general';
import { LinkSection } from '../../atoms'
import { useEffect } from 'react'
import { useRouter } from 'next/router';
import { scroller } from "react-scroll";

const MenuItems = ({ firstTextLink, secondTextLink, thirdTextLink, fourthTextLink }) => {
  const { sectionLink } = useSelector(state => state.general)
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    if (router.route === '/' && sectionLink) {
      scroller.scrollTo(sectionLink, {smooth: true, duration: 700, offset: -95})
    }
  }, [])

  useEffect(() => {
    dispatch(setSectionLink(null))
  }, [])

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