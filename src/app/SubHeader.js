import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const SubHeader = () => {
    return (
        <Navbar fixed="top" style={{marginTop:"110px", backgroundColor:"#c7c7c7", height:"50px"}}>
            <Container style={{height:"30px"}}>
                <Navbar.Collapse id="basic-navbar-nav" style={{marginTop:"-25px"}}>
                    <Nav className="ms-auto">
                        <Nav.Link href="/admin/category" className="text-uppercase" style={{color:"white"}}>
                            Categorias
                        </Nav.Link>
                        <Nav.Link href="/admin/order" className="text-uppercase" style={{color:"white"}}>
                            Pedidos
                        </Nav.Link>
                        <Nav.Link href="/admin/orderitem" className="text-uppercase" style={{color:"white"}}>
                            Artigos nos Pedidos
                        </Nav.Link>
                        <Nav.Link href="/admin/person" className="text-uppercase" style={{color:"white"}}>
                            Pessoas
                        </Nav.Link>
                        <Nav.Link href="/admin/product" className="text-uppercase" style={{color:"white"}}>
                            Produtos
                        </Nav.Link>
                        <Nav.Link href="/admin/productseason" className="text-uppercase" style={{color:"white"}}>
                            Épocas
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default SubHeader;
