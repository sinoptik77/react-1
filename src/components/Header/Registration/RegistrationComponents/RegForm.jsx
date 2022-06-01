import s from "../Registration.module.css";
import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

const RegForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={s.divInput}>
        <input
          className={s.input}
          type="email"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <span className={s.focusInput}></span>
      </div>
      <div className={s.divInput}>
        <input
          className={s.inputPassword}
          type="password"
          placeholder="Password"
          {...register("Password", {
            required: "required field!",
            minLength: {
              value: 6,
              message: "less than 6 characters",
            },
            maxLength: {
              value: 12,
              message: "more than 12 characters",
            },
          })}
        />
        <span className={s.focusInput}></span>
      </div>
      <div style={{ height: 30 }}>
        {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
      </div>
      <div className={s.containerButton}>
        <button type="submit" className={s.signButton}>
          Sign in
        </button>
      </div>
    </form>
  );
};

export default RegForm;
