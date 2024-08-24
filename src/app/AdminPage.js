import React, { Component } from 'react';
import SubHeader from './SubHeader';

class AdminPage extends Component {
    render(){
        return (
            <div>
                <SubHeader />
                <div class="text-center" style={{marginTop:"200px"}}>
                <h1 class="display-4">Bem-Vindo</h1><h3>Admin</h3><p>ao</p>
                <h1 class="display-4" style={{font:"bold"}}>PROJETO_FINAL_DWEB</h1>
            </div>

            </div>
        );
        }
}

export default AdminPage;
