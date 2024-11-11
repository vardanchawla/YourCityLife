import React, { useState } from "react";
import Feed from "./Feed.jsx";
import styles from './ServiceHome.module.css';
import Sidebar from "./Sidebar.jsx";

const ServiceHome = ({ sidebar }) => {
  const [category, setCategory] = useState('home');

  return (
    <div className={styles.serviceHomecontainer}>
      <Sidebar setCategory={setCategory} sidebar={sidebar} category={category} />
      <div className={`${styles.serviceContainer} ${sidebar ? "" : styles.serviceLargeContainer}`}>
        <Feed category={category} />
      </div>
    </div>
  );
};

export default ServiceHome;
