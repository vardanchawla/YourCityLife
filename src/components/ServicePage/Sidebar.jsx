import React from 'react';
import { FaBuilding, FaBus, FaHome, FaHospital, FaTshirt, FaUtensils } from 'react-icons/fa';
import styles from './Sidebar.module.css';

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`${styles.serviceSidebar} ${sidebar ? "" : styles.serviceSmallSidebar}`}>
      <div className={styles.serviceShortcutLinks}>
        <div onClick={() => { setCategory('home') }} className={`${styles.serviceSideLink} ${category === 'home' ? styles.serviceSideLinkActive : ""}`}>
          <FaHome /><p>Home</p>
        </div>
        <div onClick={() => { setCategory('pgFlats') }} className={`${styles.serviceSideLink} ${category === 'pgFlats' ? styles.serviceSideLinkActive : ""}`}>
          <FaBuilding /><p>Pg/Flats</p>
        </div>
        <div onClick={() => { setCategory('healthcare') }} className={`${styles.serviceSideLink} ${category === 'healthcare' ? styles.serviceSideLinkActive : ""}`}>
          <FaHospital /><p>HealthCare</p>
        </div>
        <div onClick={() => { setCategory('transport') }} className={`${styles.serviceSideLink} ${category === 'transport' ? styles.serviceSideLinkActive : ""}`}>
          <FaBus /><p>Transport</p>
        </div>
        <div onClick={() => { setCategory('laundry') }} className={`${styles.serviceSideLink} ${category === 'laundry' ? styles.serviceSideLinkActive : ""}`}>
          <FaTshirt /><p>Laundry</p>
        </div>
        <div onClick={() => { setCategory('tiffinServices') }} className={`${styles.serviceSideLink} ${category === 'tiffinServices' ? styles.serviceSideLinkActive : ""}`}>
          <FaUtensils /><p>Tiffin Services</p>
        </div>
        {/* Add more category items as needed */}
      </div>
      <hr />
      {/* Add more sidebar content as needed */}
    </div>
  );
};

export default Sidebar;
