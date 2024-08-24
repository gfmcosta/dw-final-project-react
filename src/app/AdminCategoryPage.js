import React, { Component } from "react";
import SubHeader from "./SubHeader";

class AdminCategoryPage extends Component {
  state = {
    Categorias: [],
  };

  async componentDidMount() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    let res = await fetch(
      `https://atsoc.somee.com/backend/API/Category`,
      requestOptions
    ).catch((error) => console.log("error", error));
    let result = await res.json();
    if (res.status === 200) {
      console.log(result);
      this.setState({ Categorias: result });
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
          <h1>Lista de Categorias</h1>
          <p>
            <a href="/admin/category/create">Criar Categoria</a>
          </p>
          <table class="table">
            <thead>
              <tr>
                <th>Descri&#xE7;&#xE3;o</th>
                <th></th>
              </tr>
            </thead>
            {this.state.Categorias.map((a) => (
              <tbody>
                <tr>
                  <td>{a.description}</td>
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

export default AdminCategoryPage;
