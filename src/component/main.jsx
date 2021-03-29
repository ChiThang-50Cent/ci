import React from 'react'
import Quote from './Quote'


class Main extends React.Component {
    render(){
        let date = new Date()
        date = date.toDateString()
        let user = {
            url: 'logo192.png',
            uid: 'Skote Ad',
            postTime: date
        }
        if(this.props.user !== undefined){
            user = this.props.user
        }
        const quotes = this.props.quotes.map(quote => <Quote key={quote._id} {...quote} user={user}/>)
        return (
            <div className='main'>
                {quotes}
            </div>
        )
    }
    
}
export default Main