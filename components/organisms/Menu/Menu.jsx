import Image from 'next/image'
import { useState } from 'react'
import { Container } from '../../atoms'
import { MenuItems } from '../../molecules'
import styles from './Menu.module.scss'

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`${styles.menu} ${isOpen && styles.active}`}>
      <Container className={styles.container}>
        <Image
          src='/img/logo.svg'
          alt='CEPA'
          width={109}
          height={64}
        />

        <div className={styles.btn} onClick={() => setIsOpen(!isOpen)}>
          <Image
            src='/img/icons/hamburger.svg'
            alt='Hamburger'
            width={32}
            height={28}
          />
        </div>

        <div className={styles['menu-items']}>
          <MenuItems />
        </div>
      </Container>
    </nav>
  )
}

export default Menu