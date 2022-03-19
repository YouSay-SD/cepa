import styles from './Menu.module.scss'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { Container } from '../../atoms'
import { MenuItems } from '../../molecules'

export const Menu = ({ color = 'primary' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`${styles.menu} ${isOpen && styles.active} ${styles[color]}`}>
      <Container className={styles.container}>
        <Link href='/'>
          <a>
            <Image
              src='/img/logo.svg'
              alt='CEPA'
              width={109}
              height={64}
            />
          </a>
        </Link>

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