import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'react-pro-sidebar/dist/css/styles.css';
import "./Footer.css"

class Footer extends Component {
    state = {
      showFooter: false,
    };
  
    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }
  
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  
    handleScroll = () => {
      const isScrolledToBottom =
        window.innerHeight + window.pageYOffset >= document.body.scrollHeight;
      this.setState({ showFooter: isScrolledToBottom });
    };
  
    render() {
      const { showFooter } = this.state;
  
      return (
        <footer className={`bg-dark text-light ${showFooter ? 'show-footer' : ''}`}>
          <Container style={{height:"auto"}}>
            <Row style={{marginTop:"25px"}}>
              <Col md={6}>
                <h5>Sobre Nós</h5>
                <p>Projeto realizado no âmbito da cadeira de Desenvolvimento Web, lecionada pelos docentes João Silva e José Casimiro</p>
                <p>Loja online de Roupa 'Água Salgada'</p>
                <p>Da autoria de Gonçalo Costa 23692 & João Gonçalves 23882</p>
              </Col>
              <Col md={3}>
                <h5>Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="/">Inicio</a>
                  </li>
                  <li>
                    <a href="/contactos">Contactos</a>
                  </li>
                </ul>
              </Col>
              <Col md={3}>
                <h5>Contacte-nos</h5>
                <address>
                  Rua das Flores Nº32
                  <br />
                  Tomar, 2300-469
                  <br />
                  Phone: (351) 911 223 344
                  <br />
                  Email: support@aguasalgada.pt
                </address>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                <p>&copy; {new Date().getFullYear()} Água Salgada. All rights reserved.</p>
              </Col>
            </Row>
          </Container>
        </footer>
      );
    }
  }

export default Footer;