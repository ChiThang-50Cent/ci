import '../assest/css/imgPoke.css'

function ImgPoke(props) {
    return (
            <img
            src={props.url}
            alt={props.name}
            id={props.name}
            draggable="true"
            onDragStart={(ev) => ev.dataTransfer.setData('text', ev.target.id)}
        />       
    )
}

export default ImgPoke
