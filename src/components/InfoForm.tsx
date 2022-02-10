import React from "react";
import "../App.css";

const InfoForm = () => {
  return (
    <div className="" data-qa="eeo-section">
      <hr />
      <h4>
        U.S. Equal Employment Opportunity information &nbsp;{" "}
        <span className="eeo-light-text">
          (Completion is voluntary and will not subject you to adverse
          treatment)
        </span>
      </h4>
      <p>
        Our company values diversity. To ensure that we comply with reporting
        requirements and to learn more about how we can increase diversity in
        our candidate pool, we invite you to voluntarily provide demographic
        information in a confidential survey at the end of this application.
        Providing this information is optional. It will not be accessible or
        used in the hiring process, and has no effect on your opportunity for
        employment.
      </p>
    </div>
  );
};

export default InfoForm;
