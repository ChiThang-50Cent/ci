import React from 'react'
import '../assest/css/Card.css'


class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            isFlipped : false
        }
        this.click = this.click.bind(this)
    }
    click(){
        console.log(this)
    }
    componentDidMount(){
        let card = document.getElementById(this.props.id);
        card.addEventListener('click', ()=>{
            card.classList.toggle('flip')
        })
    }
    render() {
        return (
            <div className="card" id={this.props.id} onClick={this.props.handleClick} >
                <img src={this.props.cardId + '.jpg'} alt={this.props.cardId + 'card'} className="front" />
                <img src="down.jpg" alt="face-down-card" className="back" />
            </div>
        );
    }
}

export { Card };
