import React, { Component } from "react";
import ViveList from "./ViveList";
import Helmet from "react-helmet";

class ViveProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    fetch(
      "https://api.bestbuy.com/v1/products(name=vive*)?apiKey=A291L0cAmFNiHhNNr7OwROxg&format=json"
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
          <title>HTC Vive Products</title>
        </Helmet>
        <h1>HTC Vive Products</h1>
        <ViveList products={this.state.products} />
      </div>
    );
  }
}

export default ViveProducts;
