import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../../products";
import Product from "../../components/Product";

const Homescreen = () => {
  return (
    <>
      <h1>Latest products</h1>
      <Row>
        {products.map((product, id) => {
          return (
            <Col sm={12} md={6} lg={4} xl={3} key={id}>
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Homescreen;
