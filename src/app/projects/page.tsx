import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { HiArrowRightCircle } from "react-icons/hi2";
import { HiArrowLeftCircle } from "react-icons/hi2";

function Projects() {
  return (
    <section className="container mx-auto  px-4 h-[1000px] mb-36 md:mb-16 relative">
      
       
      <div className="text-[#232940] text-[32px] font-medium flex items-center gap-4 py-1">
      <Link href="/projects" className="hover:text-slate-700 ">Projects</Link>
        <div className="bg-[#ff4d41] h-[2px] w-[40px] translate-y-1"></div>
        </div>
{/* first projject */}
          <div className="hidden md:block w-[2px] absolute top-0 bottom-0 left-1/2 translate-x-1/2 bg-[#ff4d41]"></div>
        <div className="flex flex-col md:flex-row gap-[80px] items-center mt-1 relative">
         
          <a href="https://figma-website-olm2.vercel.app/" target="blank" className="w-full  relative">
          <HiArrowRightCircle  className="size-8 ml-[450px] top-56 relative hidden lg:block"/>
            <Image src="/lapmob.png" alt="photo" height={530} width={530} className="inset-0   h-45 w-50 sm:h-70 sm:w-72  md:h-[450px] md:w-[450px]"></Image>
        
          </a>
          <div className="w-full ">
            <h3 className="text-[#fc815c] font-bold text-2xl md:text-4xl">Electronics website</h3>
            <a href="https://github.com/Afnaniagq?tab=repositories"target="blank" className="flex gap-2">  <span className="text-[#fc815c] font-lg ">Follow</span><SiGithub  className="size-6 fill-black   hover:size-7"/></a>
          
            <p className="text-justify  text-[9px] sm:text-[13px] md:text-[17px]  mt-2">Leveraging the power of Next.js, the site features fast load times, server-side rendering, and optimized performance for both desktop and mobile users. Tailwind CSS ensures a modern, clean, and customizable design first styling that adapts perfectly to any screen size With a focus on performance, usability, and scalability, this Ecommerce platform delivers an engaging and smooth browsing experience while providing powerful features for both customers and administrators.</p>
          </div>
        </div>
{/* second project */}
        <div className="flex flex-col md:flex-row  items-center relative">
        <a href="https://hijab-website-nine.vercel.app/" target="blank" className="w-full relative block md:hidden"></a>
          <div className="w-full">
          <a href="https://hijab-website-nine.vercel.app/" target="blank" className="w-full relative">
          <Image src="/lapsrc.png" alt="pro" height={500} width={500} className="inset-0  block md:hidden h-45 w-50 sm:h-70 sm:w-72   "></Image> </a>
         
            <h3 className="text-[#fc815c] font-bold text-2xl  md:text-4xl">Hijab website</h3>
            <a href="https://www.linkedin.com/in/afnan-imran-6619a0267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="blank" className="flex gap-2">     <span className="text-[#fc815c] font-lg mt-1">Follow</span> <FaLinkedin className="size-6  fill-blue-700   hover:size-7"/>   </a>
         
            <p className="text-justify text-[9px] sm:text-[13px]  md:text-[17px] mr-3 mt-2">This ECommerce website for hijabs is built with Next.js and styled using Tailwind CSS, providing a sleek, modern, and responsive shopping experience. The site leverages the performance optimizations of Next.js, ensuring fast load times and seamless navigation across devices. Tailwind CSS enables a highly customizable, visually appealing design, with a focus on simplicity and accessibility.</p>
          
          </div>
      
          <a href="https://hijab-website-nine.vercel.app/" target="blank" className="w-full  relative hidden md:block ">
          <HiArrowLeftCircle className="size-8 ml-14 top-56 relative hidden lg:block" />
         
            <Image src="/lapsrc.png" alt="pro" height={530} width={530} className="hidden md:block  ml-20 top-1  inset-0  h-[500px] w-[500px] "></Image>
    
          </a>
         
        </div>
        
            </section>
  )
}
export default Projects