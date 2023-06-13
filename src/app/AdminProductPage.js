import React, { Component } from 'react';
import SubHeader from './SubHeader';

class AdminProductPage extends Component {

    state={
        Produtos: []
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
          this.setState({Produtos: result});
        }
    }

    render(){
        return (
            <div>
                <SubHeader />
            <div style={{marginTop:"200px", width:"70%", left:"50%", transform:"translate(-50%)", position:"absolute", textAlign:"left"}}>
                <h1>Index</h1>
                <p>
                    <a href="/Category/Create">Create New</a>
                </p>
                <table class="table">
                    <thead>
                        <tr>
                        <th>
                            Nome
                        </th>
                        <th>
                            Descrição
                        </th>
                        <th>
                            Quantidade
                        </th>
                        <th>
                            Preço
                        </th>
                        <th>
                            ImagePath
                        </th>
                        <th>
                            Season
                        </th>
                        <th></th>
                        </tr>
                    </thead>
                    {this.state.Produtos.map((a) =>(
                    <tbody>
                        <tr>
                            <td>
                                {a.name}
                            </td>
                            <td>
                                {a.description}
                            </td>
                            <td>
                                {a.quantity}
                            </td>
                            <td>
                                {a.price}
                            </td>
                            <td>
                                {a.imagePath}
                            </td>
                            <td>
                                {a.seasonFK}
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

export default AdminProductPage;
