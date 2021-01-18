import './App.css';
import React from 'react'
import SearchBar from './component/searchBar.jsx';
import BookList from './component/BookList.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
    this.keyDown = this.keyDown.bind(this)
  }
  keyDown(ev) {
    if (ev.keyCode === 13) {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${ev.target.value}`)
        .then(res => res.json())
        .then(data => { this.setState({ books: data.items }) })
    }
  }
  render() {
    return (
      <div style={{
        width: '98vw'
      }}>
        <SearchBar keyDown={this.keyDown} />
        <BookList books={this.state.books ? this.state.books : []} />
      </div>
    );
  }
}

export default App;
