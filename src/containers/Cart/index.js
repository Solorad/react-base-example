import React from "react";
import {Container} from "../../components";
import Helmet from "react-helmet";
import {connect} from "react-redux";
import ProductList from "./productList";

const Cart = () => {
  return (
    <div>
      <Helmet title="Cart"/>
      <Container>
        <ProductList />
        <div className="text-center">
          Some Test text
        </div>
      </Container>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(Cart);
