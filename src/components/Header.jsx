import React, { useState, useEffect } from 'react'
import styles from './Header.module.css'
import logo from '../images/flag.gif'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      {
        <div className={styles.logo}>
          <img className={styles.flag} src={logo} alt="flag" />
          <span className={styles.muName}>Anatolii Zelenskyi</span>
        </div>
      }
    </header>
  )
}

export default Header
