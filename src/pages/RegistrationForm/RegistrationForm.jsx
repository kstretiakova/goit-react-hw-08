import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";
import styles from "./RegistrationForm.module.css";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

import YupPassword from "yup-password";
YupPassword(Yup);

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const schema = Yup.object({
    name: Yup.string()
      .required("this field is required")
      .min(3, "add more chars")
      .max(50, "too much chars"),

    email: Yup.string()
      .email("must be a valid email!")
      .required("this field is required"),
    password: Yup.string().password().required(),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values));
    options.resetForm();
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form className={styles.form}>
          <ErrorMessage name="name" component="span" className={styles.error} />
          <Field
            className={styles.field}
            name="name"
            placeholder="Enter name"
          />
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
          <button className={styles.button} type="submit">
            Register
          </button>
          <Link className={styles.link} to="/login">
            <p>I already have an account</p>
          </Link>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;