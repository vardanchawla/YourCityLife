import React, { useState } from 'react';
import { FiBell, FiMenu, FiMoreHorizontal, FiSearch, FiUpload } from 'react-icons/fi';
import styles from './Navbar.module.css';

const Navbar = ({ setSidebar, setSearchTerm }) => {
    const [searchInput, setSearchInput] = useState('');

    const sidebarToggle = () => {
        setSidebar(prev => !prev);
    };

    const handleSearchChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        setSearchTerm(searchInput);
        console.log('Performing search for:', searchInput);
        // You can perform the search operation here
    };

    return (
        <nav className={styles.flexDiv}>
            <div className={`${styles["service-nav-left"]} ${styles["flex-div"]}`}>
                <FiMenu className={styles["service-menu-icon"]} onClick={sidebarToggle} />
                {/* <Link to='/'> <img src={logo} alt="" className="logo" /></Link>  */}
            </div>
            <div className={`${styles["service-nav-middle"]} ${styles["flex-div"]}`}>
                <form onSubmit={handleSearchSubmit} className={`${styles["service-search-box"]} ${styles["flex-div"]}`}>
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchInput}
                        onChange={handleSearchChange}
                    />
                    <button type="submit"><FiSearch /></button>
                </form>
            </div>
            <div className={`${styles["service-nav-right"]} ${styles["flex-div"]}`}>
                <FiUpload />
                <FiMoreHorizontal />
                <FiBell />
                {/* <img src={jack_img} alt="" className="user-icon" /> */}
            </div>
        </nav>
    );
};

export default Navbar;
