import React, { useEffect } from "react";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/contacts/selectors";
import { Circles } from "react-loader-spinner";
import { fetchContactThunk } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/slice";

const ContactList = () => {
  const dispatch = useDispatch();
  
  const filteredData = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContactThunk());
  }, [dispatch]);

  return (
    <div className={s.wrapper}>
      

      <ul className={s.contactsWrapper}>
        {filteredData.map((item) => (
          <li className={s.li} key={item.id}>
            <Contact item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;