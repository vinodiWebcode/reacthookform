import React, { useState } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { BiInfoCircle } from "react-icons/bi";
import "../App.css";

interface Props {
  register: UseFormRegister<FieldValues>;
  errors: { [x: string]: any };
}

const Select: React.FC<Props> = ({ register, errors }): JSX.Element => {
  const [raceDescription, setRaceDescription] = useState(false);
  // const Select = ({register,}) => {
  const gender = ["Male", "Female", "Decline to say"];
  const race = [
    "Hispanic or Latino",
    "White (Not Hispanic or Latino)",
    "Black or African American (Not Hispanic or Latino)",

    "Native Hawaiian or Other Pacific Islander (Not Hispanic or Latino)",
    "Asian (Not Hispanic or Latino)",
    "American Indian or Alaska Native (Not Hispanic or Latino)",
    "Two or More Races (Not Hispanic or Latino)",
  ];
  const Vet = [
    "I am veteran",
    "I am not a veteran",
    "Decline to self identify",
  ];
  return (
    <div className="container addStyle">
      <div className="formStyle row">
        <div className="col-md-6 col-lg-4">
          <label>Gender</label>
        </div>
        <div className="col-md-6 col-lg-8">
          <div className="w-100">
            <select
              className="w-100"
              {...register("Gender", { required: true })}
            >
             <option value="">Select...</option>
              {gender.map((item) => (
                <option>{item}</option>
              ))}
            </select>
            {errors?.Gender && <p>Select Gender Value</p>}
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <label onClick={() => setRaceDescription(!raceDescription)}>
            Race <BiInfoCircle />
          </label>
        </div>
        <div className="col-md-6 col-lg-8">
          <div className="w-100">
            <select className="w-100" {...register("race", { required: true })}>
              <option value="">Select...</option>
              {race.map((item) => (
                <option>{item}</option>
              ))}
            </select>
            {errors?.race && <p>Select race Value</p>}
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <label>Veteran status</label>
        </div>
        <div className="col-md-6 col-lg-8">
          <div className="w-100">
            <select className="w-100" {...register("race", { required: true })}>
              <option value="">Select...</option>
              {Vet.map((item) => (
                <option>{item}</option>
              ))}
            </select>
            {errors?.Vet && <p>Select Vet Value</p>}

            {raceDescription ? (
              <div>
                <div className="infoStyle">
                  <div>Hispanic or Latino</div>
                  <p>
                    A person of Cuban, Mexican, Puerto Rican, South or Central
                    American, or other Spanish culture or origin regardless of
                    race.
                  </p>
                </div>
                <div className="infoStyle">
                  <div>White (Not Hispanic or Latino)</div>
                  <p>
                    A person having origins in any of the original peoples of
                    Europe, the Middle East, or North Africa.
                  </p>
                </div>
                <div className="infoStyle">
                  <div>Black or African American (Not Hispanic or Latino)</div>
                  <p>
                    A person having origins in any of the black racial groups of
                    Africa.
                  </p>
                </div>
                <div className="infoStyle">
                  <div>
                    Native Hawaiian or Other Pacific Islander (Not Hispanic or
                    Latino)
                  </div>
                  <p>
                    A person having origins in any of the peoples of Hawaii,
                    Guam, Samoa, or other Pacific Islands.
                  </p>
                </div>
                <div className="infoStyle">
                  <div>Asian (Not Hispanic or Latino)</div>
                  <p>
                    A person having origins in any of the original peoples of
                    the Far East, Southeast Asia, or the Indian Subcontinent,
                    including, for example, Cambodia, China, India, Japan,
                    Korea, Malaysia, Pakistan, the Philippine Islands, Thailand,
                    and Vietnam.
                  </p>
                </div>
                <div className="infoStyle">
                  <div>
                    American Indian or Alaska Native (Not Hispanic or Latino)
                  </div>
                  <p>
                    A person having origins in any of the original peoples of
                    North and South America (including Central America), and who
                    maintain tribal affiliation or community attachment.
                  </p>
                </div>
                <div className="infoStyle">
                  <div>Two or More Races (Not Hispanic or Latino)</div>
                  <p>
                    All persons who identify with more than one of the above
                    five races.
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Select;
