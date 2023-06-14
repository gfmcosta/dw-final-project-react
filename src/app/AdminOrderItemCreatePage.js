import React, { Component } from 'react';
import SubHeader from './SubHeader';

class AdminOrderItemCreatePage extends Component {

    state={
        orders: [],
        produtos: []
    }

    async componentDidMount(){
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        let res = await fetch(`http://localhost:5072/API/order`, requestOptions).catch(error => console.log('error', error));
        let res2 = await fetch(`http://localhost:5072/API/products`, requestOptions).catch(error => console.log('error', error));
        let result = await res.json();
        let result2 = await res2.json();
        if (res.status==200){
          this.setState({orders: result});
          this.setState({produtos: result2});
        }
      }

    render(){
        return (
            <div>
                <SubHeader/>
                <div style={{marginTop: "200px", width:"70%", left:"50%", transform:"translate(-50%)", position:"absolute", textAlign:"left"}}>
                <h1>Create</h1>

                    <h4>OrderItem</h4>
                    <hr />
                    <div class="row">
                        <div class="col-md-4">
                            <form action="/OrderItem/Create" method="post">
                                
                                <div class="form-group">
                                    <label class="control-label" for="size">Tamanho</label>
                                    <select class="form-control" data-val="true" data-val-regex="O Tamanho deve ter apenas um caracter." data-val-regex-pattern="[SML]{1}" data-val-required="O Tamanho é de preenchimento obrigatório" id="size" name="size">
                                        <option>S</option>
                                        <option>M</option>
                                        <option>L</option>
                                    </select>
                                    <span class="text-danger field-validation-valid" data-valmsg-for="size" data-valmsg-replace="true"></span>
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="quantity">Quantidade</label>
                                    <input min="1" class="form-control" type="number" data-val="true" data-val-regex="A Quantidade tem de ser maior do que um" data-val-regex-pattern="^[1-9][0-9]*" data-val-required="A Quantidade é de preenchimento obrigatório" id="quantity" name="quantity" value="" /><input name="__Invariant" type="hidden" value="quantity" />
                                    <span class="text-danger field-validation-valid" data-valmsg-for="quantity" data-valmsg-replace="true"></span>
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="orderFK">orderFK</label>
                                    <select class="form-control" data-val="true" data-val-required="The orderFK field is required." id="orderFK" name="orderFK">
                                        {this.state.orders.map((fks) => (
                                        <option value="1">
                                            {fks.id}
                                        </option>))}
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="productFK">productFK</label>
                                    <select class="form-control" data-val="true" data-val-required="The productFK field is required." id="productFK" name="productFK">
                                        {this.state.produtos.map((prods) => (
                                        <option value="1">
                                            {prods.description}
                                        </option>))}
                                    </select>
                                </div>
                                <br/>
                                <div class="form-group">
                                    <input type="submit" value="Create" class="btn btn-primary" />
                                </div>
                            <input name="__RequestVerificationToken" type="hidden" value="CfDJ8O56x1MYUghBktVmBHiL2KBlgFAE2HFZm_CFKtC44KsL_zC9WDC9MCePyzrOpCYcpreQRbhaUKUirLtWG-9GBFmfd8pGYNp58h_kj6rB5BSEMHjFJ-V-rPvr1yL_az8BQYBd7O9s4Ug3f0bdMmIrjVE" /></form>
                        </div>
                    </div>
                    <br/>
                    <div>
                        <a href="/admin/orderitem">Back to List</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminOrderItemCreatePage;