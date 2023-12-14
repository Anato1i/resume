import React, { Component } from 'react'
import styles from './ButtonJoke.module.css'

class ButtonJoke extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isButtonVisible: true,
      buttonPosition: {
        top: '10px',
        left: '10px',
      },
    }
  }

  handleButtonClick = () => {
    const newButtonPosition = {
      top: `${Math.random() * 20}vh`,
      left: `${Math.random() * 85}vw`,
    }

    this.setState({
      isButtonVisible: false,
    })

    setTimeout(() => {
      this.setState({
        isButtonVisible: true,
        buttonPosition: newButtonPosition,
      })
    }, 10)
  }

  render() {
    const { isButtonVisible, buttonPosition } = this.state
    return (
      <div className={styles.buttonJokeContainer}>
        {isButtonVisible && (
          <button
            className={styles.jokeButton}
            onClick={this.handleButtonClick}
            style={buttonPosition}
          >
            Click
          </button>
        )}
      </div>
    )
  }
}

export default ButtonJoke
