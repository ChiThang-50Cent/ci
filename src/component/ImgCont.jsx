import '../assest/css/ImgCont.css'
import ImgPoke from './imgPoke.jsx'
import pokes from '../data.js'

const pokeList = pokes.map(poke => <ImgPoke {...poke} />)

function ImgCont(props){
    return(
        <div className="img-cont">
            <h3>Pokemon</h3>
            <div onDrop={props.drop} onDragOver={props.allowDrop}>
                {pokeList}
            </div>
        </div>
    )
}
export default ImgCont