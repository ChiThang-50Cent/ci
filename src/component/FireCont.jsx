import '../assest/css/FireCont.css'

let classname = "fire-cont"

function FireCont(props){
    return(
        <div className={classname}>
            <h3>Fire</h3>
            <div onDrop={props.drop} onDragOver={props.allowDrop}></div>
        </div>
    )
}

export default FireCont