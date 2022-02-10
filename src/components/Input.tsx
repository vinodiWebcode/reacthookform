import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
  Label: string;
  register: UseFormRegister<FieldValues>;
  errors: { [x: string]: any };
}

export const Input: React.FC<Props> = ({
  Label,
  register,
  errors,
}): JSX.Element => {
  const toPascalCase = (sentence: string) => sentence
      .split(" ")
      .map((word) => word[0].toUpperCase().concat(word.slice(1)))
      .join("");
  
  const getValidation = ()=>{
    var obj: {[key: string]: any} = {};
    switch(Label){
        case 'Full Name':
            obj.required = true;
            obj.minLength = 10;
            obj.pattern = /[a-zA-Z][a-zA-Z ]+/
            return obj;
        case 'Email':
            obj.required = true;
            obj.pattern=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            return obj;
        case 'Phone':
            obj.pattern=/(\+[\d]{1,5}|0)[7-9]\d{9}$/
            obj.required=true
            return obj;
        case 'LinkedIn URL' :
            obj.pattern=/((https?:\/\/)?((www|\w\w)\.)?linkedin\.com\/)((([\w]{2,3})?)|([^\\/]+\/(([\w|\d-&#?=])+\/?){1,}))$/
            obj.required=true
            return obj;
            
        default : return obj;
    }
    return obj
}
  
  return (
    <div className="formStyle">
      <div className="col-md-6 col-lg-4">
        <label>{Label}</label>
      </div>
      <div className="col-md-6 col-lg-8">
        <input  {...register(toPascalCase(Label),getValidation())} />
        {errors?errors[toPascalCase(Label)]?.type ===' required' && <p>REQUIRED FIELD</p>:null}
        {errors?errors[toPascalCase(Label)]?.type==='pattern' && <p>Invalid VALUE</p>:null}
        {errors?errors[toPascalCase(Label)]?.type==='minLength' && <p>Min Length error</p>:null}
      </div>
    </div>
  );
};
