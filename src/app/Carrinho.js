import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
class Carrinho extends Component {
    state = {
        show: this.props.show,
    };

    componentDidUpdate(prevProps){
        if (prevProps.show !== this.props.show){
            this.setState({show: this.props.show})
        }
    }

    closeModal = () => {
        this.setState({show: false})
    };

    handleKeyDown = (event) => {
        if (event.keyCode === 27) {
            this.closeModal();
        }
    };

    handlecloseButtonClick = () => {
        this.closeModal();
    };


    render() { 
        return ( 
            <div>
                <Modal
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state.show} // Passar a propriedade 'show' para o Modal
                    onHide={this.props.onHide} // Passar a propriedade 'onHide' para o Modal
                    onEscapeKeyDown={this.props.onHide} // Passar a propriedade 'onEscapeKeyDown' para o Modal
                    >
                    <Modal.Header closeButton onClick={this.handlecloseButtonClick}>
                        <Modal.Title id="contained-modal-title-vcenter">
                        Carrinho de Compras
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Lista de produtos</h4>
                        <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
         );
    }
}

export default Carrinho;