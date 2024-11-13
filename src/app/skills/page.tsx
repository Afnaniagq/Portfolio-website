import React from "react";
import Link from "next/link";

function Skill() {
  return (
    <section className="container mx-auto py-10 px-4  md:mb-[119px]">
      
        <div className="text-[#232940] text-[32px] font-medium flex items-center gap-4 py-16">
        <Link href="/contact" className="hover:text-slate-700 ">Skills</Link>
        <div className="bg-[#ff4d41] h-[2px] w-[40px] translate-y-1"></div>
        </div>
        <p className="mb-10 -mt-10">I have knowledge in HTML, CSS, and Tailwind CSS to create responsive and visually appealing web designs. Proficient in TypeScript and Next.js, I build scalable, high-performance web applications. I’m passionate about leveraging modern technologies to enhance user experiences.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <p className="hover:translate-x-3 duration-1000" >HTML</p>
                <div className="relative bg-gray-400 h-[4px] mt-5">
                    <div className="bg-[#ff4d41] absolute h-[4px] w-[90%]"></div>
                </div>
            </div>
    
        
            <div>
                <p className="hover:translate-x-3 duration-1000" >CSS</p>
                <div className="relative bg-gray-400 h-[4px] mt-2">
                    <div className="bg-[#ff4d41] absolute h-[4px] w-[70%]"></div>
                </div>
            </div>
      
       
            <div>
                <p className="hover:translate-x-3 duration-1000" >Typescript</p>
                <div className="relative bg-gray-400 h-[4px] mt-2">
                    <div className="bg-[#ff4d41] absolute h-[4px] w-[65%]"></div>
                </div>
            </div>
      
    
            <div>
                <p className="hover:translate-x-3 duration-1000" >Next.js</p>
                <div className="relative bg-gray-400 h-[4px] mt-2">
                    <div className="bg-[#ff4d41] absolute h-[4px] w-[40%]"></div>
                </div>
            </div>
       
        
            <div>
                <p className="hover:translate-x-3 duration-1000" >Tailwind CSS</p>
                <div className="relative bg-gray-400 h-[4px] mt-2">
                    <div className="bg-[#ff4d41] absolute h-[4px] w-[70%]"></div>
                </div>
            </div>
       
     
            <div>
                <p className="hover:translate-x-3 duration-1000">Java Script</p>
                <div className="relative bg-gray-400 h-[4px] mt-2">
                    <div className="bg-[#ff4d41] absolute h-[4px] w-[50%]"></div>
                </div>
            </div>
      </div>

            
             </section>
  )}
  export default Skill
