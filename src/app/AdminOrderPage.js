import React, { Component } from "react";
import SubHeader from "./SubHeader";

class AdminOrderPage extends Component {
  state = {
    Encomenda: [],
  };

  async componentDidMount() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    let res = await fetch(
      `https://atsoc.somee.com/backend/API/Order`,
      requestOptions
    ).catch((error) => console.log("error", error));
    let result = await res.json();
    console.log(result);
    if (res.status === 200) {
      this.setState({ Encomenda: result });
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
          <h1>Lista de Pedidos</h1>
          <p></p>
          <table class="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Preço</th>
                <th>IVA</th>
                <th>Utilizador</th>
                <th></th>
              </tr>
            </thead>
            {this.state.Encomenda.map((a) => (
              <tbody>
                <tr>
                  <td>{a.id}</td>
                  <td>{a.price}</td>
                  <td>{a.IVA}</td>
                  <td>{a.personFK}</td>
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

export default AdminOrderPage;
