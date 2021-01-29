import './App.css';
import { Head } from './component/head';
import { } from './ultis/ultis'
import Side from './component/side'
import Main from './component/main'
import Login from './component/login'
import Signup from './component/SignUp';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      'uid' : null
    }
  }
  componentDidMount(){
    let uid = localStorage.getItem('uid')
    if(uid !== null && this.state.uid !== null){}
  }
  render() {
    const Router = {
      '/': <div className="App">
        <Head />
        <div className='body'>
          <Side />
          <Main />
          <Side />
        </div>
      </div>,
      '/login': <Login />,
      '/signup': <Signup />
    }

    return (
      <div className="App">
        {Router[window.location.pathname]}
      </div>
    );
  }
}

export default App;
