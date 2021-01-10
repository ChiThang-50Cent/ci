import '../assest/css/WaterCont.css'

function WaterCont(props){
    return(
        <div className='water-cont' >
            <h3>Water</h3>
            <div onDrop={props.drop} onDragOver={props.allowDrop}>
                
            </div>
        </div>
    )
}

export default WaterCont