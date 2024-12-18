import React from "react";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import style from "./ContactsPage.module.css";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/contacts/selectors";
import { Circles } from "react-loader-spinner";

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <div className={style.contactsWrapper}>
      {isLoading && (
        <div className={style.loaderWrapper}> <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      /></div>
       
      )}
      <ContactForm />
      <SearchBox />
      
      <ContactList />
    </div>
  );
};

export default ContactsPage;