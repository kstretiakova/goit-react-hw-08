import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
import styles from './UserMenu.module.css'

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <h3 className={styles.greeting}>Welcome, {user.name}</h3>
      <button className={styles.button}
        onClick={() => {
          dispatch(logoutThunk());
        }}
      >
        Exit
      </button>
    </div>
  );
};

export default UserMenu;