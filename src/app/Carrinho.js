import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
class Carrinho extends Component {
    state = {
        show: this.props.show,
        shoppingCart : JSON.parse(sessionStorage.getItem('shoppingCart')) || [],
        personId : ''
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

    async handleOrderButtonClick(){

        const storedPerson = sessionStorage.getItem('user');
        const user = JSON.parse(storedPerson)
        this.setState({personId: user.person.id});

        await fetch(`http://localhost:5072/API/orders/${user.person.id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.shoppingCart)
          })
    }


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
                    {this.state.shoppingCart.length > 0 ? (
                    <Modal.Body>
                        <h4>Lista de produtos</h4>
                        <strong>
                            <p key={999}>
                                <span style={{ display: 'inline-block', width: '60px', marginLeft:"10%"}}>Nº</span>
                                <span style={{ display: 'inline-block', width: '100px' }}>Nome</span>
                                <span style={{ display: 'inline-block', width: '80px' }}>Tamanho</span>
                                <span style={{ display: 'inline-block', width: '100px' }}>Quantidade</span>
                                <span style={{ display: 'inline-block', width: '80px' }}>Preço</span>
                            </p>
                        </strong>
                        {this.state.shoppingCart.map((item) => (
                            <p key={item.id} style={{height:"80px"}}>
                                <img src={/*`http://localhost:5072/images/${item.imagePath}`*/`https://static.bershka.net/4/photos2/2023/V/0/1/p/0496/538/505/173d444fbaa583a28d1b832b4edc0e0c-0496538505_2_3_0.jpg?imwidth=850&impolicy=bershka-itxmedium&imformat=generic`} style={{width:"8%"}}></img>
                                <span style={{ display: 'inline-block', width: '60px', marginLeft:"2%"}}>{item.number}</span>
                                <span style={{ display: 'inline-block', width: '100px' }}>{item.name}</span>
                                <span style={{ display: 'inline-block', width: '80px' }}>{item.size}</span>
                                <span style={{ display: 'inline-block', width: '100px' }}>{item.chosenQuantity}</span>
                                <span style={{ display: 'inline-block', width: '80px' }}>{item.price * item.chosenQuantity}€</span>
                            </p>
                        ))}
                        </Modal.Body>
                    ) : (<Modal.Body><p>Sem Artigos</p></Modal.Body>)}

                <Modal.Footer>
                    <span style={{ marginRight: 'auto', fontWeight: 'bold', fontSize: '20px' }}>
                        Preço Total: {totalPrice}€
                    </span>
                    <Button onClick={this.props.onHide}>Fechar</Button>
                    <Button variant="danger" onClick={() => this.handleDeleteButtonClick()}>Limpar Todos</Button>
                    <Button variant="success" onClick={() => this.handleOrderButtonClick()}>Finalizar Compra</Button>
                </Modal.Footer>
            </Modal>
        </div>
         );
    }
}

export default Carrinho;