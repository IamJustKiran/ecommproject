import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../../components/Container/FormContainer";
import CheckoutSteps from "../../components/CheckoutSteps/CheckoutSteps";
import { useForm } from "react-hook-form";
import { savePaymentMethod } from "../../actions/cartActions";
import LoginHOC from "../../components/HOC/LoginHOC";
import { useNavigate } from "react-router-dom";

const PaymentScreen = () => {
  const { handleSubmit, register } = useForm();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const navigate = useNavigate();

  if (!shippingAddress) {
    navigate("/shipping");
  }

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    dispatch(savePaymentMethod(e?.paymentMethod));
    navigate("/placeorder");
  };

  return (
    <>
      <CheckoutSteps step1 step2 step3 />
      <FormContainer>
        <h1>Payment Method</h1>
        <Form onSubmit={handleSubmit(submitHandler)}>
          <Form.Group>
            <Form.Label as="legend">Select Method</Form.Label>
            <Col>
              <Form.Check
                type="radio"
                label="PayPal or Credit Card"
                id="PayPal"
                name="paymentMethod"
                value="PayPal"
                checked
                {...register("paymentMethod")}
              ></Form.Check>
              {/* <Form.Check
              type='radio'
              label='Stripe'
              id='Stripe'
              name='paymentMethod'
              value='Stripe'
              {...register("paymentMethod")}
            ></Form.Check> */}
            </Col>
          </Form.Group>

          <Button style={{ marginTop: "15px" }} type="submit" variant="primary">
            Continue
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default LoginHOC(PaymentScreen);
