import React, { Component } from 'react';
import { Container, Button, Form, Row} from 'react-bootstrap';
import './ProductDetails.css'
import { FaShoppingCart } from 'react-icons/fa';

class ProductDetails extends Component {
  
    state={
        id: '',
        products: '',
        sizes: ['S', 'M', 'L'],
        selectedSize: '',
        quantity: ''
    };

    handleQuantity = (e) => {
        this.setState({ quantity: e.target.value }, () => {
          console.log(this.state.quantity);
        });
      };

    
      handleClick = (size) => {
        this.setState({ selectedSize: size }, () => {
          console.log(this.state.selectedSize); // Print the selected size
        });
      };
      
      

    async componentDidMount(){
        const searchParams = new URLSearchParams(window.location.search);
        const s = searchParams.get('id');
        if(s){
          this.setState({id: s});
          console.log(s);
        }
    
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        let res = await fetch(`http://localhost:5072/API/Products/${s}`, requestOptions).catch(error => console.log('error', error));;
        let result = await res.json();
        
        if (res.status === 200){
          this.setState({products: result});
          console.log(result);
        }
      }

    render(){

        return( 
            <div className="container" style={{marginTop:"10%", left:"5%", position:"relative"}}>
                <div className="row" >
                    <div className="col-md-6">
                        <img
                        src="https://static.bershka.net/4/photos2/2023/V/0/1/p/0496/538/505/173d444fbaa583a28d1b832b4edc0e0c-0496538505_2_3_0.jpg?imwidth=850&impolicy=bershka-itxmedium&imformat=generic"
                        alt="Product"
                        className="img-fluid"
                        />
                    </div>
                    <div className="col-md-6" style={{textAlign:"left", marginLeft:"5%", maxWidth:"35%"}}>
                        <h2>{this.state.products.name}</h2>
                        <h4>{this.state.products.price}€</h4><br/>
                        <p>Cor</p>
                        <div className="col-md-6" style={{maxWidth:"200px"}}>
                            <img
                            src="https://static.bershka.net/4/photos2/2023/V/0/1/p/0496/538/505/173d444fbaa583a28d1b832b4edc0e0c-0496538505_2_3_0.jpg?imwidth=850&impolicy=bershka-itxmedium&imformat=generic"
                            alt="Product"
                            className="img-fluid"
                            style={{width:"40%"}}
                            />
                        </div><br/>
                        <Form.Select
                            className="my-4"
                            onChange={this.handleQuantity}
                            value={this.state.quantity}
                            style={{marginTop:"5%!important", width:"33%"}}
                            >
                            <option value="">Quantidade</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>

                        </Form.Select>
                        <p>Tamanhos</p>
                        <div style={{display: "grid", justifyContent:"center",
                            gridTemplateColumns: "1fr 1fr 1fr",
                            gridTemplateRows: "2fr", gap: "20px 20px"
                            }}>
                            <Button className={this.state.selectedSize == "S" ? 'selected' : 'button-size'} value={this.state.selectedSize} onClick={() => this.handleClick("S")}>S</Button>
                            <Button className={this.state.selectedSize == "M" ? 'selected' : 'button-size'} value={this.state.selectedSize} onClick={() => this.handleClick("M")}>M</Button>
                            <Button className={this.state.selectedSize == "L" ? 'selected' : 'button-size'} value={this.state.selectedSize} onClick={() => this.handleClick("L")}>L</Button>
                        </div>
                        <br/><br/>
                        <Button variant="primary" style={{width:"100%"}}><FaShoppingCart className="mr-2" /> Adicionar</Button>
                    </div>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </div>
        )
    };
}

export default ProductDetails;
