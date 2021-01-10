import './App.css';
import FireCont from './component/FireCont';
import GrassCont from './component/GrassCont';
import ImgCont from './component/ImgCont.jsx';
import WaterCont from './component/WaterCont';

function App() {
  return (
    <div className='game-cont'>
      <ImgCont />
      <div className='type-cont'>
        <GrassCont />
        <WaterCont />
        <FireCont />
      </div>
    </div>
  );
}

export default App;
