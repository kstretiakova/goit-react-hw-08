import React from "react";
import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import LoginForm from "../LoginForm/LoginForm";

const LoginPage = () => {
  const isLoggenIn = useSelector(selectIsLoggedIn);

  if (isLoggenIn) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;