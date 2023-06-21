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
import SobrePage from './app/SobrePage';
import AdminPage from './app/AdminPage'
import AdminCategoryPage from './app/AdminCategoryPage'
import AdminPersonPage from './app/AdminPersonPage'
import AdminOrderPage from './app/AdminOrderPage'
import AdminOrderItemPage from './app/AdminOrderItemPage'
import AdminProductPage from './app/AdminProductPage'
import AdminSeasonPage from './app/AdminSeasonPage'
import AdminCategoryCreatePage from './app/AdminCategoryCreatePage'
import AdminProductCreatePage from './app/AdminProductCreatePage'
import AdminProductSeasonCreatePage from './app/AdminProductSeasonCreatePage'
import AcessoNegado from './app/AcessoNegado';
import Protected from './Protected';

function RegistrationLayout({ children }) {
  return (
    <div style={{ backgroundColor: '#FD8137', minHeight: '100vh' }}>
      {children}
    </div>
  );
}

class App extends Component {
  state = {
    modalShow: false,
    isAuth: false,
    isAdmin: false,
  };

  handleModalShow = () => {
    this.setState({ modalShow: true });
  };

  componentDidMount() {
    console.log(JSON.parse(sessionStorage.getItem('user')));
    if (sessionStorage.getItem('user') != null) {
      this.setState({isAuth : true});
      if (JSON.parse(sessionStorage.getItem('user')).email.includes('@admin.ipt.pt')) {
        this.setState({isAdmin : true});
        sessionStorage.setItem('isAdmin', true);
      }
    }
  }

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
          <Route path="/about" element={<SobrePage/>}/>
          <Route
            path="/admin"
            element={
              <Protected isAuth={sessionStorage.getItem('user') != null} isAdmin={sessionStorage.getItem('isAdmin')}>
                <AdminPage />
              </Protected>
            }
          />
          <Route
            path="/admin/category"
            element={
              <Protected isAuth={sessionStorage.getItem('user') != null} isAdmin={sessionStorage.getItem('isAdmin')}>
                <AdminCategoryPage />
              </Protected>
            }
          />
          <Route
            path="/admin/person"
            element={
              <Protected isAuth={sessionStorage.getItem('user') != null} isAdmin={sessionStorage.getItem('isAdmin')}>
                <AdminPersonPage />
              </Protected>
            }
          />
          <Route
            path="/admin/order"
            element={
              <Protected isAuth={sessionStorage.getItem('user') != null} isAdmin={sessionStorage.getItem('isAdmin')}>
                <AdminOrderPage />
              </Protected>
            }          />
          <Route
            path="/admin/orderitem"
            element={
              <Protected isAuth={sessionStorage.getItem('user') != null} isAdmin={sessionStorage.getItem('isAdmin')}>
                <AdminOrderItemPage />
              </Protected>
            }          />
          <Route
            path="/admin/product"
            element={
              <Protected isAuth={sessionStorage.getItem('user') != null} isAdmin={sessionStorage.getItem('isAdmin')}>
                <AdminProductPage />
              </Protected>
            }          />
          <Route
            path="/admin/productseason"
            element={
              <Protected isAuth={sessionStorage.getItem('user') != null} isAdmin={sessionStorage.getItem('isAdmin')}>
                <AdminSeasonPage />
              </Protected>
            }          />
          <Route
            path="/admin/category/create"
            element={
              <Protected isAuth={sessionStorage.getItem('user') != null} isAdmin={sessionStorage.getItem('isAdmin')}>
                <AdminCategoryCreatePage />
              </Protected>
            }          />
          <Route
            path="/admin/product/create"
            element={
              <Protected isAuth={sessionStorage.getItem('user') != null} isAdmin={sessionStorage.getItem('isAdmin')}>
                <AdminProductCreatePage />
              </Protected>
            }          />
          <Route
            path="/admin/productseason/create"
            element={
              <Protected isAuth={sessionStorage.getItem('user') != null} isAdmin={sessionStorage.getItem('isAdmin')}>
                <AdminProductSeasonCreatePage />
              </Protected>
            }          />
          <Route path="/acessoNegado" element={<AcessoNegado/>} />
        </Routes>
        {/* <Footer></Footer> */}
      </div>
    );
  }
}

export default App;