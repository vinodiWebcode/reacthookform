import React from "react";
import { useForm } from "react-hook-form";
import "../App.css";
export default function Select() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) => console.log(data);

    return (
        <div className="container">
            <div className="formStyle row">
                <div className="col-md-6 col-lg-3">
                    <label>Gender</label>
                </div>
                <div className="col-md-6 col-lg-9">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-100">
                        <select {...register("gender")} className="w-100">
                            <option value="female">female</option>
                            <option value="male">male</option>
                            <option value="other">other</option>
                        </select>
                    </form>
                </div>
                <div className="col-md-6 col-lg-3">
                    <label>Race</label>
                </div>
                <div className="col-md-6 col-lg-9">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-100">
                        <select {...register("gender")} className="w-100">
                            <option value="female">female</option>
                            <option value="male">male</option>
                            <option value="other">other</option>
                        </select>
                    </form>
                </div>
                <div className="col-md-6 col-lg-3">
                    <label>Veteran status</label>
                </div>
                <div className="col-md-6 col-lg-9">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-100">
                        <select {...register("gender")} className="w-100">
                            <option value="female">female</option>
                            <option value="male">male</option>
                            <option value="other">other</option>
                        </select>
                    </form>
                </div>
            </div>
        </div>
    );
}