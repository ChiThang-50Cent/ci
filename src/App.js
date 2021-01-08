import './App.css';
import React from 'react'
import EmojiList from './component/EmojiList.jsx'
import SearchBar from './component/SearchBar.jsx';
import Header from './component/Header.jsx'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inp: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    console.log(event)
    this.setState({ inp: event.target.value  })
  }
  render() {
    return (
      <div>
        <Header />
        <SearchBar handleChange={this.handleChange} />
        <EmojiList inp={this.state.inp} />
      </div>

    );
  }
}

export default App;
