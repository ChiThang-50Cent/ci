import '../assest/css/imgPoke.css'

function ImgPoke(props) {
    return (
            <img
            style={{order: props.id}}
            src={props.avatar}
            alt="pokemon"
            id={props.id}
            draggable="true"
            onDragStart={(ev) => ev.dataTransfer.setData('text', ev.target.id)}
        />       
    )
}

export default ImgPoke
