import React, { Component } from 'react';
import SubHeader from './SubHeader';

class AdminProductCreatePage extends Component {

    state={
        epoca: []
    }

    async componentDidMount(){
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        let res = await fetch(`http://localhost:5072/API/productseason`, requestOptions).catch(error => console.log('error', error));
        let result = await res.json();
        if (res.status==200){
          this.setState({epoca: result});
        }
      }

      handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission
        const desc = this.state.description;
      
        try {
          const response = await fetch('http://localhost:5072/API/product/create', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ description: desc })
          });
          console.log(response)
          if (response.status === 200) {
            console.log("entrou")
            window.location.href = '/admin/category';
          } else {
            console.log('Error:', response.status);
          }
        } catch (error) {
          console.log('Error:', error);
        }
      }


    render(){
        return (
            <div>
                <SubHeader/>
                <div style={{marginTop: "200px", width:"70%", left:"50%", transform:"translate(-50%)", position:"absolute", textAlign:"left"}}>
                <h1>Create</h1>

                <h4>Product</h4>
                <hr />
                <div class="row">
                    <div class="col-md-4">
                        <form onSubmit={this.handleSubmit}>
                            
                            <div class="form-group">
                                <label class="control-label" for="name">Nome</label>
                                <input class="form-control" type="text" data-val="true" data-val-regex="Tem de escrever um Nome válido" data-val-regex-pattern="^[a-zçãõáéíóúA-ZÇÃÕÁÉÍÓÚ -]+$" data-val-required="O Nome é de preenchimento obrigatório" id="name" name="name" value="" />
                                <span class="text-danger field-validation-valid" data-valmsg-for="name" data-valmsg-replace="true"></span>
                            </div>
                            <div class="form-group">
                                <label class="control-label" for="description">Descrição</label>
                                <input class="form-control" type="text" data-val="true" data-val-regex="Tem de escrever uma Descrição válida" data-val-regex-pattern="^[a-zçãõáéíóúA-ZÇÃÕÁÉÍÓÚ -]+$" data-val-required="A Descrição é de preenchimento obrigatório" id="description" name="description" value="" />
                                <span class="text-danger field-validation-valid" data-valmsg-for="description" data-valmsg-replace="true"></span>
                            </div>
                            <div class="form-group">
                                <label class="control-label" for="quantity">Quantidade</label>
                                <input class="form-control" type="number" data-val="true" data-val-range="A Quantidade mínima é 0." data-val-range-max="2147483647" data-val-range-min="0" data-val-required="A Quantidade é de preenchimento obrigatório" id="quantity" name="quantity" value="" /><input name="__Invariant" type="hidden" value="quantity" />
                                <span class="text-danger field-validation-valid" data-valmsg-for="quantity" data-valmsg-replace="true"></span>
                            </div>
                            <div class="form-group">
                                <label class="control-label" for="priceAux">Preçoo</label>
                                <input class="form-control" type="text" data-val="true" data-val-regex="No Preçoo só pode usar algarismos, e se desejar, duas casas decimais no final." data-val-regex-pattern="[0-9]+[.,]?[0-9]{1,2}" data-val-required="O Preço é de preenchimento obrigatório" id="priceAux" name="priceAux" value="" />
                                <span class="text-danger field-validation-valid" data-valmsg-for="priceAux" data-valmsg-replace="true"></span>
                            </div>
                            <div class="form-group">
                                <label class="control-label" for="imagePath">imagePath</label>
                                <input name="imageFile" class="form-control" type="file" accept="image/*" />
                                <span class="text-danger field-validation-valid" data-valmsg-for="imagePath" data-valmsg-replace="true"></span>
                            </div>
                            <div class="form-group">
                                <label class="control-label" for="seasonFK">seasonFK</label>
                                <select class="form-control" data-val="true" data-val-required="The seasonFK field is required." id="seasonFK" name="seasonFK">
                                    {this.state.epoca.map((seas) => (
                                    <option value="4">
                                        {seas.description}
                                    </option>))}
                                </select>
                            </div>
                            <br/>
                            <div class="form-group">
                                <input type="submit" value="Create" class="btn btn-primary" />
                            </div>
                        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8O56x1MYUghBktVmBHiL2KDBfU40T_E-2lckD7QkaBQxQ9FWglVUA8t4fDPsD-8YbiolPcgw_CH5zGx2mlgDvWelx8A9pnRIiGaOBcfYksjY5WFNYSwCg71opNOAXqfhEzoZL3_7Yxi_5GGH8BSvvLY" /></form>
                    </div>
                </div>
                <br/>
                <div>
                    <a href="/admin/product">Back to List</a>
                </div>
                </div>
            </div>
        );
    }
}

export default AdminProductCreatePage;