import '../assest/css/GrassCont.css'

function GrassCont(props){
    return(
        <div className='grass-cont'>
            <h3>Grass</h3>
            <div onDrop={props.drop} onDragOver={props.allowDrop}>

            </div>
        </div>
    )
}

export default GrassCont
