import React, { Component } from "react";
import { Form } from "react-bootstrap";
import SubHeader from "./SubHeader";

class AdminProductCreatePage extends Component {
  state = {
    epoca: [],
    name: "",
    description: "",
    quantity: 0,
    priceAux: 0,
    imagePath: "",
    seasonFK: 1,
  };

  async componentDidMount() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    let res = await fetch(
      `http://atsoc.somee.com/backend/API/productseason`,
      requestOptions
    ).catch((error) => console.log("error", error));
    let result = await res.json();
    if (res.status == 200) {
      this.setState({ epoca: result });
    }
  }

  handleImagePath = (event) => {
    const file = event.target.files[0];
    // Convert the image file to data URL
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageDataUrl = e.target.result;
      // Update the state with the image data URL
      this.setState({ imagePath: imageDataUrl });
    };

    reader.readAsDataURL(file);
  };

  handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    try {
      const data = {
        name: this.state.name,
        description: this.state.description,
        quantity: this.state.quantity,
        priceAux: this.state.priceAux,
        imagePath: this.state.imagePath,
        seasonFK: this.state.seasonFK,
      };
      const response = await fetch(
        "http://atsoc.somee.com/backend/API/product/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      console.log(response);
      if (response.status === 200) {
        console.log("entrou");
        window.location.href = "/admin/product";
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

          <h4>Product</h4>
          <hr />
          <div class="row">
            <div class="col-md-4">
              <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                  <label class="control-label" for="name">
                    Nome
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    data-val="true"
                    data-val-regex="Tem de escrever um Nome válido"
                    data-val-regex-pattern="^[a-zçãõáéíóúA-ZÇÃÕÁÉÍÓÚ -]+$"
                    data-val-required="O Nome é de preenchimento obrigatório"
                    id="name"
                    name="name"
                    value={this.state.name}
                    onChange={(event) =>
                      this.setState({ name: event.target.value })
                    }
                  />
                  <span
                    class="text-danger field-validation-valid"
                    data-valmsg-for="name"
                    data-valmsg-replace="true"
                  ></span>
                </div>
                <div class="form-group">
                  <label class="control-label" for="description">
                    Descrição
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    data-val="true"
                    data-val-regex="Tem de escrever uma Descrição válida"
                    data-val-regex-pattern="^[a-zçãõáéíóúA-ZÇÃÕÁÉÍÓÚ -]+$"
                    data-val-required="A Descrição é de preenchimento obrigatório"
                    id="description"
                    name="description"
                    value={this.state.description}
                    onChange={(event) =>
                      this.setState({ description: event.target.value })
                    }
                  />
                  <span
                    class="text-danger field-validation-valid"
                    data-valmsg-for="description"
                    data-valmsg-replace="true"
                  ></span>
                </div>
                <div class="form-group">
                  <label class="control-label" for="quantity">
                    Quantidade
                  </label>
                  <input
                    class="form-control"
                    type="number"
                    data-val="true"
                    data-val-range="A Quantidade mínima é 0."
                    data-val-range-max="2147483647"
                    data-val-range-min="0"
                    data-val-required="A Quantidade é de preenchimento obrigatório"
                    id="quantity"
                    name="quantity"
                    value={this.state.quantity}
                    onChange={(event) =>
                      this.setState({ quantity: event.target.value })
                    }
                  />
                  <span
                    class="text-danger field-validation-valid"
                    data-valmsg-for="quantity"
                    data-valmsg-replace="true"
                  ></span>
                </div>
                <div class="form-group">
                  <label class="control-label" for="priceAux">
                    Preço
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    data-val="true"
                    data-val-regex="No Preçoo só pode usar algarismos, e se desejar, duas casas decimais no final."
                    data-val-regex-pattern="[0-9]+[.,]?[0-9]{1,2}"
                    data-val-required="O Preço é de preenchimento obrigatório"
                    id="priceAux"
                    name="priceAux"
                    value={this.state.priceAux}
                    onChange={(event) =>
                      this.setState({ priceAux: event.target.value })
                    }
                  />
                  <span
                    class="text-danger field-validation-valid"
                    data-valmsg-for="priceAux"
                    data-valmsg-replace="true"
                  ></span>
                </div>
                <Form.Group controlId="formImage">
                  <Form.Label>Imagem</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    placeholder="Insira a sua imagem"
                    onChange={this.handleImagePath}
                  />
                </Form.Group>
                <div class="form-group">
                  <label class="control-label" for="seasonFK">
                    seasonFK
                  </label>
                  <select
                    class="form-control"
                    data-val="true"
                    data-val-required="The seasonFK field is required."
                    id="seasonFK"
                    name="seasonFK"
                    value={this.state.seasonFK}
                    onChange={(event) =>
                      this.setState({ seasonFK: event.target.value })
                    }
                  >
                    {this.state.epoca.map((seas) => (
                      <option value={seas.id}>{seas.description}</option>
                    ))}
                  </select>
                </div>
                <br />
                <div class="form-group">
                  <input type="submit" value="Create" class="btn btn-primary" />
                </div>
                <input
                  name="__RequestVerificationToken"
                  type="hidden"
                  value="CfDJ8O56x1MYUghBktVmBHiL2KDBfU40T_E-2lckD7QkaBQxQ9FWglVUA8t4fDPsD-8YbiolPcgw_CH5zGx2mlgDvWelx8A9pnRIiGaOBcfYksjY5WFNYSwCg71opNOAXqfhEzoZL3_7Yxi_5GGH8BSvvLY"
                />
              </form>
            </div>
          </div>
          <br />
          <div>
            <a href="/admin/product">Back to List</a>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminProductCreatePage;
