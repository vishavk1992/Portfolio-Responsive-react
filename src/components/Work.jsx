import React from 'react'
import project1 from "../assets/proj1.png"
import project2 from "../assets/proj2.png"
import project3 from "../assets/proj3.png"
import project4 from "../assets/proj4.png"

const Work = () => {
  return (
    <div className='py-6 max-w-[1200px] mx-auto'>
        <div className='mx-auto px-4 md:px-8'>
            <div className='mb-4 flex items-center justify-between gap-8'>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-2xl lg:text-3xl text-white'>My <span>Projects</span></h2>
                    <p className='text-gray-300'>These are my latest projects for different clients.</p>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8'>
               <a href='/' className='group h-48 overflow-hidden rounded-lg shadow-lg md:h-80'>
                 <img src={project1} alt='' className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 '/>
               </a>

               <a href='/' className='group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80'>
                 <img src={project4} alt='' className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 '/>
               </a>

               <a href='/' className='group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80'>
                 <img src={project3} alt='' className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 '/>
               </a>

               <a href='/' className='group h-48 overflow-hidden rounded-lg shadow-lg  md:h-80'>
                 <img src={project2} alt='' className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 '/>
               </a>
            </div>
        </div>
    </div>
  )
}

export default Work