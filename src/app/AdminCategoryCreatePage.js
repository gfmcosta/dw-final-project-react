import React, { Component } from "react";
import SubHeader from "./SubHeader";

class AdminCategoryCreatePage extends Component {
  state = {
    description: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    const desc = this.state.description;

    try {
      const response = await fetch(
        "http://atsoc.somee.com/backend/API/category/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ description: desc }),
        }
      );
      console.log(response);
      if (response.status === 200) {
        console.log("entrou");
        window.location.href = "/admin/category";
      } else {
        console.log("Error:", response.status);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

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
          <h1>Create</h1>
          <h4>Category</h4>
          <hr />
          <div className="row">
            <div className="col-md-4">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label className="control-label" htmlFor="description">
                    Descrição
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    data-val="true"
                    data-val-length="A Descrição só pode ter apenas 50 caracteres"
                    data-val-length-max="50"
                    data-val-regex="Tem de escrever uma Descrição válida"
                    data-val-regex-pattern="^[a-zçãõáéíóúA-ZÇÃÕÁÉÍÓÚ -]+$"
                    data-val-required="A Descrição é de preenchimento obrigatório"
                    id="description"
                    maxLength="50"
                    name="description"
                    value={this.state.description}
                    onChange={(event) =>
                      this.setState({ description: event.target.value })
                    }
                  />
                  <span
                    className="text-danger field-validation-valid"
                    data-valmsg-for="description"
                    data-valmsg-replace="true"
                  ></span>
                </div>
                <br />
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
          <br />
          <div>
            <a href="/admin/category">Back to List</a>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminCategoryCreatePage;
