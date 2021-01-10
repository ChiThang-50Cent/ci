import React from 'react'
import Card from './Card.jsx'
import cards from '../data.js'
import '../assest/css/Board.css'

let cardList = cards.map(cr => {
    cr.isEnd = false;
    return cr
})

let hasClicked = false

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: cardList
        }
        this.selectCard = [null, null]
        this.handleClick = this.handleClick.bind(this)
        this.gamePlay = this.gamePlay.bind(this)
    }
    handleClick(indx) {
        cardList[indx].isFlipped = !cardList[indx].isFlipped;
        this.setState({ cards: cardList })
        if (cardList[indx].isFlipped) {
            if (!hasClicked) {
                this.selectCard[0] = cardList[indx]
                hasClicked = true
            } else {
                this.selectCard[1] = cardList[indx]
                hasClicked = false
            }
        }
        if (this.selectCard[0] !== null && this.selectCard[1] !== null) {
            setTimeout(() => {
                this.gamePlay(this.selectCard)
                this.selectCard = [null, null]
            }, 500)
        }
        console.log(this.selectCard)
    }
    gamePlay(selectCard) {
        if (selectCard[0].url === selectCard[1].url) {
            selectCard[0].isEnd = true
            selectCard[1].isEnd = true
        } else {
            selectCard[0].isFlipped = false
            selectCard[1].isFlipped = false
        }
        cardList = cardList.map(cr => {
            if (cr.url === selectCard[0].url && cr.isFlipped) {
                cr = selectCard[0]
            }
            if (cr.url === selectCard[1].url && cr.isFlipped) {
                cr = selectCard[1]
            }
            return cr
        })
        this.setState({
            cards: cardList
        })
    }
    render() {
        const cardBoard = this.state.cards.map(
            (card, index) =>
                <Card
                    isFlipped={card.isFlipped}
                    url={card.url}
                    title={card.title}
                    key={index}
                    inx={index}
                    handleClick={this.handleClick}
                    isEnd={card.isEnd}
                />)
        return (
            <div className="card-cont">
                {/* <Card url='1.jpg' isFlipped={false} isEnd={false} handleClick={this.handleClick} inx={0} /> */}
                {cardBoard}
            </div>
        );
    }
}

export default Board