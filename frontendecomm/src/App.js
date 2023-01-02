import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homescreen from "./screens/Home/Homescreen";
import Productscreen from "./screens/Product/Productscreen";
import Cartscreen from "./screens/Cart/Cartscreen";
import LoginScreen from "./screens/Login/LoginScreen";
import RegisterScreen from "./screens/Register/Registerscreen";
import ProfileScreen from "./screens/Profile/Profilescreen";
import Shippingscreen from "./screens/Shipping/Shippingscreen";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route exact path="/" element={<Homescreen />}></Route>
            <Route exact path="/shipping" element={<Shippingscreen />}></Route>
            <Route exact path="/login" element={<LoginScreen />}></Route>
            <Route exact path="/profile" element={<ProfileScreen />}></Route>
            <Route exact path="/register" element={<RegisterScreen />}></Route>
            <Route path="/product/:id" element={<Productscreen />}></Route>
            <Route path="/cart/:id" element={<Cartscreen />}></Route>
            <Route path="/cart" element={<Cartscreen />}></Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
