import styles from './Portfolio.module.css'
import brandLift from '../images/brandLift.jpeg'
import studiaFarb from '../images/studiaFarb.jpeg'

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.portfolio}>
        <h3 className={styles.portfolioTitle}>Portfolio:</h3>
        <div className={styles.portfolioList}>
          <ul>
            <li>
              <a href="https://brand-lift.eu" target="blank">
                <img className={styles.miniPhoto} src={brandLift} alt="icon" />
              </a>
            </li>
            <li>
              <a href="https://anato1i.github.io/landing-page" target="blank">
                <img className={styles.miniPhoto} src={studiaFarb} alt="icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
