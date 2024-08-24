import React, { Component } from "react";
import SubHeader from "./SubHeader";

class AdminPersonPage extends Component {
  state = {
    Pessoas: [],
  };

  async componentDidMount() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    let res = await fetch(
      `http://atsoc.somee.com/backend/API/Person`,
      requestOptions
    ).catch((error) => console.log("error", error));
    let result = await res.json();
    if (res.status === 200) {
      console.log(result);
      this.setState({ Pessoas: result });
    }
  }

  render() {
    return (
      <div>
        <SubHeader />
        <div
          style={{
            marginTop: "200px",
            width: "70%",
            left: "50%",
            transform: "translate(-50%)",
            position: "absolute",
            textAlign: "left",
          }}
        >
          <h1>Lista de Pessoas</h1>
          <p></p>
          <table class="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Telemóvel</th>
                <th>Morada</th>
                <th>Código Postal</th>
                <th>Data de Nascimento</th>
                <th>Sexo</th>
                <th>Imagem</th>
                <th>UtilizadorID</th>
                <th></th>
              </tr>
            </thead>
            {this.state.Pessoas.map((a) => (
              <tbody>
                <tr>
                  <td>{a.name}</td>
                  <td>{a.phoneNumber}</td>
                  <td>{a.address}</td>
                  <td>{a.postalCode}</td>
                  <td>{a.dataNasc}</td>
                  <td>{a.gender}</td>
                  <td>{a.imagePath}</td>
                  <td>{a.userId}</td>
                  <td style={{ textAlign: "right" }}>
                    <a href="/Category/Edit/1">Edit</a> |
                    <a href="/Category/Details/1">Details</a> |
                    <a href="/Category/Delete/1">Delete</a>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    );
  }
}

export default AdminPersonPage;
