import React from "react";
import Link from "next/link";
import { LuMenuSquare } from "react-icons/lu";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoLogoAngular } from "react-icons/io5";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

function Header(){
    return(
        <div>
            <header className="bg-[#243642] flex justify-between h-20 text-white items-center  mx-auto">
            <IoLogoAngular className="size-16 m-3 hover:translate-y-2 duration-1000 "/>
            <h2 className="text-white text-[20px] font-serif mr-auto">Afnan Imran</h2>

            <ul className="hidden md:block md:text-[18px] mr-auto items-center ">
            <li  className="space-x-6 text-[25px] font-serif ">
            <Link href="/" className="hover:text-slate-700 hover:bg-white rounded-md " >Home</Link>
            <Link href="/about" className="hover:text-slate-700 hover:bg-white rounded-md ">About</Link>
            <Link href="/skills" className="hover:text-slate-700 hover:bg-white rounded-md ">Skills</Link>
            <Link href="/projects" className="hover:text-slate-700 hover:bg-white rounded-md ">Projects</Link>
            <Link href="/contact" className="hover:text-slate-700 hover:bg-white rounded-md ">Contact</Link>
            </li>
            </ul>

            <a href="https://resume-1-2-mocha.vercel.app/" target="blank" className=" hidden md:block  border border-white py-1 px-4 mx-4  text-white rounded-[5px] items-center gap-2 hover:bg-green-500 hover:text-white transition duration-200">Download CV
             <MdOutlineFileDownload />
            </a>
            {/* <div className="items-center flex flex-col"> */}
            <Sheet>
      <SheetTrigger><LuMenuSquare  className=" md:hidden size-10 mx-2" /></SheetTrigger>
        <SheetContent >
          <h2 className="pl-4 text-[25px] font-serif  text-slate-700 font-bold ">List</h2>
          <div className="bg-red-500 h-[2px] w-[390px] "></div>
          <ul className="">
            <li  className="space-y-5 pl-4 text-[25px]  text-slate-700 font-serif flex mb-3 flex-col">
            <Link href="/" className="hover:text-slate-700 " >Home</Link>
            <Link href="/about" className="hover:text-slate-700 ">About</Link>
            <Link href="/contact" className="hover:text-slate-700 ">Skills</Link>
            <Link href="/projects" className="hover:text-slate-700 ">Projects</Link>
            <Link href="/contact" className="hover:text-slate-700  ">Contact</Link>
            </li>
            </ul>
            {/* <a href="https://resume-1-2-mocha.vercel.app/" target="blank" className="   border-gray-500  text-white rounded-[5px] space-y-4 py-3 px-4 bg-green-500 gap-2 h-9 w-4  transition duration-200">Download CV
            <MdOutlineFileDownload className="fill-black" />
            </a> */}

            <a href="https://resume-1-2-mocha.vercel.app/" target="blank" className="bg-green-600 hover:bg-green-500  p-3 rounded-md    text-[18px] text-white">Download CV</a>
        
        </SheetContent>
      </Sheet>
{/* </div> */}

            </header>
        </div>
    )
}
export default Header