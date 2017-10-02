import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductList extends Component {
  render() {
    return (
      <div className="ProductList">
        {this.props.products.map(x => {
          return (
            <Link to={`/oculus/${x.productId}`} key={x.productId}>
              <div className="product">
                <h5>{x.name}</h5>
                <img src={x.thumbnailImage} />
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default ProductList;
