import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';
import { FaShoppingBag, FaUserCircle } from 'react-icons/fa';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import "./SplashPage.css"

class Layout extends Component {
    state = {
        isLoggedIn: false,
    }
    componentDidMount(){
        console.log(JSON.parse(sessionStorage.getItem('user')));
        if (JSON.parse(sessionStorage.getItem('user'))!= null){
          this.setState({isLoggedIn: true});
        }else{
          this.setState({isLoggedIn: false});
        }
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
                <Nav.Link href="produtos" className="text-uppercase">
                  Produtos
                </Nav.Link>
                <Nav.Link href="contactos" className="text-uppercase">
                  Contactos
                </Nav.Link>
                {this.state.isLoggedIn ? (
                  <Nav.Link href="profile" className="d-flex align-items-center">
                    <FaUserCircle className="me-2" />
                    <span>Perfil</span>
                  </Nav.Link>
                ) : (
                  <Nav.Link href="login" className="d-flex align-items-center">
                    <FaUserCircle className="me-2" />
                    <span>Iniciar Sessão</span>
                  </Nav.Link>
                )}
                <Nav.Link href="" className="d-flex align-items-center" id="far-right">
                  <FaShoppingBag className="me-2" />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        );
    }
}

export default Layout;