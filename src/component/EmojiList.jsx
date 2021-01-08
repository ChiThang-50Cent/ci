
import Emoji from './Emoji.jsx'
import emojiList from '../emojiList.js'
import '../assest/css/emol.css'

function EmojiList(props) {
    const fEmoL = emojiList.filter(val => {
        if (val.keywords.indexOf(props.inp) !== -1){
            return true
        } else {
            return false
        }
    })
    return(
        <div className='emol'>
            {fEmoL.map(emo=> <Emoji {...emo} />)}
        </div>
    )
}

export default EmojiList