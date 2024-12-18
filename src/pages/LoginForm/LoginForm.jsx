import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import { selectError } from "../../redux/auth/selectors";
import * as Yup from "yup";

const LoginForm = () => {
  const dispatch = useDispatch();
  const schema = Yup.object({
    email: Yup.string()
      .email("must be a valid email!")
      .required("this field is required"),
    password: Yup.string()
      .password()
      .minLowercase(0)
      .min(0)
      .minWords(0)
      .minUppercase(0)
      .minSymbols(0)
      .minNumbers(0)
      .required(),
  });
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values));
    console.log(values);
    options.resetForm();
  };
  const error = useSelector(selectError);

  return (
    <div className={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <ErrorMessage
            name="email"
            component="span"
            className={styles.error}
          />
          <Field
            className={styles.field}
            name="email"
            placeholder="Enter email"
          />
          <ErrorMessage
            name="password"
            component="span"
            className={styles.error}
          />
          <Field
            className={styles.field}
            name="password"
            type="password"
            placeholder="Enter password"
          />
          {error && (
            <p className={styles.globalError}>
              {"Wrong username or password:("}
            </p>
          )}
          <button className={styles.button} type="submit">
            Login
          </button>

          <Link className={styles.link} to="/register">
            <p>Register</p>
          </Link>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;