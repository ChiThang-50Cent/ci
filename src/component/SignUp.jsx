import React from 'react'
import '../assest/css/Login.css'
import { SignUp } from '../ultis/ultis'

export default class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(ev) {
        const name = ev.target.name
        this.setState({
            [name]: ev.target.value
        })
    }
    handleSubmit(ev) {
        ev.preventDefault()
        console.log(this.state)
        if (this.state.passWord.length < 6) {
            alert(`Password isn't long enough`)
        }
        else if (this.state.passWord !== this.state.RepeatPass) {
            alert(`Password doesn't match`)
        } else {
            SignUp(this.state)
                .then(data => {
                    localStorage.setItem('uid', data)
                    window.location.href = '/login'
                })
        }

    }
    render() {
        if (localStorage.getItem('uid') === null) {
            return (
                <div className='login' id='signup'>
                    <h1>Sign Up</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label>Username</label><br />
                        <input type="text" name="userName" onChange={this.handleChange} required placeholder='Username' /><br />
                        <label>Password</label><br />
                        <input type="password" name="passWord" onChange={this.handleChange} required placeholder="More than 6 characters" /><br />
                        <label>Repeat Password</label><br />
                        <input type="password" name="RepeatPass" onChange={this.handleChange} required placeholder='Repeat Password' /><br />
                        <input type="submit" value="Sign Up" />
                    </form>
                </div>
            )
        } else {
            window.location.href = '/'
        }
    }
}

