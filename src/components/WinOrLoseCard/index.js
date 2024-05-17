// Write your code here.
import './index.css'

const LOSE_IMG = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WIN_IMG = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const isWin = isWon ? 'You Won' : 'You Lose'
  const scoreResult = isWon ? 'Best Score' : 'Score'
  const winOrLoseImg = isWon ? WIN_IMG : LOSE_IMG

  return (
    <div className="container">
      <div className="card-1">
        <h1 className="result">{isWin}</h1>
        <p className="result-score">{scoreResult}</p>
        <p className="score">{score}/12</p>
        <button type="button" className="button" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
      <img src={winOrLoseImg} className="image" alt='win or lose'/>
    </div>
  )
}

export default WinOrLoseCard
