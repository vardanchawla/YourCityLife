import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import about6 from '../../assets/laundary-5.jpeg';
import about5 from '../../assets/laundary4.jpeg';
import about9 from '../../assets/medical8.jpeg';
import about2 from '../../assets/pd4.jpeg';
import about3 from '../../assets/pg12.jpeg';
import about1 from '../../assets/pg16.jpeg';
import about4 from '../../assets/pg19.jpeg';
import about7 from '../../assets/tiffin6.jpeg';
import about8 from '../../assets/transport10.jpeg';
import styles from './About_hero.module.css';
gsap.registerPlugin(ScrollTrigger);

const About_hero = () => {
  const containersRef = useRef([]);

  useEffect(() => {
    const containers = containersRef.current.filter((ref) => ref !== null);

    containers.forEach((container, index) => {
      gsap.fromTo(
        container,
        {
          opacity: 0,
          translateX: index % 2 === 0 ? -20 : 20,
        },
        {
          opacity: 1,
          translateX: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Cleanup function
    return () => {
      containers.forEach((container) => {
        ScrollTrigger.getById(container)?.kill();
      });
    };
  }, []);

  return (
    <div className={styles['a-wrapper']}>
      <div className={styles['headings']}>
        <div className={styles['heading']}>
          <h1>About<span>Us</span></h1>
          <p>Discover a place that offers more than accommodation. Experience convenience and comfort.</p>
        </div>
      </div>

      {/* Container 1 */}
      <div ref={(ref) => containersRef.current.push(ref)} className={styles['container1']}>
        <div className={styles['detail']}>
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
            <h3>Why<span>YourCityLives?</span></h3>
            <div className={styles['data']}>YourCityLives exists to simplify and enhance urban living by offering essential services that cater to everyday needs. The website aims to make city living more convenient, comfortable, and enjoyable for residents.</div>
          </div>
        </div>
      </div>

      {/* Container 2 */}
      <div ref={(ref) => containersRef.current.push(ref)} className={styles['container']}>
        <div className={styles['detail']}>
          <div className={styles['detail-right']}>
            <h3>What does <span>YourCityLives offer?</span></h3>
            <div className={styles['data']}>YourCityLives offers a diverse range of essential services designed to enhance urban living. We provide affordable and comfortable PG/Flats accommodations, catering to both students and professionals. Our comprehensive healthcare services ensure access to routine check-ups and specialized treatments. Convenient transport options simplify daily commuting across the city. Additionally, our Tiffin Service and Laundry facilities deliver nutritious meals and professional laundry solutions to your doorstep, freeing up your time to focus on what truly matters.</div>
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
      <div ref={(ref) => containersRef.current.push(ref)} className={styles['container1']}>
        <div className={styles['detail']}>
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
            <h3>How does <span>YourCityLives provide these services?</span></h3>
            <div className={styles['data']}>YourCityLives ensures a seamless experience through a user-friendly platform for easy browsing and booking. We collaborate with trusted service providers to ensure quality and reliability. With online booking and payment options, we provide convenience in service delivery. Our responsive customer support and feedback mechanism aim to address queries promptly and continuously improve based on user feedback.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_hero;
