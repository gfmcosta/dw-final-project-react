import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ProductDetails extends Component {
  
    state={
        id: '',
        products: '',
        sizes: ['S', 'M', 'L']
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
              <div className="col-md-6" style={{textAlign:"left", marginLeft:"5%", maxWidth:"fit-content"}}>
                <h2>{this.state.products.name}</h2>
                <h4>{this.state.products.price}€</h4>
                <p>Cor</p>
                <div className="col-md-6" style={{maxWidth:"200px"}}>
                    <img
                    src="https://static.bershka.net/4/photos2/2023/V/0/1/p/0496/538/505/173d444fbaa583a28d1b832b4edc0e0c-0496538505_2_3_0.jpg?imwidth=850&impolicy=bershka-itxmedium&imformat=generic"
                    alt="Product"
                    className="img-fluid"
                    style={{width:"50%"}}
                    />
                </div>
                <p>Tamanho</p>
                <div className="btn-group">
                    {this.state.sizes.map((size, index) => (
                    <Button variant="outline-primary" key={index}>
                        {size}
                    </Button>
                    ))}
                </div>
                <Button variant="primary">Add to Cart</Button>
              </div>
            </div>
          </div>
        )
    };
}

export default ProductDetails;
