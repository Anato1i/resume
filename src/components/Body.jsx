import styles from './Body.module.css'
import photo from '../images/ava.png'
import htmlPng from '../images/html5.png'
import cssPng from '../images/css.png'
import jsPng from '../images/js.png'
import bootstrapPng from '../images/bootstrap.png'
import reactPng from '../images/react.png'
import gitPng from '../images/git.png'
import githubPng from '../images/github.png'

const Body = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundPhoto}>
        <img className={styles.photo} src={photo} alt="Фото"></img>
      </div>
      <div className={styles.content}>
        <h3 className={styles.typingTextSummary}>Summary:</h3>
        <p className={styles.animateText}>Contact me if you need an IT specialist.</p>

        <p className={styles.animateText}>
          I am ready to create new products and improve in the world of digital
          technologies.
        </p>
        <p className={styles.animateText}>
          I am open to suggestions and looking for a project to contribute value
          to!
        </p>
        <div className={styles.skills}>
          <h3>Skills:</h3>
          <ul>
            <li>
              <a
                href="https://developer.mozilla.org/ru/docs/Web/HTML"
                target="blank"
              >
                <img className={styles.skillsPhoto} src={htmlPng} alt="icon" />
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="blank"
              >
                <img className={styles.skillsPhoto} src={cssPng} alt="icon" />
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="blank"
              >
                <img className={styles.skillsPhoto} src={jsPng} alt="icon" />
              </a>
            </li>
            <li>
              <a href="https://getbootstrap.com/" target="blank">
                <img
                  className={styles.skillsPhoto}
                  src={bootstrapPng}
                  alt="icon"
                />
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="blank">
                <img className={styles.skillsPhoto} src={reactPng} alt="icon" />
              </a>
            </li>
            <li>
              <a href="https://git-scm.com/" target="blank">
                <img className={styles.skillsPhoto} src={gitPng} alt="icon" />
              </a>
            </li>
            <li>
              <a href="https://github.com/" target="blank">
                <img
                  className={styles.skillsPhoto}
                  src={githubPng}
                  alt="icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Body
