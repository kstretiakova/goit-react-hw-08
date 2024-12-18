import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";

import { addContactThunk } from "../../redux/contacts/operations";

const ContactForm = () => {
  const schema = Yup.object({
    name: Yup.string()
      .required("This field is required")
      .min(3, "add more")
      .max(50, "too much chars"),

    number: Yup.string("please add only numbers")
      .required("This field is required")
      .min(3, "add more")
      .max(50, "too much chars"),
  });

  const initialValues = {
    name: "",
    number: "",
    id: "",
  };

  const dispatch = useDispatch();

  const handleSubmit = (data, options) => {
    const newItem = {
      name: data.name,
      number: data.number,
    };
    dispatch(addContactThunk(newItem));
    options.resetForm();
  };
  return (
    <div className={s.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form className={s.wrapper}>
          <label className={s.label}>
            <span className={s.labelText}>Name</span>
            <Field name="name" className={s.field} />
            <ErrorMessage name="name" component="span" className={s.error} />
          </label>
          <label className={s.label}>
            <span className={s.labelText}>Number</span>
            <Field name="number" className={s.field} />
            <ErrorMessage name="number" component="span" className={s.error} />
          </label>
          <button type="submit" className={s.button}>
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;