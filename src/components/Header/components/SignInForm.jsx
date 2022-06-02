import s from "../../layouts/AuthLayout/AuthLayout.module.css";
import React from "react";
import { useForm } from "react-hook-form";
import ErrorIcon from "../../../images/icons/error.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../../redux/usersReducer";

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const onSubmit = (data) => {
    dispatch(login(data));
    navigate("/profile");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={s.divInput}>
        <input
          className={s.input}
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Invalid email",
            pattern: {
              value:
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
              message: "Invalid email",
            },
          })}
        />
        <span className={s.focusInput} />
      </div>
      <div className={s.errorBox}>
        {errors?.email && (
          <>
            <img className={s.errorIcon} src={ErrorIcon} />
            <p>{errors?.email?.message || "Error!"}</p>
          </>
        )}
      </div>
      <div className={s.divInput}>
        <input
          className={s.inputPassword}
          type="password"
          placeholder="Password"
          {...register("password", {
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
        <span className={s.focusInput} />
      </div>
      <div className={s.errorBox}>
        {errors?.password && (
          <>
            <img className={s.errorIcon} src={ErrorIcon} />
            <p>{errors?.password?.message || "Error!"}</p>
          </>
        )}
      </div>
      <div className={s.containerButton}>
        <button type="submit" className={s.signButton}>
          Sign in
        </button>
      </div>
    </form>
  );
};

export default SignInForm;
