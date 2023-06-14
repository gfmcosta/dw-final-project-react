import React, { Component } from 'react';
import SubHeader from './SubHeader';

class AdminCategoryCreatePage extends Component {

    render(){
        return (
            <div>
                <SubHeader/>
                <div style={{marginTop: "200px", width:"70%", left:"50%", transform:"translate(-50%)", position:"absolute", textAlign:"left"}}>
                    <h1>Create</h1>
                    <h4>Category</h4>
                    <hr />
                    <div class="row">
                        <div class="col-md-4">
                            <form action="/Category/Create" method="post">
                                
                                <div class="form-group">
                                    <label class="control-label" for="description">Descrição</label>
                                    <input class="form-control" type="text" data-val="true" data-val-length="A Descrição só pode ter apenas 50 caracteres" data-val-length-max="50" data-val-regex="Tem de escrever uma Descrição válida" data-val-regex-pattern="^[a-zçãõáéíóúA-ZÇÃÕÁÉÍÓÚ -]+$" data-val-required="A Descrição é de preenchimento obrigatório" id="description" maxlength="50" name="description" value="" />
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
                        <a href="/admin/category">Back to List</a>
                    </div>
                    </div>
            </div>
        );
    }
}

export default AdminCategoryCreatePage;