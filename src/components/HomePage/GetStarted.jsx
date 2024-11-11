import React from 'react';
import styles from './GetStarted.module.css';

const GetStarted = () => {
  const handleExploreMoreClick = () => {
    window.location.href = '/get-started';
  };
  return (
    <div className={styles['get-started']}>
      <div className={styles["g-container"]}>
        <div className={styles["inner-container"]}>
          <span className={styles['secondaryText1']}>Grow Faster Than You Think with YourCityLives</span>
          <span className={styles['primaryText']}>
          Plan with YourCityLives to meet your current demands today and your dreams tomorrow. We bring the methods and  technologies of large global companies to help local brands of all sizes scale.
          </span>
          <button onClick={handleExploreMoreClick} >Get Started with YourCityLives </button>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
