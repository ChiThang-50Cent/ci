import '../assest/css/emoji.css'

function Emoji(props){
    return (
        <div className="emo">
            <p>{`${props.symbol} ${props.title}`}</p>
        </div>
    )
}

export default Emoji