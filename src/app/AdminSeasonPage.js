import React, { Component } from 'react';
import SubHeader from './SubHeader';

class AdminSeasonPage extends Component {

    state={
        Seasons: []
    }

    async componentDidMount(){
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        let res = await fetch(`http://localhost:5072/API/productseason`, requestOptions).catch(error => console.log('error', error));;
        let result = await res.json();
        if (res.status === 200){
          console.log(result);
          this.setState({Seasons: result});
        }
    }

    render(){
        return (
            <div>
                <SubHeader />
            <div style={{marginTop:"200px", width:"70%", left:"50%", transform:"translate(-50%)", position:"absolute", textAlign:"left"}}>
                <h1>Lista de Épocas</h1>
                <p>
                    <a href="/admin/productseason/Create">Criar Época</a>
                </p>
                <table class="table">
                    <thead>
                        <tr>
                        <th>
                            Descrição
                        </th>
                        <th></th>
                        </tr>
                    </thead>
                    {this.state.Seasons.map((a) =>(
                    <tbody>
                        <tr>
                            <td>
                                {a.description}
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

export default AdminSeasonPage;
