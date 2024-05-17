// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, displayHideEmoji} = props
  const {emojiUrl, id, emojiName} = emojiDetails

  const showResultEmoji = () => {
    displayHideEmoji(id)
  }

  return (
    <li className="emoji-container">
      <button type="button" onClick={showResultEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-icon" />
      </button>
    </li>
  )
}
export default EmojiCard
