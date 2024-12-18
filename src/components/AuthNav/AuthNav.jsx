import React from "react";
import { NavLink } from "react-router-dom";
import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink
            to="/login"
            className={styles.navLink}
            activeClassName={styles.activeLink}
          >
            Login
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/register"
            className={styles.navLink}
            activeClassName={styles.activeLink}
          >
            Register
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AuthNav;