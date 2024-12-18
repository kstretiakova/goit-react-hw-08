import { Formik, Field, Form } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/filtersSlice";
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <Formik>
        <Form>
          <label>
            <span>Search</span>
            <Field
              name="search"
              onChange={(e) => {
                dispatch(changeFilter(e.target.value));
              }}
              className={styles.searchField}
            />
          </label>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBox;