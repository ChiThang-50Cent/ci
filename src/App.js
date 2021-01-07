import './App.css';
import React from 'react'
import { Card } from './component/Card.jsx'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      select : []
    }
    this.click = this.click.bind(this)
  }
  click(){
    console.log(this);
  }
  render(){
    return (
      <section className="card-container" >
          <Card cardId="1" id="1" handleClick = {this.click} />
          <Card cardId="2" id="2" />
          <Card cardId="1" id="3" />
          <Card cardId="4" id="4" />
          <Card cardId="2" id="5" />
          <Card cardId="3" id="6" />
          <Card cardId="4" id="7" />
          <Card cardId="6" id="8" />
          <Card cardId="3" id="9" />
          <Card cardId="5" id="10" />
          <Card cardId="7" id="11" />
          <Card cardId="6" id="12" />
          <Card cardId="5" id="13" />
          <Card cardId="8" id="14" />
          <Card cardId="9" id="15" />
          <Card cardId="8" id="16" />
          <Card cardId="7" id="17" />
          <Card cardId="9" id="18" />
      </section>
    );
  
  }
}
export default App;
