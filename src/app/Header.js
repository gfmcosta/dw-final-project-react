import React, { Component } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaShoppingBag, FaUserCircle, FaKey} from 'react-icons/fa';
import 'react-pro-sidebar/dist/css/styles.css';
import "./SplashPage.css"

class Header extends Component {
    state = {
        isLoggedIn: false,
        modalShow: false,
        isAdmin: false,
    }
    componentDidMount(){
        console.log(JSON.parse(sessionStorage.getItem('user')));
        if (JSON.parse(sessionStorage.getItem('user'))!= null){
          this.setState({isLoggedIn: true});
          if (JSON.parse(sessionStorage.getItem('user')).email.includes('@admin.ipt.pt')) {
            this.setState({isAdmin : true});
            sessionStorage.setItem('isAdmin', true);
          }
        }else{
          this.setState({isLoggedIn: false});
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('user');
        this.setState({isLoggedIn: false});
        sessionStorage.removeItem('shoppingCart');
        sessionStorage.removeItem('isAdmin');
        window.location.href = "/";
    }
    render() {
        return (
            <Navbar bg="light" expand="lg" variant="light" fixed="top">
          <Container>
            <h1 href="" className="title">
              ÁGUA SALGADA
            </h1>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <br/><br/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/" className="text-uppercase">
                  Inicio
                </Nav.Link>
                <Nav.Link href="/produtos" className="text-uppercase">
                  Produtos
                </Nav.Link>
                <Nav.Link href="/about" className="text-uppercase">
                  Sobre
                </Nav.Link>
                {this.state.isLoggedIn ? (
                  <Nav.Link href="/profile" className="d-flex align-items-center">
                    <FaUserCircle className="me-2" />
                    <span>Perfil</span>
                  </Nav.Link>
                  
                ) : (
                  <Nav.Link href="/login" className="d-flex align-items-center">
                    <FaUserCircle className="me-2" />
                    <span>Iniciar Sessão</span>
                  </Nav.Link>
                )}
                { sessionStorage.getItem('user') != null ? (
                  <>
                  <Nav.Link onClick={this.props.handleModalShow} className="d-flex align-items-center" id="far-right">
                    <FaShoppingBag className="me-2" />
                  </Nav.Link>
                  <Nav.Link className="d-flex align-items-center text-danger" onClick={this.handleLogout}>
                    Terminar Sessão
                  </Nav.Link>
                  </>
                ):(
                  null
                )}
                {this.state.isAdmin ? (
                  <>
                  <Nav.Link href="/admin" className="d-flex align-items-center">
                    <FaKey className="me-2" />
                    <span>Admin</span>
                  </Nav.Link>
                  </>):(null)}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        );
    }
}

export default Header;