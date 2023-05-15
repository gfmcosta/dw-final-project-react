import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';

class SplashPage extends Component {
    state = { 

    }
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg" variant="light" fixed="top">
                    <Container>
                        <Navbar.Brand href="#home" className="fw-bold">Loja de Roupa</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="#home" className="text-uppercase">Ínicio</Nav.Link>
                                <Nav.Link href="#produtos" className="text-uppercase">Produtos</Nav.Link>
                                <Nav.Link href="#contato" className="text-uppercase">Contactos</Nav.Link>
                                {/* <Nav.Link href="#carrinho" className="d-flex align-items-center">
                                <FaShoppingCart className="me-2" />
                                <span>Carrinho</span>
                                </Nav.Link> */}
                                <Nav.Link href="LoginPage" className="d-flex align-items-center">
                                <FaUserCircle className="me-2" />
                                <span>Iniciar Sessão</span>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <br></br><br></br><br></br><br></br>
                <Container>
                    <Row>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/350x250" />
                                <Card.Body>
                                    <Card.Title>Produto 1</Card.Title>
                                    <Card.Text>
                                    Descrição do produto 1.
                                    </Card.Text>
                                    <Button variant="primary">Comprar</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/350x250" />
                                <Card.Body>
                                    <Card.Title>Produto 2</Card.Title>
                                    <Card.Text>
                                    Descrição do produto 2.
                                    </Card.Text>
                                    <Button variant="primary">Comprar</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/350x250" />
                                <Card.Body>
                                    <Card.Title>Produto 3</Card.Title>
                                    <Card.Text>
                                    Descrição do produto 3.
                                    </Card.Text>
                                    <Button variant="primary">Comprar</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>  
        );
    }
}

export default SplashPage;