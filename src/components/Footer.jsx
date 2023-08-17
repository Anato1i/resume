import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.footerP}>
        <FontAwesomeIcon icon={faCopyright} /> Anatolii Zelenskiy
         <p className={styles.footerD}>2023</p>
      </p>
    </div>
  )
}

export default Footer
