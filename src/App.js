import logo from './logo.svg';
import './App.css';
import SplashPage from './app/SplashPage';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ProdutosPage from './app/ProdutosPage';
import LoginPage from './app/LoginPage';
import RegistrationPage from './app/RegistrationPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/produtos" element={<ProdutosPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<ProdutosPage />} />
      </Routes>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
