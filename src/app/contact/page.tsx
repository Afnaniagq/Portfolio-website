import React from "react";
import Link from "next/link";

function Contact() {
  return (
    <section className="container mx-auto py-10 px-4">
      
        <div className="text-[#232940] text-[32px] font-medium flex items-center gap-4 py-16">
        <Link href="/contact" className="hover:text-slate-700 mt-3 ">Contact</Link>
            <div className="bg-[#ff4d41] h-[2px] w-[40px] translate-y-1"></div>
            </div>
            <form className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <input type="text" placeholder="Name" className=" border-gray-400 border rounded-[5px] outline-4 outline-[#ff4d41] px-4 py-2 w-[100%]" required />
                    <input type="text" placeholder="Email" className=" border-gray-400 border rounded-[5px] outline-4 outline-[#ff4d41] px-4 py-2 w-[100%]" required />
                </div>
                <input type="text" placeholder="Subject" className=" border-gray-400 border rounded-[5px] outline-4 outline-[#ff4d41] px-4 py-2 w-[100%]" required />
                <textarea rows={6} placeholder="Message" className=" border-gray-400 border rounded-[5px] outline-4 outline-[#ff4d41] px-4 py-2 w-[100%]" required></textarea>
                <button type="submit" className=" bg-orange-500 hover:bg-orange-400 hover:text-[18px] rounded-md h-12 w-40 text-[17px] mb-10 text-white">SEND MESSAGE</button>
            </form>
            </section>)
            }
            
    export default Contact        