// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, topScore, isGameInProgress} = props
  return (
    <nav className="nav-container">
      <div className="card-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <p className="emoji-text">Emoji Game</p>
      </div>
      {isGameInProgress && (
        <div className="container">
          <p className="score-text">Score: {currentScore}</p>
          <p className="score-text">Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}
export default NavBar
