import styles from './Menu.module.scss'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { Container } from '../../atoms'
import { MenuItems } from '../../molecules'

export const Menu = ({ color = 'primary', logo, firstTextLink, secondTextLink, thirdTextLink, fourthTextLink }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`${styles.header} ${isOpen && styles.active} `}>
      <div className={styles.overlay} onClick={() => setIsOpen(false)} />
      <nav className={`${styles.menu} ${isOpen && styles.active} ${styles[color]}`} id='nav'>
        <Container className={styles.container}>
          <Link href='/'>
            <a>
              {logo?.data &&
                <Image
                  src={logo.data?.attributes.url}
                  alt={logo?.data.attributes.alternativeText}
                  width={109}
                  height={64}
                  priority
                />
              }
            </a>
          </Link>

          <div className={styles.btn} onClick={() => setIsOpen(!isOpen)} id='btn'>
            <Image
              src={`/img/icons/${isOpen ? 'hamburger-close' : 'hamburger'}.svg`}
              alt='Hamburger'
              width={32}
              height={28}
            />
          </div>

          <div className={styles['menu-items']}>
            <MenuItems
              firstTextLink={firstTextLink} 
              secondTextLink={secondTextLink} 
              thirdTextLink={thirdTextLink} 
              fourthTextLink={fourthTextLink}
            />
          </div>
        </Container>
      </nav>
    </header>
  )
}

export default Menu