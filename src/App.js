
import Cripto01 from './components/Cripto01';
import Cripto02 from './components/Cripto02';
import Cripto03 from './components/Cripto03';
import NavBar from './components/NavBar';
import Taller from './components/taller';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='contBody'>
        <Taller/>
      </div>
    </div>
  );
}

export default App;
