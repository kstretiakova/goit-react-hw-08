import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

const RegistrationPage = () => {
  const isRegistered = useSelector(selectIsLoggedIn);

  if (isRegistered) {
    <Navigate to="/" />;
  }

  return <RegistrationForm />;
};

export default RegistrationPage;