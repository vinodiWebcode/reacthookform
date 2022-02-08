import React from "react";
import "./App.css";
// import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../src/components/Header";
import Form from "../src/components/Form";
import Footer from "../src/components/Footer";

function App() {
  return (
    <>
      <Header />
      <Form />
      <Footer />
    </>
  );
}

export default App;
