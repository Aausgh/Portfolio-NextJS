"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";


const HeroSection = () => {
    return (
        <section className='lg:py-16'>

            <div className="grid grid-cols-1 sm:grid-cols-12  ">

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >

                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold'>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-900">
                            Hello, I&apos;m {" "}
                        </span>

                        <br />

                        <TypeAnimation
                            sequence={[

                                'Aaus',
                                1000,
                                'Web Developer',
                                1000,
                                'UI/UX Designer',
                                1000,

                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>

                    <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 text-justify'>
                        I&apos;m a front-end developer (React.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
                    </p>

                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-400  to-secondary-900 hover:bg-blue-900 text-white'>
                            Hire Me
                        </button>

                        <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-400  to-secondary-900 hover:bg-slate-800 text-white mt-3'>
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">Download CV</span>
                        </button>
                    </div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-4 lg:mt-0"
                >
                    <div className="rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] relative">

                        <Image
                            src='/images/hero-imagee.png'
                            alt='hero image'
                            width={300}
                            height={300}
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        />

                    </div>

                </motion.div>

            </div>
        </section>
    )
}

export default HeroSection;