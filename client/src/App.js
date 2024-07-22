import './App.css';
import Game from './components/tankdle.js'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 App">
      <h1 className='text-5xl'>TANKDLE</h1>
      <Game />
    </div>
  );
}

export default App;
