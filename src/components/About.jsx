import React from 'react'
import aboutImg from "../assets/about4.jpeg"

const About = () => {
    return (
        <div className='py-10 text-white bg-[#232325] h-[80vh]'>
            <div className='flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
                <div>
                    <div className='w-[400px] h-full'>
                        <img src={aboutImg} alt=''
                            className='object-cover bg-gray-700 rounded-xl h-[300px] filter grayscale
                     brightness-50 ' />

                    </div>
                </div>
                <div>
                    <div className='p-2'>
                        <div className='text-gray-300 my-3'>
                            <h3 className='text-4xl font-semibold mb-5' >About<span className='primary-text'> Me</span></h3>
                            <p className='text-justify leading-7 w-11/12 mx-auto'>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                    <div className='flex mt-10 items-center gap-7'>
                        <div className='bg-[#333333]/40 p-5 rounded-lg'>
                            <h3 className='md:text-4xl text-2xl font-semibold text-white'>
                                11 <span className='primary-text'>+</span> {" "}
                            </h3>
                            <p>
                                <span className='md:text-base text-xs'>Projects</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About