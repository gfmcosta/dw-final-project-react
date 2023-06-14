import React, { Component } from 'react';
import SubHeader from './SubHeader';

class AdminProductSeasonCreatePage extends Component {

    render(){
        return (
            <div>
                <SubHeader/>
                <div style={{marginTop: "200px", width:"70%", left:"50%", transform:"translate(-50%)", position:"absolute", textAlign:"left"}}>
                <h1>Create</h1>
                    <h4>Product_Season</h4>
                    <hr />
                    <div class="row">
                        <div class="col-md-4">
                            <form action="/Product_Season/Create" method="post">
                                
                                <div class="form-group">
                                    <label class="control-label" for="description">description</label>
                                    <input class="form-control" type="text" data-val="true" data-val-required="The description field is required." id="description" name="description" value="" />
                                    <span class="text-danger field-validation-valid" data-valmsg-for="description" data-valmsg-replace="true"></span>
                                </div>
                                <br/>
                                <div class="form-group">
                                    <input type="submit" value="Create" class="btn btn-primary" />
                                </div>
                            <input name="__RequestVerificationToken" type="hidden" value="CfDJ8O56x1MYUghBktVmBHiL2KAiGy6rzhcyH30ECfDtUyA_3OBR4FJJ4a82SRve8gI6lNcbbG-c_6FiWMt2qgvr80nbRryoyOZGbgaU1lSPxijMvzipASCYePPVkRLGpOkIlIXN81z8TTJGIhN1uXn9bUM" /></form>
                        </div>
                    </div>
                    <br/>
                    <div>
                        <a href="/admin/productseason">Back to List</a>
                    </div>
                    </div>
            </div>
        );
    }
}

export default AdminProductSeasonCreatePage;