import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
interface Props {
  register: UseFormRegister<FieldValues>;
  errors: { [x: string]: any };
  h4: string;
}
const AddInfo: React.FC<Props> = ({ h4, register, errors }): JSX.Element => {
  return (
    <div>
      <label>
        <h4>{h4}</h4>
      </label>
      <div className="application-additional">
        <textarea
          placeholder="Add a cover letter or anything else you want to share."
          // {...register("h4", { required: true })}
          {...register('TextArea',{minLength:30})}
          // {...register('h4',{required: true, minLength:30})}
          // {...(errors?.TextArea?.type === "required" && <p>Requiored Field</p>)}
          {...errors?.h4?.type==='minLength' && "Min Length should be 30 characters"}
        ></textarea>
      </div>
    </div>
  );
};

export default AddInfo;
