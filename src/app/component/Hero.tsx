import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SiGithub } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import Type from "./Type";


function Hero(){
    return(
        <div className="bg-[url('/screen.jpeg')]  h-screen bg-cover bg-no-repeat opacity-95 flex items-center">
    <div className="container mx-auto px-4">
        <div className="max-w-[450px] text-gray-900 flex flex-col gap-[20px]">
            <div>
            <h2 className="text-lg md:text-2xl mb-3 font-semibold text-white flex duration-1000 font-serif tracking-wider">Hello I&apos;m</h2>
        <h2 className="text-2xl md:text-5xl mb-3 font-medium text-orange-600 flex duration-1000 font-serif tracking-wider">Afnan Imran</h2>
        <Type/>
</div>
<div className="bg-[#ff4d41] h-[3px] w-[90px]"></div>
<div>
    <p className="my-3 text-white  font-bold text-md  hover:translate-x-12 bottom-8  duration-1000">I have developed a strong foundation in HTML, CSS, and JavaScript, along with experience in using Tailwind CSS and Next.js to create responsive and engaging web applications.</p>
    <button className="bg-orange-600 hover:bg-orange-400 hover:text-[20px] rounded-md h-14 w-44  text-[18px] text-white">Learn More</button>
</div>
<ul className=" space-y-[15px] ml-auto absolute  right-2 md:right-8 " >
        <li><a href="https://www.linkedin.com/in/afnan-imran-6619a0267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="blank"><FaLinkedin className="size-7 fill-current  hover:text-white"/></a></li>
        <li><a href="#" target="_blank"><RiTwitterXFill   className="size-7 fill-current   hover:text-white"/></a></li>
        <li><a href="mailto:afnanzagq@gmal.com" target="blank"><IoIosMail  className="size-7 fill-current   hover:text-white"/></a></li>
        <li><a href="https://github.com/Afnaniagq"target="blank"><SiGithub  className="size-7 fill-current   hover:text-white"/></a></li>

      </ul>
    </div>

       </div>
        </div>
    )
}

export default Hero