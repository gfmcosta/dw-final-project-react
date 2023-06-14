import React, { Component } from 'react';
import SubHeader from './SubHeader';

class AdminOrderItemPage extends Component {

    state={
        Item_details: []
    }

    async componentDidMount(){
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        let res = await fetch(`http://localhost:5072/API/Order`, requestOptions).catch(error => console.log('error', error));;
        let result = await res.json();
        if (res.status === 200){
          console.log(result);
          this.setState({Item_details: result});
        }
    }

    render(){
        return (
            <div>
                <SubHeader />
            <div style={{marginTop:"200px", width:"70%", left:"50%", transform:"translate(-50%)", position:"absolute", textAlign:"left"}}>
                <h1>Index</h1>
                <p>
                    <a href="/admin/orderitem/create">Create New</a>
                </p>
                <table class="table">
                    <thead>
                        <tr>
                        <th>
                            Tamanho
                        </th>
                        <th>
                            Quantidade
                        </th>
                        <th>
                            Preço
                        </th>
                        <th>
                            Order
                        </th>
                        <th>
                            Product
                        </th>
                        <th>
                            Tamanho
                        </th>
                        <th></th>
                        </tr>
                    </thead>
                    {this.state.Item_details.map((a) =>(
                    <tbody>
                        <tr>
                            <td>
                                {a.id}
                            </td>
                            <td>
                                {a.quantity}
                            </td>
                            <td>
                                {a.totalPrice}
                            </td>
                            <td>
                                {a.orderFK}
                            </td>
                            <td>
                                {a.productFK}
                            </td>
                            <td>
                                {a.size}
                            </td>
                            <td style={{textAlign:"right"}}>
                                <a href="/Category/Edit/1">Edit</a> |
                                <a href="/Category/Details/1">Details</a> |
                                <a href="/Category/Delete/1">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                    ))}
                </table>
            </div></div>
        );
        }
}

export default AdminOrderItemPage;
