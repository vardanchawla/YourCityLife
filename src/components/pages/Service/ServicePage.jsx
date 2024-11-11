import { default as React, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from "../../ServicePage/Navbar.jsx";
import Home from "../../ServicePage/ServiceHome.jsx";

const ServicePage = () => {
    const [sidebar, setSidebar] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
  
    return (
      <div>
        <Navbar setSidebar={setSidebar} setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path="/" element={<Home sidebar={sidebar} searchTerm={searchTerm} />} />
        </Routes>
      </div>
    );
  };

export default ServicePage
