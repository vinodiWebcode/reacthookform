import React from "react";
import { Button } from "react-bootstrap";

const FormButton=()=> {
  return (
    <div className="btnStyle">
        <Button
          variant="primary"
          className="justify-content-center"
          size="lg"
          type="submit"
        >
          Submit application
        </Button>
    </div>
  );
}

export default FormButton;
