import React from 'react'

export default function SignUp(props) {
    const disp = props.display ? {display: "block"} : {display : "none"}
    return (
        <div style={
            disp
        } className = 'form'>
            <form onSubmit={props.handleSubmit}>
                <label>Username</label><br/>
                <input type="text" name="userName" onChange={props.handleChange} />
                <br/>
                <label>Password</label><br/>
                <input type="password" name="passWord" onChange={props.handleChange} /><br/>
                <label>Repeat Password</label><br/>
                <input type="password" name="rePassWord" onChange={props.handleChange} /><br/>
                <input type="submit" value="Sign Up"/>
            </form>
        </div>
    )
}
