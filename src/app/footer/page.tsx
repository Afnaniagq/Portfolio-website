import React from "react";
import { IoIosMail } from "react-icons/io";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

function Footer(){
    return(
        <div className="bg-[#243642]  h-[200px] text-white grid place-items-center">
            <div className="text-center">
            <ul className=" space-x-[15px] ml-[3px] flex mb-2 flex-row relative " >
        <li><a href="https://www.linkedin.com/in/afnan-imran-6619a0267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="blank"><FaLinkedin className="size-7 fill-current  hover:text-blue-600  hover:bg-white  rounded-sm "/></a></li>
         <li><a href="#" target="_blank"><RiTwitterXFill   className="size-7 fill-current   hover:bg-white  hover:text-black  rounded-sm"/></a></li>
        <li><a href="mailto:afnanzagq@gmal.com" target="blank"><IoIosMail  className="size-8 fill-current hover:text-yellow-600   hover:bg-white rounded-sm"/></a></li>
        <li><a href="https://github.com/Afnaniagq"target="blank"><SiGithub  className="size-7 fill-current hover:bg-white  hover:text-black  rounded-sm"/></a></li>

      </ul>
               <p> Made by Afnan Imran</p>
               <p>@copy 28-10-24</p>
            </div>
        </div>
    )
}
export default Footer