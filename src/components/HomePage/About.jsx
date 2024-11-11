import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import about6 from '../../assets/laundary-5.jpeg';
import about4 from '../../assets/laundary4.jpeg';
import about9 from '../../assets/medical2.jpeg';
import about1 from '../../assets/pg1.jpeg';
import about2 from '../../assets/pg2.jpeg';
import about3 from '../../assets/pg3.jpeg';
import about8 from '../../assets/tiffin2.jpeg';
import about5 from '../../assets/tiffin5.jpeg';
import about7 from '../../assets/transport1.jpeg';
import styles from './About.module.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
    });
  }, []);

  const handleExploreMoreClick = () => {
    window.location.href = '/about';
  };

  return (
    <div className={`${styles['a-wrapper']}`}>
      <div className={`${styles.headings}`}>
        <div className={`${styles.heading}`}>
          <h1><span>Beyond </span>Four Walls and a Roof</h1>
          <p>Discover a World of Services Beyond Your Stay</p>
        </div>
      </div>

      {/* Container 1 */}
      <div data-aos="fade-up" className={styles.container1}>
        <div className={styles.detail}>
          <div className={styles['detail-left']}>
            <div className={styles['detail-left-l']}>
              <img src={about1} alt="About 1" />
            </div>
            <div className={styles['detail-left-r']}>
              <img src={about2} alt="About 2" />
              <img src={about3} alt="About 3" />
            </div>
          </div>
          <div className={styles['detail-right']}>
            <h3>Elevate Your Everyday <br /><span> Experience</span></h3>
            <div className={styles.data}>Arrive with your aspirations and essentials, and we'll handle the rest. Our all-inclusive service ensures your space is fully furnished, equipped with top-notch appliances, and stocked with the essentials so you can focus on what truly matters.</div>
            <button className={styles['explore-button']} onClick={handleExploreMoreClick}>Explore More</button>
          </div>
        </div>
      </div>

      {/* Container 2 */}
      <div data-aos="fade-up" className={styles.container}>
        <div className={styles.detail}>
          <div className={styles['detail-right']}>
            <h3>Simplifying Your<br /><span> Move</span></h3>
            <div className={styles.data}>Bring along your goals and personal items; leave the logistics to us. Our service includes comprehensive furnishing, modern appliances, and everyday necessities, allowing you to settle in effortlessly and start living your best life immediately.</div>
            <button className={styles['explore-button']} onClick={handleExploreMoreClick}>Explore More</button>
          </div>
          <div className={styles['detail-left']}>
            <div className={styles['detail-left-r']}>
              <img src={about5} alt="About 5" />
              <img src={about6} alt="About 6" />
            </div>
            <div className={styles['detail-left-l']}>
              <img src={about4} alt="About 4" />
            </div>
          </div>
        </div>
      </div>

      {/* Container 3 */}
      <div data-aos="fade-up" className={styles.container1}>
        <div className={styles.detail}>
          <div className={styles['detail-left']}>
            <div className={styles['detail-left-l']}>
              <img src={about7} alt="About 7" />
            </div>
            <div className={styles['detail-left-r']}>
              <img src={about8} alt="About 8" />
              <img src={about9} alt="About 9" />
            </div>
          </div>
          <div className={styles['detail-right']}>
            <h3>Redefine Your Living <br /><span>Standards </span></h3>
            <div className={styles.data}>Step into a world where your dreams meet reality. With everything from furniture to food meticulously taken care of, you only need to bring your vision. Our spaces are designed for your comfort and convenience, right from the start.</div>
            <button className={styles['explore-button']} onClick={handleExploreMoreClick}>Explore More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
