import React from 'react'
import './App.css';
import FireCont from './component/FireCont';
import GrassCont from './component/GrassCont';
import ImgCont from './component/ImgCont.jsx';
import WaterCont from './component/WaterCont';

class App extends React.Component {
  constructor(props){
    super(props)
    this.allowDrop = this.allowDrop.bind(this)
    this.drop = this.drop.bind(this)
  }
  allowDrop(ev){
    ev.preventDefault()
  }
  drop(ev) {
    ev.preventDefault()
    let data = ev.dataTransfer.getData('text')
    if (ev.target.localName === "div") {
      ev.target.appendChild(document.getElementById(data)) 
    }
  }
  render() {
    return (
      <div className='game-cont'>
        <ImgCont allowDrop={this.allowDrop} drop={this.drop} />
        <div className='type-cont'>
          <GrassCont allowDrop={this.allowDrop} drop={this.drop}/>
          <WaterCont allowDrop={this.allowDrop} drop={this.drop}/>
          <FireCont allowDrop={this.allowDrop} drop={this.drop}/>
        </div>
      </div>
    );
  }
}

export default App;
