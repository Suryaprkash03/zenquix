import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from '../components/Navbar/NavBar';
import network from "../images/services/Network.svg";
import cloud from "../images/services/Cloud.svg";
import software from "../images/services/Software.svg";
import heroImg from '../images/web-dev.svg';

const slides = [
    {
        title: "Welcome to Zenquix Technologies Pvt Ltd",
        description: "At Zenquix Technologies, we empower businesses to thrive in the digital world through our cutting-edge IT solutions. Discover how we can drive your success and elevate your technology.",
        imgSrc: heroImg,
        link: "/#",
    },
    {
        title: "Network Services",
        description: "Stay connected and secure with our reliable network solutions. Our advanced technology ensures uninterrupted connectivity and robust security, allowing you to focus on what matters most—growing your business.",
        imgSrc: network,
        link: "/network-services",
    },
    {
        title: "Cloud Services",
        description: "Unlock the power of the cloud with our scalable and innovative solutions. Seamlessly integrate cloud technology to enhance efficiency, reduce costs, and drive digital transformation across your organization.",
        imgSrc: cloud,
        link: "/cloud-services",
    },
    {
        title: "Software Development",
        description: "Transform your business with custom software solutions tailored to your unique needs. Our expert team delivers high-quality, scalable applications designed to streamline processes and foster innovation.",
        imgSrc: software,
        link: "/software-development",
    },
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000); // 5 seconds interval

        return () => clearInterval(interval);
    }, []);

    const { title, description, imgSrc, link } = slides[currentSlide];

    const slideVariants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
        exit: { opacity: 0, scale: 0.8, transition: { duration: 0.8 } },
    };

    return (
        <motion.div 
            className="hero" 
            id='hero'
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
        >
            <div>
                <NavBar />
            </div>
            
            <motion.div 
                className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" 
                initial={{ scale: 0.8, opacity: 0 }} 
                animate={{ scale: 1, opacity: 1 }} 
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <AnimatePresence>
                    <motion.div 
                        className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left"
                        key={currentSlide} // Key prop to trigger the animation on slide change
                        variants={slideVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        custom={direction}
                    >
                        <div className="lg:w-1/2 flex flex-col justify-center">
                            <h1 className="mb-5 md:text-5xl text-3xl font-bold text-primary self-start">
                                {title}
                            </h1>
                            <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500">
                                {description}
                            </div>
                            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                                <Link to={link} className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                                    Learn more
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <div className="flex lg:justify-end w-full lg:w-1/2">
                            <img alt="service img" className="rounded-t float-right w-[450px] h-[450px] " src={imgSrc} />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
}

export default Hero;
