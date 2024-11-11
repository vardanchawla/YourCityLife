import React from 'react';
import styles from './CityCard.module.css';

// Importing images statically
import BangalorePNG from '../../CityCard_img/Bangalore.png';
import ChennaiPNG from '../../CityCard_img/Chennai.png';
import CoimbatorePNG from '../../CityCard_img/Coimbatore.png';
import DelhiPNG from '../../CityCard_img/Delhi.png';
import GurugramPNG from '../../CityCard_img/Gurugram.png';
import HyderabadPNG from '../../CityCard_img/Hyderabad.png';
import MumbaiPNG from '../../CityCard_img/Mumbai.png';
import NoidaPNG from '../../CityCard_img/Noida.png';
import PunePNG from '../../CityCard_img/Pune.png';
import BangaloreSVG from '../../CityCard_img/bangalore.svg';
import ChennaiSVG from '../../CityCard_img/chennai.svg';
import CoimbatoreSVG from '../../CityCard_img/coimbatore.svg';
import DelhiSVG from '../../CityCard_img/delhi.svg';
import GurugramSVG from '../../CityCard_img/gurugram.svg';
import HyderabadSVG from '../../CityCard_img/hyderabad.svg';
import MumbaiSVG from '../../CityCard_img/mumbai.svg';
import NoidaSVG from '../../CityCard_img/noida.svg';
import PuneSVG from '../../CityCard_img/pune.svg';

const CityCard = () => {
  const cities = [
    { name: 'bangalore', hoverImage: BangalorePNG, svg: BangaloreSVG },
    { name: 'chennai', hoverImage: ChennaiPNG, svg: ChennaiSVG },
    { name: 'coimbatore', hoverImage: CoimbatorePNG, svg: CoimbatoreSVG },
    { name: 'delhi', hoverImage: DelhiPNG, svg: DelhiSVG },
    { name: 'gurugram', hoverImage: GurugramPNG, svg: GurugramSVG },
    { name: 'hyderabad', hoverImage: HyderabadPNG, svg: HyderabadSVG },
    { name: 'mumbai', hoverImage: MumbaiPNG, svg: MumbaiSVG },
    { name: 'noida', hoverImage: NoidaPNG, svg: NoidaSVG },
    { name: 'pune', hoverImage: PunePNG, svg: PuneSVG },
  ];

  return (
    <div className={`${styles['citycontainer']} pt-16 my-16 flex justify-center flex-wrap gap-4`}>
      {cities.map((city, index) => (
        <a 
          href="/about" 
          key={index} 
          className={`${styles['city-card']} w-32 flex flex-col justify-center items-center bg-gray-100 border border-gray-100 rounded-lg relative p-5 overflow-hidden transform transition-transform duration-400`}
          style={{ '--hover-image': `url(${city.hoverImage})` }}
        >
          <img 
            src={city.svg} 
            alt={city.name} 
            className='object-cover w-18 h-14 cursor-pointer m-0'
          />
          <div className='bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text font-semibold text-lg pt-8 text-center leading-6'>
            {city.name.charAt(0).toUpperCase() + city.name.slice(1).replace('_', ' ')}
          </div>
        </a>
      ))}
    </div>
  );
}

export default CityCard;
