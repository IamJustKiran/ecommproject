import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingAddress } from "../../actions/cartActions";
import CheckoutSteps from "../../components/CheckoutSteps/CheckoutSteps";
import { useForm } from "react-hook-form";
import LoginHOC from "../../components/HOC/LoginHOC";
import FormContainer from "../../components/Container/FormContainer";

const ShippingScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const { handleSubmit, register, reset } = useForm({
    defaultValues: shippingAddress,
  });

  const navigate = useNavigate();

  useEffect(() => {
    reset(shippingAddress);
  }, [shippingAddress]);

  const submitHandler = (e) => {
    dispatch(
      saveShippingAddress({
        address: e?.address,
        city: e?.city,
        postalCode: e?.postalCode,
        country: e?.country,
      })
    );
    navigate("/payment");
  };

  return (
    <>
      <CheckoutSteps step1 step2 />

      <FormContainer>
        <h1>Shipping</h1>
        <Form onSubmit={handleSubmit(submitHandler)}>
          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter address"
              {...register("address")}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="city"
              placeholder="Enter city"
              {...register("city")}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="postalCode">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Postal Code"
              {...register("postalCode")}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter country"
              {...register("country")}
            ></Form.Control>
          </Form.Group>

          <Button style={{ marginTop: "15px" }} type="submit" variant="primary">
            Continue
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default LoginHOC(ShippingScreen);
