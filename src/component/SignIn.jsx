import React from 'react'

export default function SignIn(props) {
    const disp = props.display ? {display: "block"} : {display : "none"}
    return (
        <div style = {
            disp
        } className = 'form'>
            <form onSubmit={props.handleSubmit}>
                <label>Username</label><br/>
                <input type="text" name="userName" onChange={props.handleChange} />
                <br/>
                <label>Password</label><br/>
                <input type="password" name="passWord" onChange={props.handleChange} /><br/>
                <input type="submit" value="Sign In"/>
            </form>
        </div>
    )
}
