import React from 'react'
import {signIn} from '../ultis/ultis.js'

export default class SignIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(ev){
        const name = ev.target.name
        this.setState({
            [name] : ev.target.value
        })
    }
    handleSubmit(ev){
        ev.preventDefault()
        signIn(this.state.userName, this.state.passWord)
        .then(userId => {
            localStorage.setItem('userId', userId)
            window.location.href = '/'
        })
    }
    render(){
        return (
            <div className = 'form'>
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label><br/>
                    <input type="text" name="userName" onChange={this.handleChange} />
                    <br/>
                    <label>Password</label><br/>
                    <input type="password" name="passWord" onChange={this.handleChange} /><br/>
                    <input type="submit" value="Sign In"/>
                </form>
            </div>
        )
    }
}
