
import '../assest/css/Card.css'

function Card(props) {
    return (
        <div className={`card ${props.isFlipped ? "flip": " "}`} onClick={()=>{
            !props.isEnd ?  props.handleClick(props.inx) : console.log()
        }} >
            <img src={props.url} alt={props.title} className='front'/>
            <img src='down.jpg' alt="face-down" className='back' />
        </div>
    )
}

export default Card