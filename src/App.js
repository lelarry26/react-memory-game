import './App.css';
import MemoryCard from './components/MemoryCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Memory Game</h1>
        <h2 className="subtitle">Match Cards To Win</h2>
      </header>
      <MemoryCard />
    </div>
  );
}

export default App;
