import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { HiArrowRightCircle } from "react-icons/hi2";
import { HiArrowLeftCircle } from "react-icons/hi2";

function Projects() {
  return (
    <section className="container mx-auto  px-4  mb-36 md:mb-16 relative">
      
       
      <div className="text-[#232940] text-[32px] font-medium flex items-center gap-4 py-1">
      <Link href="/projects" className="hover:text-slate-700 ">Projects</Link>
        <div className="bg-[#ff4d41] h-[2px] w-[40px] translate-y-1"></div>
        </div>

          <div className="hidden md:block w-[2px] absolute top-0 bottom-0 left-1/2 translate-x-1/2 bg-[#ff4d41]"></div>
          {/* first projject */}
        <div className="flex flex-col md:flex-row gap-[80px] items-center mt-1 relative">
         
          <a href="https://ui-ux-hackathon-rust.vercel.app/" target="blank" className="w-full  relative">
          <HiArrowRightCircle  className="size-8 ml-[550px] top-72 relative hidden lg:block"/>
            <Image src="/shoes.png" alt="photo" height={530} width={530} className="inset-0  w-full"></Image>
        
          </a>
          <div className="w-full ">
            <h3 className="text-[#fc815c] font-bold text-2xl md:text-4xl">Nike website</h3>
            <a href="https://github.com/Afnaniagq?tab=repositories"target="blank" className="flex gap-2">  <span className="text-[#fc815c] font-lg ">Follow</span><SiGithub  className="size-6 fill-black   hover:size-7"/></a>
          
            <p className="text-justify  text-[9px] sm:text-[13px] md:text-[17px]  mt-2">This sleek, modern e-commerce website is built with Next.js for server-side rendering and fast page load times, while Tailwind CSS ensures a highly customizable and responsive design. The site showcases Nike-inspired products, offering an immersive, user-friendly experience.</p>
          </div>
        </div>
{/* second project */}
        <div className="flex flex-col md:flex-row  items-center relative">
        <a href="https://blog-one-sigma-24.vercel.app/" target="blank" className="w-full  relative block md:hidden ">
          <HiArrowLeftCircle className="size-8 ml-14 top-72 relative hidden lg:block" />
         
            <Image src="/blogs.png" alt="pro" height={530} width={530} className="  md:ml-20 top-1  inset-0 w-full "></Image>
    
          </a>
       
          <div className="w-full">
      
            <h3 className="text-[#fc815c] font-bold text-2xl  md:text-4xl">Blog Website</h3>
            <a href="https://www.linkedin.com/in/afnan-imran-6619a0267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="blank" className="flex gap-2">     <span className="text-[#fc815c] font-lg mt-1">Follow</span> <FaLinkedin className="size-6  fill-blue-700   hover:size-7"/>   </a>
         
            <p className="text-justify text-[9px] sm:text-[13px]  md:text-[17px] mr-3 mt-2">A modern blog website leveraging Sanity CMS offers a flexible and scalable content management solution. Sanity provides a headless CMS, meaning it separates the content management and content display, allowing developers to use any technology to display the content wherever it’s needed. Here’s an overview of how it functions</p>
          
          </div>
      
          <a href="https://blog-one-sigma-24.vercel.app/" target="blank" className="w-full  relative hidden md:block ">
          <HiArrowLeftCircle className="size-8 ml-14 top-80 relative hidden lg:block" />
         
            <Image src="/blogs.png" alt="pro" height={530} width={530} className="  md:ml-20 top-1  inset-0 w-full"></Image>
    
          </a>
         
        </div>

    {/* Third  projject */}
        <div className="hidden md:block w-[2px] absolute top-0 bottom-0 left-1/2 translate-x-1/2 bg-[#ff4d41]"></div>
        <div className="flex flex-col md:flex-row gap-[80px] items-center mt-1 relative">
         
          <a href="https://css-amazo-web-tkhh.vercel.app/" target="blank" className="w-full  relative">
          <HiArrowRightCircle  className="size-8  ml-[550px] top-72 relative hidden lg:block"/>
            <Image src="/cssweb.png" alt="photo" height={550} width={550} className="inset-0  w-full "></Image>
        
          </a>
          <div className="w-full ">
            <h3 className="text-[#fc815c] font-bold text-2xl md:text-4xl mb-2">E-comerce Website</h3>
            <a href="https://github.com/Afnaniagq?tab=repositories"target="blank" className="flex gap-2">  <span className="text-[#fc815c] font-lg ">Follow</span><SiGithub  className="size-6 fill-black   hover:size-7"/></a>
          
            <p className="text-justify  text-[9px] sm:text-[13px] md:text-[17px]  mt-2"> An e-commerce website built using Next.js and custom CSS offers a smooth, dynamic shopping experience with high performance, easy SEO management, and full control over the visual design. This modern tech stack combines the flexibility of React, the benefits of Next.js for server-side rendering and static site generation, and the customization power of writing your own CSS from scratch.</p>
          </div>
        </div>
{/* Four project */}
        <div className="flex flex-col md:flex-row  items-center relative">
          
        <a href="https://hijab-website-nine.vercel.app/" target="blank" className="w-full  relative block md:hidden ">
          <HiArrowLeftCircle className="size-8 ml-14 top-56 relative hidden lg:block" />
         
            <Image src="/hijab.png" alt="pro" height={530} width={530} className="  md:ml-20 top-1  inset-0 w-full "></Image>
    
          </a>
      
          <div className="w-full">
      
           <h3 className="text-[#fc815c] font-bold text-2xl  md:text-4xl">Hijab website</h3>
            <a href="https://www.linkedin.com/in/afnan-imran-6619a0267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="blank" className="flex gap-2">     <span className="text-[#fc815c] font-lg mt-1">Follow</span> <FaLinkedin className="size-6  fill-blue-700   hover:size-7"/>   </a>
         
            <p className="text-justify text-[9px] sm:text-[13px]  md:text-[17px] mr-3 mt-2">This ECommerce website for hijabs is built with Next.js and styled using Tailwind CSS, providing a sleek, modern, and responsive shopping experience. The site leverages the performance optimizations of Next.js, ensuring fast load times and seamless navigation across devices. Tailwind CSS enables a highly customizable, visually appealing design, with a focus on simplicity and accessibility.  </p>
          
          </div>
      
          <a href="https://hijab-website-nine.vercel.app/" target="blank" className="w-full  relative hidden md:block">
          <HiArrowLeftCircle className="size-8 ml-14 top-72 relative hidden lg:block" />
         
            <Image src="/hijab.png" alt="pro" height={530} width={530} className="  md:ml-20 top-1  inset-0 w-full "></Image>
    
          </a>
         
        </div>

        
    {/* fifth  projject */}
    <div className="hidden md:block w-[2px] absolute top-0 bottom-0 left-1/2 translate-x-1/2 bg-[#ff4d41]"></div>
        <div className="flex flex-col md:flex-row gap-[80px] items-center mt-1 relative">
         
          <a href="https://figma-website-psi.vercel.app/" target="blank" className="w-full  relative">
          <HiArrowRightCircle  className="size-8  ml-[550px] top-72 relative hidden lg:block"/>
            <Image src="/watch.png" alt="photo" height={550} width={550} className="inset-0  w-full "></Image>
        
          </a>
          <div className="w-full ">
            <h3 className="text-[#fc815c] font-bold text-2xl md:text-4xl mb-2">Electronic Website</h3>
            <a href="https://github.com/Afnaniagq?tab=repositories"target="blank" className="flex gap-2">  <span className="text-[#fc815c] font-lg ">Follow</span><SiGithub  className="size-6 fill-black   hover:size-7"/></a>
          
            <p className="text-justify  text-[9px] sm:text-[13px] md:text-[17px]  mt-2">Leveraging the power of Next.js, the site features fast load times, server-side rendering, and optimized performance for both desktop and mobile users. Tailwind CSS ensures a modern, clean, and customizable design first styling that adapts perfectly to any screen size With a focus on performance, usability, and scalability, this Ecommerce platform delivers an engaging and smooth browsing experience while providing powerful features for both customers and administrators.</p>
          </div>
        </div>
        
            </section>
  )
}
export default Projects