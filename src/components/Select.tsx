import React from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";
import "../App.css";

interface Props {
  register: UseFormRegister<FieldValues>;
  errors: { [x: string]: any };
}

const Select: React.FC<Props> = ({
  register,
  errors,
}): JSX.Element => {
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
            <select className="w-100"  {...register('Gender',{required:true})}>
              <option value="">Male</option>
              {gender.map((item) => (
                <option>{item}</option>
              ))}
            </select>
            {errors?.Gender && <p>Select Gender Value</p>}
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <label>Race</label>
        </div>
        <div className="col-md-6 col-lg-8">
          <div className="w-100">
            <select className="w-100" {...register('race',{required:true})}>
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
            <select className="w-100"  {...register('race',{required:true})}>
              <option value="">Select...</option>
              {Vet.map((item) => (
                <option>{item}</option>
              ))}
            </select>
            {errors?.Vet && <p>Select Vet Value</p>}

          </div>
        </div>
      </div>
    </div>
  );
}
export default Select;

