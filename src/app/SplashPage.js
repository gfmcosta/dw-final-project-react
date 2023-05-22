import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';
import { FaShoppingBag, FaUserCircle } from 'react-icons/fa';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import "./SplashPage.css"

class SplashPage extends Component {
  state = {};
  render() {
    return (
      <div>
        {/*<ProSidebar>
          <Menu iconShape="square">
            <MenuItem icon={<FaShoppingCart />}>Carrinho</MenuItem>
            <MenuItem icon={<FaUserCircle />}>Iniciar Sessão</MenuItem>
            <MenuItem icon={<FaShoppingCart />}>Carrinho</MenuItem>
            <MenuItem icon={<FaShoppingCart />}>Carrinho</MenuItem>
            <MenuItem icon={<FaShoppingCart />}>Carrinho</MenuItem>
            <MenuItem icon={<FaShoppingCart />}>Carrinho</MenuItem>
            <MenuItem icon={<FaShoppingCart />}>Carrinho</MenuItem>
          </Menu>
        </ProSidebar>*/}

        <Navbar bg="light" expand="lg" variant="light" fixed="top">
          <Container>
            <h1 href="" className="title">
              ÁGUA SALGADA
            </h1>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <br/><br/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="" className="text-uppercase">
                  Inicio
                </Nav.Link>
                <Nav.Link href="produtos" className="text-uppercase">
                  Produtos
                </Nav.Link>
                <Nav.Link href="contactos" className="text-uppercase">
                  Contactos
                </Nav.Link>
                <Nav.Link href="login" className="d-flex align-items-center">
                  <FaUserCircle className="me-2" />
                  <span>Iniciar Sessão</span>
                </Nav.Link>
                <Nav.Link href="" className="d-flex align-items-center" id="far-right">
                  <FaShoppingBag className="me-2" />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* ----------------------------------- teste
        <div className="sub-menu-bar">
          <Container>
            <Nav>
              <Nav.Link href="#verao" className="text-uppercase">
                Verão
              </Nav.Link>
              <Nav.Link href="#primavera" className="text-uppercase">
                Primavera
              </Nav.Link>
              <Nav.Link href="#outono" className="text-uppercase">
                Outono
              </Nav.Link>
            </Nav>
          </Container>
        </div>
        */}

        <br />
        <br />
        <br />
        <br />
        
        <div className='main-div'>
            <div className="img-container">
                <img src='https://wallpapers.com/images/hd/costa-rica-1000-x-1333-picture-wrksj1hivjprcj6d.jpg' className='main-images' width="100%"></img>
                <h2 className='word'>PRIMAVERA</h2>
            </div>
            <div className="img-container">
                <img src='https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VtbWVyJTIwZnVufGVufDB8fDB8fA%3D%3D&w=1000&q=80' className='main-images' width="100%"></img>
                <h2 className='word'>VERÃO</h2>
            </div>
            <div className="img-container">
                <img src='https://cdn.wallpapersafari.com/18/83/xk9Y7W.jpg' className='main-images' width="100%"></img>
                <h2 className='word'>OUTONO</h2>
            </div>
        </div>

      </div>
    );
  }
}

export default SplashPage;


//https://wallpapers.com/images/hd/costa-rica-1000-x-1333-picture-wrksj1hivjprcj6d.jpg"
//https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VtbWVyJTIwZnVufGVufDB8fDB8fA%3D%3D&w=1000&q=80
//https://cdn.wallpapersafari.com/18/83/xk9Y7W.jpg