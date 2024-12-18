import React from "react";
import { useDispatch } from "react-redux";
import { deleteContactThunk } from "../../redux/contacts/operations";
import styles from './Contact.module.css';

const Contact = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactInfo}>
        <p className={styles.contactName}>{item.name}</p>
        <p className={styles.contactNumber}>{item.number}</p>
      </div>
      <button
        type="button"
        className={styles.deleteButton}
        onClick={() => {
          dispatch(deleteContactThunk(item.id));
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;