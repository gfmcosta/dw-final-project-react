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
            <Row>
              <Col md={6}>
                <h5>About Us</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet tortor quis mattis commodo.
                  Sed commodo, turpis vitae lacinia pretium, velit velit posuere risus, sit amet hendrerit eros ante sed neque.
                </p>
              </Col>
              <Col md={3}>
                <h5>Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </Col>
              <Col md={3}>
                <h5>Contact Us</h5>
                <address>
                  123 Main Street
                  <br />
                  City, State ZIP
                  <br />
                  Phone: (123) 456-7890
                  <br />
                  Email: info@example.com
                </address>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
              </Col>
            </Row>
          </Container>
        </footer>
      );
    }
  }

export default Footer;