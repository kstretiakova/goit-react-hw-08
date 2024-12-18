import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>Welcome to Home Page</h1>
      <p className={styles.description}>This is the main page of our application. Enjoy your stay!</p>
    </div>
  );
};

export default Home;