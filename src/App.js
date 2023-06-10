import './App.css';
import SplashPage from './app/SplashPage';
import {Route, Routes } from 'react-router-dom';
import ProdutosPage from './app/ProdutosPage';
import LoginPage from './app/LoginPage';
import RegistrationPage from './app/RegistrationPage';
import Layout from './app/Layout';
import ProfilePage from './app/ProfilePage';

const RegistrationLayout = ({ children }) => {
  return (
    <div style={{ backgroundColor: '#FD8137', minHeight: '100vh' }}>
      {children}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Layout/>
      <Routes>
        <Route index element={<SplashPage/>} />
        <Route path="/produtos" element={<ProdutosPage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route
          path="/registration"
          element={
            <RegistrationLayout>
              <RegistrationPage />
            </RegistrationLayout>
          }
        />
        <Route path="/profile" element={<ProfilePage/>}/>
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
