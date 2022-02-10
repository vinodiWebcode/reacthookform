import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
interface Props {
  Label: string;
  register: UseFormRegister<FieldValues>;
  errors: { [x: string]: any };
  h4: string;
}
const Prefer: React.FC<Props> = ({
  h4,
  Label,
  register,
  errors,
}): JSX.Element => {
  return (
    <div className="preferStyle">
      <h4 data-qa="cardName">{h4}</h4>
            <label className="text">{Label}</label>
            <div>
              <input
                type={`text`}
                placeholder="Type your response"
                {...register('PreferedPronoun')}
              />
            </div>
    </div>
  );
};

export default Prefer;
