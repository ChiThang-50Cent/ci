import React from 'react'
import Quote from './Quote'


class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            quotes : []
        }
    }
    componentDidMount(){
        fetch('https://quote-garden.herokuapp.com/api/v3/quotes')
        .then(res => res.json())
        .then(data => {
            this.setState({
                quotes : data.data
            })
        })
    }
    render(){
        const quotes = this.state.quotes.map(quote => <Quote key={quote._id} {...quote} />)
        return (
            <div className='main'>
                {quotes}
            </div>
        )
    }
    
}
export default Main