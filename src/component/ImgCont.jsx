import '../assest/css/ImgCont.css'
import ImgPoke from './imgPoke.jsx'
import pokes from '../data.js'

let pokeList = pokes.map((poke, index) => {
    poke.id = index
    return poke
})
pokeList = pokeList.map(poke => <ImgPoke {...poke} key={poke.id} />)

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