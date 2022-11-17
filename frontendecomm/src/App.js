import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homescreen from "./screens/Home/Homescreen";
import Productscreen from "./screens/Product/Productscreen";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route exact path="/" element={<Homescreen />}></Route>
            <Route path="/product/:id" element={<Productscreen />}></Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;