import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../../products";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../../components/Rating";

const Productscreen = () => {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              ></Rating>
            </ListGroupItem>
            <ListGroupItem>Price: ${product.price}</ListGroupItem>
            <ListGroupItem>Description: {product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroupItem>
              <Row>
                <Col>Price:</Col>
                <Col>
                  <strong> ${product.price} </strong>
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col>Status</Col>
                <Col>
                  <strong>
                    {" "}
                    {product.countInStock > 0
                      ? "In Stock"
                      : "Out Of Stock"}{" "}
                  </strong>
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem className="d-grid gap-2">
              <Button type="button" disabled={product.countInStock === 0}>
                ADD TO CART
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default Productscreen;
