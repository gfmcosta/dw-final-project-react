import './App.css';
import React, { Component } from 'react';
import SplashPage from './app/SplashPage';
import { Route, Routes } from 'react-router-dom';
import ProdutosPage from './app/ProdutosPage';
import LoginPage from './app/LoginPage';
import RegistrationPage from './app/RegistrationPage';
import Header from './app/Header';
import ProfilePage from './app/ProfilePage';
import Carrinho from './app/Carrinho';
import ProductDetails from './app/ProductDetails';
import Footer from  './app/Footer'

function RegistrationLayout({ children }) {
  return (
    <div style={{ backgroundColor: '#FD8137', minHeight: '100vh' }}>
      {children}
    </div>
  );
}

class App extends Component {
  state = {
    modalShow: false
  };

  handleModalShow = () => {
    this.setState({ modalShow: true });
  };

  render() {
    return (
      <div className="App">
        <Header handleModalShow={this.handleModalShow} />
        <Carrinho
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
        />
        <Routes>
          <Route index element={<SplashPage />} />
          <Route path="/produtos" element={<ProdutosPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/registration"
            element={
              <RegistrationLayout>
                <RegistrationPage />
              </RegistrationLayout>
            }
          />
          <Route path="/product" element={<ProductDetails/>}/>
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;