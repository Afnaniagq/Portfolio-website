import Link from "next/link";
import { IoLogoAngular } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { LuMenuSquare } from "react-icons/lu";
import {
      Sheet,
      SheetContent,
      SheetDescription,
      SheetHeader,
      SheetTitle,
      SheetTrigger,
    } from "@/components/ui/sheet"
  
// Ensure you have the correct import for Sheet.

function Header() {
    return (
        <div>
            <header className="bg-[#243642] flex justify-between items-center h-20 px-4 text-white mx-auto">
                {/* Logo */}
                <IoLogoAngular className="size-14 m-3 hover:translate-y-2 duration-1000" />

                {/* Site Name */}
                <h2 className="text-white text-[17px] md:text-[20px] mr-44 md:mr-96 font-serif">Afnan Imran</h2>

                {/* Desktop Navigation Menu */}
                <ul className="hidden lg:flex lg:text-[18px] space-x-6 items-center">
                    <li className="text-[25px] font-serif">
                        <Link href="/" className="hover:text-slate-700 hover:bg-white rounded-md p-2">Home</Link>
                    </li>
                    <li className="text-[25px] font-serif">
                        <Link href="/about" className="hover:text-slate-700 hover:bg-white rounded-md p-2">About</Link>
                    </li>
                    <li className="text-[25px] font-serif">
                        <Link href="/skills" className="hover:text-slate-700 hover:bg-white rounded-md p-2">Skills</Link>
                    </li>
                    <li className="text-[25px] font-serif">
                        <Link href="/projects" className="hover:text-slate-700 hover:bg-white rounded-md p-2">Projects</Link>
                    </li>
                    <li className="text-[25px] font-serif">
                        <Link href="/contact" className="hover:text-slate-700 hover:bg-white rounded-md p-2">Contact</Link>
                    </li>
                </ul>

                {/* Download CV Button (Desktop) */}
                <a href="https://resume-1-2-mocha.vercel.app/" target="_blank" className="hidden lg:block border border-white py-1 px-4 mx-4 text-white rounded-[5px] hover:bg-green-500 hover:text-white transition duration-200">
                    Download CV <MdOutlineFileDownload />
                </a>

                {/* Mobile Menu */}
                <Sheet>
                    <SheetTrigger>
                        <LuMenuSquare className="lg:hidden text-3xl mx-2" />
                    </SheetTrigger>

                    <SheetContent>
                        <h2 className="pl-4 text-[25px] font-serif text-slate-700 font-bold">Menu</h2>
                        <div className="bg-red-500 h-[2px] w-[390px]"></div>

                        <ul className="space-y-5 pl-4 text-[25px] text-slate-700 font-serif">
                            <li className="mb-3">
                                <Link href="/" className="hover:text-slate-700">Home</Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/about" className="hover:text-slate-700">About</Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/skills" className="hover:text-slate-700">Skills</Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/projects" className="hover:text-slate-700">Projects</Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/contact" className="hover:text-slate-700">Contact</Link>
                            </li>
                        </ul>

                        {/* Mobile Download CV Button */}
                        <a href="https://resume-jade-xi.vercel.app/" target="_blank" className="bg-green-600 hover:bg-green-500 p-3rounded-md text-[18px] text-white">
                            Download CV
                        </a>
                    </SheetContent>
                </Sheet>
            </header>
        </div>
    );
}

export default Header;









