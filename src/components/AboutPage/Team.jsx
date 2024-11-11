import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import chirag from '../../assets/chirag.jpg';
import lakshay from '../../assets/lakshay.jpg';
import namit from '../../assets/nam.jpg';
import vardhan from '../../assets/vardhan.jpg';

const Team = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const teamlead = [
        { name: 'Vardhan Chawla', designation: 'CEO & FOUNDER', hoverImage: vardhan, linkedin: 'https://www.linkedin.com/in/vardan-chawla-671256176?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
        { name: 'Chirag Bhargava', designation: 'TECHNICAL HEAD', hoverImage: chirag, linkedin: 'https://www.linkedin.com/in/chirag-bhargava-b636a0229/' },
    ];

    const specialThanks = [
        { name: 'Namit Goyal', designation: 'Website Developer', hoverImage: namit, linkedin: 'https://www.linkedin.com/in/namit-goyal-743315227/' },
        { name: 'Lakshay Bansal', designation: 'Website Developer', hoverImage: lakshay, linkedin: 'https://www.linkedin.com/in/lakshay-bansal-2b51a4227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    ];

    return (
        <section className="bg-white overflow-hidden">
            <div className="container px-6 py-10 mx-auto">
                <div className="xl:flex xl:items-center xl:space-x-4">
                    <div className="xl:w-1/2">
                        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl" data-aos="fade-right">Our Team</h1>
                        <p className="max-w-2xl mt-4 text-gray-500" data-aos="fade-right">
                            Meet the talented individuals behind our success. Our team is composed of industry experts dedicated to delivering exceptional service and innovative solutions.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:w-1/2 md:grid-cols-2">
                        {teamlead.map((member) => (
                            <div key={member.name} data-aos="zoom-in">
                                <div className="relative overflow-hidden rounded-xl h-64 w-full hover:scale-105 transition-transform duration-300">
                                    <img className="object-cover h-full w-full" src={member.hoverImage} alt={member.name} />
                                </div>
                                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">{member.name}</h1>
                                <p className="mt-2 text-gray-500 capitalize">{member.designation}</p>
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    <i className="fab fa-linkedin fa-lg"></i>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container px-6 py-10 mx-auto">
                <div className="xl:flex xl:items-center xl:space-x-4">
                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:w-1/2 md:grid-cols-2">
                        {specialThanks.map((member) => (
                            <div key={member.name} data-aos="zoom-in">
                                <div className="relative overflow-hidden rounded-xl h-64 w-full hover:scale-105 transition-transform duration-300">
                                    <img className="object-cover h-full w-full" src={member.hoverImage} alt={member.name} />
                                </div>
                                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">{member.name}</h1>
                                <p className="mt-2 text-gray-500 capitalize">{member.designation}</p>
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    <i className="fab fa-linkedin fa-lg"></i>
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="xl:w-1/2 ">
                        <h1 className="text-3xl font-semibold text-gray-800 capitalize text-right lg:text-4xl" data-aos="fade-left">Website Developers</h1>
                        <p className="max-w-2xl mt-4 text-gray-500 text-right " data-aos="fade-left">
                            Our website developers are the backbone of our online presence, bringing innovative ideas to life and ensuring a seamless user experience.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
