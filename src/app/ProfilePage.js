import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Toast } from 'react-bootstrap';
import "./ProfilePage.css"

class ProfilePage extends Component{
    state={
      id: 0,
      editMode: false,
      name: '',
      email: '',
      password: '',
      phoneNumber: '',
      address: '',
      postalCode: '',
      dataNasc:'',
      gender: '',
      imagePath: '',
      storedUser: '',
      strSource: '',
      showToast: false,
      toastMessage: '',
      toastType: '',
    }

    async componentDidMount(){
      //this.setState({ storedUser: sessionStorage.getItem('user') });
      //this.setState({ email: this.state.storedUser.email });
      const storedUser = sessionStorage.getItem('user');
      console.log(storedUser);
      const user = JSON.parse(storedUser)
      this.setState({id: user.person.id});
      console.log(user.person.id);
      
      
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      let res = await fetch(`http://localhost:5072/API/Profile/${user.person.id}`, requestOptions).catch(error => console.log('error', error));
      let result = await res.json();
      if (res.status==200){
        console.log(result)
        const { name, phoneNumber, address, postalCode, gender, imagePath} = result;
        const { email, password } = user;
        this.setState({ name, email, password, phoneNumber, address, postalCode, gender, imagePath});
        console.log(this.state.imagePath)
        this.setState({strSource: `http://localhost:5072/images/${this.state.imagePath}`})
      }
    }

    handleNameChange(evt){
        this.setState({name: evt.target.value});
      }
    
      handleEmailChange(evt){
        this.setState({email: evt.target.value});
      }
    
      handlePasswordChange(evt){
        this.setState({password: evt.target.value});
      }
      
      handlePhoneNumber(evt){
        this.setState({phoneNumber: evt.target.value});
      }
    
      handleAddress(evt){
        this.setState({address: evt.target.value});
      }
    
      handlePostalCode(evt){
        this.setState({postalCode: evt.target.value});
      }
    
      handleDataNasc(evt){
        this.setState({dataNasc: evt.target.value});
      }
    
      handleGenderChange(evt){
        this.setState({gender: evt.target.value});
      }
    
      handleImagePath = (evt) => {
        this.fileInputRef.click();
      };

      handleFileInputChange = (event) => {
        const file = event.target.files[0];
        //const newImagePath = URL.createObjectURL(file);
        //console.log(newImagePath);
        const reader = new FileReader();

        reader.onloadend = () => {
          this.setState({ strSource: reader.result });
          this.setState({imagePath : reader.result})
          console.log(reader.result)
        };

        if (file) {
          reader.readAsDataURL(file);
        }
      }

      async handleProfileChange(){
        if(this.state.editMode){
          const data = {
            name: this.state.name,
            phoneNumber: this.state.phoneNumber,
            address: this.state.address,
            postalCode: this.state.postalCode,
            //dataNasc: this.state.dataNasc
            gender: this.state.gender,
            imagePath:this.state.imagePath
          };
          console.log(this.state.name)

          await fetch(`http://localhost:5072/API/updateProfile/${this.state.id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
            .then(response => {
              if(response.status === 200){
                this.setState({ showToast: true, toastMessage: 'Perfil alterado com sucesso', toastType: 'success' });
              }else{
                this.setState({ showToast: true, toastMessage: 'Ocorreu um erro ao alterar o perfil', toastType: 'danger' });
              }
              response.json()})
            .catch(error => {
              // Handle any errors
              console.error(error);
              this.setState({ showToast: true, toastMessage: 'Ocorreu um erro ao alterar o perfil', toastType: 'danger' });
            });
        };
        this.setState({ editMode: !this.state.editMode });
      }


      render(){
        return (
            <>
            <div className="center-image" style={{ gridColumn: "1", gridRow: "1", marginTop:"10%"}}>
            <h1>Perfil</h1><br/>
            <img
                src={this.state.strSource}
                alt="Profile Icon"
                className="rounded-circle img-fluid"
                style={{ width: '150px', height: '150px', cursor: "pointer"}}
                onClick={this.handleImagePath}
                />
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  ref={(input) => (this.fileInputRef = input)}
                  onChange={this.handleFileInputChange}
                />
            </div>

        <Container style={{
                minHeight: '100vh', marginTop: '2%', width: "60%", contentAlign: "center", display: "grid", justifyContent:"center",
                gridTemplateColumns: "0.25fr 0.25fr",
                gridTemplateRows: "repeat(6, 0.1fr)",
            }}>

                <div className="center" >
                    <Form.Group controlId="formName">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            style={{ width: "auto" }}
                            type="text"
                            placeholder="Insira o seu nome"
                            name="name"
                            value={this.state.name}
                            onChange={(evt) => this.handleNameChange(evt)}
                            disabled={!this.state.editMode}
                            />
                    </Form.Group>
                </div>

                <div className="center" >
                    <Form.Group controlId="formPhoneNumber">
                        <Form.Label>Telemóvel</Form.Label>
                        <Form.Control
                            style={{ width: "auto" }}
                            type="text"
                            placeholder="Insira o seu telemóvel"
                            name="phoneNumber"
                            value={this.state.phoneNumber}
                            onChange={(evt) => this.handlePhoneNumber(evt)}
                            disabled={!this.state.editMode}
                            />
                    </Form.Group>
                </div>

                <div className="center" >
                    <Form.Group controlId="formAddress">
                        <Form.Label>Morada</Form.Label>
                        <Form.Control
                            style={{ width: "auto" }}
                            type="text"
                            placeholder="Insira a sua morada"
                            name="address"
                            value={this.state.address}
                            onChange={(evt) => this.handleAddress(evt)}
                            disabled={!this.state.editMode}
                            />
                    </Form.Group>
                </div>

                <div className="center" >
                    <Form.Group controlId="formPostalCode">
                        <Form.Label>Código Postal</Form.Label>
                        <Form.Control
                            style={{ width: "auto" }}
                            type="text"
                            placeholder="Insira o seu código postal"
                            name="postalCode"
                            value={this.state.postalCode}
                            onChange={(evt) => this.handlePostalCode(evt)}
                            disabled={!this.state.editMode}
                            />
                    </Form.Group>
                </div>

                <div style={{justifyContent:"center"}}>
                <Form.Group controlId="formGender">
                    <Form.Label></Form.Label>
                    <Form.Select
                    style={{width:"75%", display:"inline"}}
                    name = "gender"
                    value={this.state.gender}
                    onChange={(evt) => this.handleGenderChange(evt)}
                    disabled={!this.state.editMode}
                    >
                    <option value = "" disabled hidden>Género</option>
                    <option value = "M">Masculino</option>
                    <option value = "F">Feminino</option>
                    </Form.Select>
                </Form.Group>
                </div>

                <div>
                    <Button variant="secondary" style={{float:"left", marginLeft:"13%"}} onClick={() => window.location.href="/"} block>
                        Cancelar
                    </Button>
                    <Button variant="primary" style={{float:"right", marginRight:"13%"}} onClick={() => this.handleProfileChange()} block>
                      {this.state.editMode ? "Guardar" : "Alterar"}
                    </Button>
                    <Toast show={this.state.showToast} onClose={() => this.setState({showToast:false})} delay={5000} autohide   style={{ position: 'fixed', top: '18%', right: '20px' }} bg={this.state.toastType}>
                          <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">Sistema</strong>
                            <small>Há 1 segundo atrás</small>
                          </Toast.Header>
                          <Toast.Body>{this.state.toastMessage}</Toast.Body>
                    </Toast>
                </div>
            </Container></>
        );
      }
      }
    
    export default ProfilePage;