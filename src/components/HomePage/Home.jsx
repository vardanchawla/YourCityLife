import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import { HiLocationMarker } from 'react-icons/hi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import hero1 from '../../assets/hero-1.jpg';
import hero2 from '../../assets/hero-2.jpg';
import hero3 from '../../assets/hero-3.jpg';
import hero4 from '../../assets/hero-4.jpg';
import hero5 from '../../assets/hero-5.jpg';
import hero6 from '../../assets/hero-6.jpg';
import heroBackground from '../../assets/hero-backimg.svg';
import styles from './Home.module.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section
      className="relative flex justify-center items-center w-full min-h-screen box-border bg-cover bg-no-repeat bg-center py-24 text-white"
      style={{
        backgroundImage: `url(${heroBackground}), linear-gradient(to bottom, #151218 35%, #ffffff 73%)`,
      }}
    >
      <div className="flex justify-between items-center flex-wrap w-full max-w-7xl gap-8 px-4">
        <div className="flex flex-col justify-center items-start gap-6 flex-1 min-w-[300px]" data-aos="fade-up">
          <div className="relative z-10">
            <div className="absolute h-14 w-14 bg-[#fdc063] rounded-full -left-3 top-1 z-[-1]" />
            <h1 className="font-semibold text-5xl leading-snug pb-10">
              One-stop destination <br /> for all student <br /> needs
            </h1>
          </div>
          <div className="flex flex-col justify-center items-start text-white leading-3" data-aos="fade-up" data-aos-delay="100">
            <span className={`${styles['secondaryText']}`}>
              Find a variety of properties that suit you very easily
            </span>
            <br />
            <span className={`${styles['secondaryText']}`}>
              Forget all difficulties in finding a residence for you
            </span>
          </div>
          <div className="flex justify-between items-center w-full max-w-xl bg-white rounded-lg border-3 border-gray-300 p-2" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center gap-2 flex-1">
              <HiLocationMarker color="blue" size={25} />
              <input
                type="text"
                placeholder="Where do you want your Living space"
                className="border-none outline-none p-2 w-full text-black text-base placeholder-gray-500 italic"
              />
            </div>
            <button className="py-2 px-4 text-white bg-blue-600 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110">
              Search
            </button>
          </div>
          <div className="flex flex-wrap justify-between items-center w-full max-w-xl gap-8 pt-8">
            <div className="flex flex-col justify-center items-center" data-aos="fade-up" data-aos-delay="300">
              <span className="text-4xl">
                <CountUp start={1950} end={2000} duration={4} />
                <span className="text-[#ff9101]">+</span>
              </span>
              <span className={`${styles['secondaryText']}`}>
                Happy Customer
              </span>
            </div>
            <div className="flex flex-col justify-center items-center" data-aos="fade-up" data-aos-delay="400">
              <span className="text-4xl">
                <CountUp end={5} />
                <span className="text-[#ff9101]">+</span>
              </span>
              <span className={`${styles['secondaryText']}`}>
                Premium Services
              </span>
            </div>
            <div className="flex flex-col justify-center items-center" data-aos="fade-up" data-aos-delay="500">
              <span className="text-4xl">
                <CountUp end={28} />
                <span className="text-[#ff9101]">+</span>
              </span>
              <span className={`${styles['secondaryText']}`}>
                Award Winning
              </span>
            </div>
          </div>
        </div>
        <div className="home-right flex-1 min-w-[300px] h-100 pb-10" data-aos="fade-left">
          <div className="w-full max-w-xl h-full max-h-[550px] mx-auto rounded-2xl overflow-hidden">
            <Slider {...settings}>
              <div>
                <img src={hero1} alt="Picture 1" className="w-full h-auto" />
              </div>
              <div>
                <img src={hero2} alt="Picture 2" className="w-full h-auto" />
              </div>
              <div>
                <img src={hero3} alt="Picture 3" className="w-full h-auto" />
              </div>
              <div>
                <img src={hero4} alt="Picture 4" className="w-full h-auto" />
              </div>
              <div>
                <img src={hero5} alt="Picture 5" className="w-full h-auto" />
              </div>
              <div>
                <img src={hero6} alt="Picture 6" className="w-full h-auto" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
