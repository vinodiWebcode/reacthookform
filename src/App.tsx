import React from "react";
import "./App.css";
// import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../src/components/Header";
import Form from "../src/components/Form";
import Select from "../src/components/Select";
import Footer from "../src/components/Footer";

function App() {
  return (
    <>
      <Header />
      <Form />
      <Select/>
      <Footer />
    </>
  );
}

export default App;
