import '../assest/css/FireCont.css'

function FireCont(props){
    return(
        <div className="fire-cont">
            <h3>Fire</h3>
            <div onDrop={props.drop} onDragOver={props.allowDrop}></div>
        </div>
    )
}

export default FireCont