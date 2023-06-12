import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
class Carrinho extends Component {
    state = {
        show: this.props.show,
        shoppingCart : JSON.parse(sessionStorage.getItem('shoppingCart')) || []
    };

    componentDidMount(){
        setInterval(() => {
            let shoppingCartAux = JSON.parse(sessionStorage.getItem('shoppingCart')) || [];
            if(this.state.shoppingCart.length !== shoppingCartAux.length){
                this.setState({shoppingCart: shoppingCartAux});
            }}, 1000);
    }

    componentDidUpdate(prevProps){
        if (prevProps.show !== this.props.show){
            this.setState({show: this.props.show})
        }
    }

    closeModal = () => {
        this.setState({show: false})
    };

    handlecloseButtonClick = () => {
        this.closeModal();
    };

    handleDeleteButtonClick = () => {
        sessionStorage.removeItem('shoppingCart');
        this.setState({shoppingCart: []});

    };


    render() {
        const totalPrice = this.state.shoppingCart.reduce((acc, item) => acc + item.price * item.chosenQuantity, 0);
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
                        <strong>
                            <p key={999}>
                            <span style={{ display: 'inline-block', width: '60px' }}>Nº</span>
                            <span style={{ display: 'inline-block', width: '100px' }}>Nome</span>
                            <span style={{ display: 'inline-block', width: '80px' }}>Tamanho</span>
                            <span style={{ display: 'inline-block', width: '100px' }}>Quantidade</span>
                            <span style={{ display: 'inline-block', width: '80px' }}>Preço</span>
                            </p>
                        </strong>
                        {this.state.shoppingCart.map((item) => (
                            <p key={item.id}>
                            <span style={{ display: 'inline-block', width: '60px' }}>{item.number}</span>
                            <span style={{ display: 'inline-block', width: '100px' }}>{item.name}</span>
                            <span style={{ display: 'inline-block', width: '80px' }}>{item.size}</span>
                            <span style={{ display: 'inline-block', width: '100px' }}>{item.chosenQuantity}</span>
                            <span style={{ display: 'inline-block', width: '80px' }}>{item.price * item.chosenQuantity}€</span>
                            </p>
                        ))}
                    </Modal.Body>

                    <Modal.Footer>
                    <span style={{ marginRight: 'auto', fontWeight: 'bold', fontSize: '20px' }}>
                        Preço Total: {totalPrice}€
                    </span>
                        <Button onClick={this.props.onHide}>Fechar</Button>
                        <Button variant="danger" onClick={ () => this.handleDeleteButtonClick()}>Limpar Todos</Button>
                        <Button variant="success" onClick={this.props.onHide}>Finalizar Compra</Button>
                    </Modal.Footer>
                </Modal>
            </div>
         );
    }
}

export default Carrinho;