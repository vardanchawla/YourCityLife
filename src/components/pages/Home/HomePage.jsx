import React from 'react';
import About from '../../HomePage/About';
import CityCard from '../../HomePage/CityCard';
import Consultancy from '../../HomePage/Consultancy';
import GetStarted from '../../HomePage/GetStarted';
import Home from '../../HomePage/Home';


const HomePage = () => {
  return (
    <div>
       <Home />
      <CityCard />
      <About />
      <GetStarted />
      <Consultancy />
    </div>
  )
}

export default HomePage
