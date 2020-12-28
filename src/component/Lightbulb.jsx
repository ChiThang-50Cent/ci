import { render } from '@testing-library/react';
import React from 'react'
import '../assest/css/lightbulb.css'

class Lightbulb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'isOn' : true
        }
    }
    sw() {
        if (this.state.isOn == true) {
            this.setState({isOn : false})
        } else {
            this.setState({isOn : true})
        }
    }
    render() {
        return(
            <div className="container">
                <div>
                    <img src={this.state.isOn == true ? 'on.jpg':'off.jpg'} alt="light" className="image"/>
                </div>
                <input type="button" value="Switch" onClick = {()=>this.sw()} />
            </div>
        );
    }
}

export {Lightbulb};