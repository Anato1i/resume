import styles from './ContactForm.module.css'
import gmail from '../images/myGmail.png'
import linkedin from '../images/myLinkedin.png'
import github from '../images/myGitHub.png'

const ContactForm = () => {
  return (
    <div className={styles.container}>
      <p className={styles.p}>contact with me</p>
      <div className={styles.contactButtons}>
        <a href="mailto:silversklad@gmail.com">
          <img src={gmail} alt="ContactEmail" className={styles.button} />
        </a>
        <a
          href="https://www.linkedin.com/in/anatolii-zelenskyi-1a2559285"
          target="blank"
        >
          <img src={linkedin} alt="ContactLinkedin" className={styles.button} />
        </a>
        <a href="https://github.com/Anato1i" target="blank">
          <img src={github} alt="ContactGitHub" className={styles.button} />
        </a>
      </div>
    </div>
  )
}

export default ContactForm
