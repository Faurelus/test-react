import logo from './logo.svg';
import './App.css';
import Button from './components/Button'

const Header = () => {
  return (
    <div></div>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         hello world.
        </p>
        <Header />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Button />
    </div>
  );
}

export default App;
