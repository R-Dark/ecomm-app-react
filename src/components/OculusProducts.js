import React, { Component } from "react";
import ProductList from "./ProductList";
import Helmet from "react-helmet";

class OculusProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    fetch(
      "https://api.bestbuy.com/v1/products(name=oculus*)?apiKey=A291L0cAmFNiHhNNr7OwROxg&format=json"
    )
      .then(r => r.json())
      .then(json => {
        this.setState({
          products: json.products
        });
      });
  }
  render() {
    return (
      <div className="container">
        <Helmet>
          <title>Oculus Rift Products</title>
        </Helmet>
        <h1>Oculus Rift Products</h1>
        <ProductList products={this.state.products} />
      </div>
    );
  }
}

export default OculusProducts;
