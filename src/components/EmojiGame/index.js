/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import EmojiCard from '../EmojiCard'

import './index.css'

class EmojiGame extends Component {
  state = {topScore: '', isGameInProgress: true, clickedEmojisList: []}

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore
    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  displayHideEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isPresent = clickedEmojisList.includes(id)
    const clickedEmojisLength = clickedEmojisList.length
    if (isPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
    }
    this.setState(prevState => ({
      clickedEmojisList: [...prevState.clickedEmojisList, id],
    }))
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojisList = () => {
    const getShuffledEmojis = this.shuffledEmojisList
    return (
      <ul>
        {getShuffledEmojis.map(eachCard => (
          <EmojiCard
            key={eachCard.id}
            displayHideEmoji={this.displayHideEmoji}
            emojiDetails={eachCard}
          />
        ))}
      </ul>
    )
  }

  resetGame = () => {
    this.setState({clickedEmojisList: [], isGameInProgress: true})
  }

  renderResultCard = () => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isWon = clickedEmojisList.length === emojisList.length
    return (
      <div className="result-container">
        <WinOrLoseCard
          isWon={isWon}
          onClickPlayAgain={this.resetGame}
          score={clickedEmojisList.length}
        />
      </div>
    )
  }

  render() {
    const {topScore, isGameInProgress, clickedEmojisList} = this.state
    return (
      <div className="app-container">
        <NavBar
          topScore={topScore}
          isGameInProgress={isGameInProgress}
          currentScore={clickedEmojisList.length}
        />
        <div>
          {isGameInProgress ? this.renderEmojisList() : this.renderResultCard()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
