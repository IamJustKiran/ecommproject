import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homescreen from "./screens/Home/Homescreen";
import Productscreen from "./screens/Product/Productscreen";
import Cartscreen from "./screens/Cart/Cartscreen";
import LoginScreen from "./screens/Login/LoginScreen";
import RegisterScreen from "./screens/Register/Registerscreen";
import ProfileScreen from "./screens/Profile/Profilescreen";
import Shippingscreen from "./screens/Shipping/Shippingscreen";
import PaymentScreen from "./screens/Payment/Paymentscreen";
import PlaceOrderScreen from "./screens/PlaceOrder/Placeorderscreen";
import UserListScreen from "./screens/UserList/UserListScreen";
import OrderScreen from "./screens/Order/OrderScreen";
import UserEditScreen from "./screens/UserEdit/UserEditScreen";
import ProductListScreen from "./screens/ProductList/Productlistscreen";
import ProductEditScreen from "./screens/ProductEdit/Producteditscreen";
import OrderListScreen from "./screens/OrderList/Orderlistscreen";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [clientID, setclientID] = useState("");

  useEffect(() => {
    const getClientId = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal");
      setclientID(clientId);
    };
    if (!window.paypal) {
      getClientId();
    }
  }, []);
  return (
    <>
      {clientID && (
        <PayPalScriptProvider options={{ "client-id": clientID }}>
          <Header />
          <main className="py-3">
            <Container>
              <Routes>
                <Route
                  exact
                  path="/shipping"
                  element={<Shippingscreen />}
                ></Route>
                <Route
                  exact
                  path="/placeorder"
                  element={<PlaceOrderScreen />}
                ></Route>
                <Route
                  exact
                  path="/payment"
                  element={<PaymentScreen />}
                ></Route>
                <Route
                  exact
                  path="/order/:id"
                  element={<OrderScreen />}
                ></Route>
                <Route exact path="/login" element={<LoginScreen />}></Route>
                <Route
                  exact
                  path="/profile"
                  element={<ProfileScreen />}
                ></Route>
                <Route
                  exact
                  path="/register"
                  element={<RegisterScreen />}
                ></Route>
                <Route path="/product/:id" element={<Productscreen />}></Route>
                <Route
                  path="/admin/product/:id/edit"
                  element={<ProductEditScreen />}
                ></Route>
                <Route path="/cart/:id" element={<Cartscreen />}></Route>
                <Route path="/cart" element={<Cartscreen />}></Route>
                <Route
                  path="/admin/userlist"
                  element={<UserListScreen />}
                ></Route>
                <Route
                  path="/admin/user/:id/edit"
                  element={<UserEditScreen />}
                ></Route>
                <Route
                  path="/admin/productlist"
                  element={<ProductListScreen />}
                ></Route>
                <Route
                  path="/admin/orderlist"
                  element={<OrderListScreen />}
                ></Route>
                <Route path="/search/:keyword" element={<Homescreen />}></Route>
                <Route exact path="/" element={<Homescreen />}></Route>
              </Routes>
            </Container>
          </main>
          <Footer />
        </PayPalScriptProvider>
      )}
    </>
  );
};

export default App;
