import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../App.css";

// type FormData = {
//     firstName: string;
//     file: any;
//     name: string;
//     email: string;
//     phone: any;
//     company: string;
//     linkedin: string;
//     twitter: string;
//     gitHub: string;
//     portfolio: string;
//     website: string;
//     addtext: string;
//     response: string;
//     minLength: any;
//   };

export default function Form() {
  const [state, setState] = useState({
    file: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    linkedin: "",
    twitter: "",
    gitHub: "",
    portfolio: "",
    website: "",
    addtext: "",
    response: "",
  });

  const handleInputChange = (event:any) => {
    setState((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const {
      file,
      name,
      email,
      phone,
      company,
      linkedin,
      twitter,
      gitHub,
      portfolio,
      website,
      addtext,
      response,
    } = state;
    if (
      file &&
      name &&
      email &&
      phone &&
      company &&
      linkedin &&
      twitter &&
      gitHub &&
      portfolio &&
      website &&
      addtext &&
      response
    ) {
      const res = await fetch(
        "https://reactform-32140-default-rtdb.firebaseio.com/reactformdata.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            file,
            name,
            email,
            phone,
            company,
            linkedin,
            twitter,
            gitHub,
            portfolio,
            website,
            addtext,
            response,
          }),
        }
      );
      if (res) {
        setState({
          file: "",
          name: "",
          email: "",
          phone: "",
          company: "",
          linkedin: "",
          twitter: "",
          gitHub: "",
          portfolio: "",
          website: "",
          addtext: "",
          response: "",
        });
        alert("Data Store Successfully");
      }
    } else {
      alert("Please fill all the field");
    }
    console.log(state);
  };

  return (
    <div className="mainContent">
      <div className="content-section">
        <div className="container">
          <div className="postHeader">
            <h2>Full-Stack Engineer</h2>
            <div className="categories">
              <div className="catLabel">Remote optional /</div>
              <div className="catLabel">Product – Engineering /</div>
              <div className="catLabel">Full-time</div>
            </div>
          </div>
        </div>
      </div>
      <div className="formSection">
        <div className="container">
          <form onSubmit={handleSubmit} method="POST">
            <div className="formTitle">
              <h4>Submit your application</h4>
            </div>
            <div className="formStyle">
              <label>Resume/CV </label>
              <input
                type="file"
                name="file"
                value={state.file}
                required
                onChange={handleInputChange}
              />
            </div>

            <div className="formStyle">
              <label>Full name</label>
              <input
                type="text"
                name="name"
                required
                autoComplete="off"
                value={state.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="formStyle">
              <label>Email</label>
              <input
                type="text"
                name="email"
                required
                value={state.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="formStyle">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                required
                value={state.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className="formStyle">
              <label>Current company </label>
              <input
                type="text"
                name="company"
                required
                value={state.company}
                onChange={handleInputChange}
              />
            </div>

            <div className="linkStyle">
              <h4>Links</h4>
              <div className="formStyle">
                <label>LinkedIn URL </label>
                <input
                  type="text"
                  name="linkedin"
                  required
                  value={state.linkedin}
                  onChange={handleInputChange}
                />
              </div>

              <div className="formStyle">
                <label>Twitter URL </label>
                <input
                  type="text"
                  name="twitter"
                  required
                  value={state.twitter}
                  onChange={handleInputChange}
                />
              </div>

              <div className="formStyle">
                <label>GitHub URL </label>
                <input
                  type="text"
                  name="gitHub"
                  required
                  value={state.gitHub}
                  onChange={handleInputChange}
                />
              </div>

              <div className="formStyle">
                <label>Portfolio URL </label>
                <input
                  type="text"
                  name="portfolio"
                  required
                  value={state.portfolio}
                  onChange={handleInputChange}
                />
              </div>

              <div className="formStyle">
                <label>Other website </label>
                <input
                  type="text"
                  name="website"
                  required
                  value={state.website}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <h4 data-qa="cardName">Preferred pronouns</h4>
            <input type="hidden" value="" name="" />
            <ul>
              <li className="customQuestion">
                <label>
                  <div className="">
                    <div className="text">
                      If you'd like, please share your pronouns with us.
                    </div>
                  </div>
                  <div className="">
                    <input
                      className=""
                      type="text"
                      placeholder="Type your response"
                      name="response"
                      required
                      value={state.response}
                      onChange={handleInputChange}
                    />
                  </div>
                </label>
              </li>
            </ul>
            <label>
              <h4>Additional information</h4>
            </label>
            <div className="application-additional">
              <textarea
                placeholder="Add a cover letter or anything else you want to share."
                value={state.addtext}
                onChange={handleInputChange}
                name="addtext"
              ></textarea>
            </div>

            <div className="btnStyle">
              <div className="">
                <Button
                  variant="primary"
                  className="justify-content-center"
                  size="lg"
                  type="submit"
                >
                  Submit application
                </Button>
              </div>
            </div>

            {/* info swction */}

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
                Our company values diversity. To ensure that we comply with
                reporting requirements and to learn more about how we can
                increase diversity in our candidate pool, we invite you to
                voluntarily provide demographic information in a confidential
                survey at the end of this application. Providing this
                information is optional. It will not be accessible or used in
                the hiring process, and has no effect on your opportunity for
                employment.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
