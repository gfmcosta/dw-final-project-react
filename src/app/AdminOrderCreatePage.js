import React, { Component } from 'react';
import SubHeader from './SubHeader';

class AdminOrderCreatePage extends Component {

    state={
        users: []
    }

    async componentDidMount(){
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        let res = await fetch(`http://localhost:5072/API/Person`, requestOptions).catch(error => console.log('error', error));
        let result = await res.json();
        if (res.status==200){
          this.setState({users: result});
        }
      }

    render(){
        return (
            <div>
                <SubHeader/>
                <div style={{marginTop: "200px", width:"70%", left:"50%", transform:"translate(-50%)", position:"absolute", textAlign:"left"}}>
                    <h1>Create</h1>
                    <h4>Order</h4>
                    <hr />
                    <div class="row">
                        <div class="col-md-4">
                            <form action="/Category/Create" method="post">
                                
                                <div class="form-group">
                                    <label class="control-label" for="description">PersonFK</label>
                                    <select class="form-control" data-val="true" data-val-required="The personFK field is required." id="personFK" name="personFK">
                                        {this.state.users.map((persons) => (
                                        <option value="4">
                                            {persons.name}
                                        </option>))}
                                    </select>
                                    <span class="text-danger field-validation-valid" data-valmsg-for="description" data-valmsg-replace="true"></span>
                                </div>
                                <br/>
                                <div class="form-group">
                                    <input type="submit" value="Create" class="btn btn-primary" />
                                </div>
                            <input name="__RequestVerificationToken" type="hidden" value="CfDJ8O56x1MYUghBktVmBHiL2KAxvl4H2-ygkm6Gjw7qZ9mgjBYdCPmg5RUdp-n1h-x2mmRsg_k8XNpt1OoB7U_Bx7YVEmEuP9AoGT4Q9IZjAHeJBUyytdPjniUZ64sEJTzWL-2UwxQb5TuW09MHPEqeoKo" /></form>
                        </div>
                    </div>
                    <br/>
                    <div>
                        <a href="/admin/order">Back to List</a>
                    </div>
                    </div>
            </div>
        );
    }
}

export default AdminOrderCreatePage;