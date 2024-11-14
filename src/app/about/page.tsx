import Link from "next/link";
import Image from "next/image";
import React from "react";


function About() {
  return (
    <section className="container mx-auto py-10 px-4">
      
        <div className="text-[#232940] text-[32px] font-medium flex items-center gap-4 py-16">
        <Link href="/about" className="hover:text-slate-700 ">About</Link>
            <div className="bg-[#ff4d41] h-[2px] w-[40px] translate-y-1"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
                <div>
                    <Image src="/book.jpg" alt="pic" height={200} width={350} className="hover:translate-x-10 duration-1000"></Image>
                </div>
                
                    <div className=" w-[300px]">
        
                            <div className="flex flex-col gap-5   mt-16 mb-20 ">
                                <h2 className="text-black font-semibold  pr-8 text-nowrap text-[18px] md:text-[25px] text-center gap-x-33  "> Frontend Developer &  Digital Marketer</h2>
                                {/* <div className="text-center pl-10"> */}
                                <p >I&apos; m Afnan Imran  a Front-End Developer and Digital Marketer passionate about creating engaging web experiences</p>
                                <p>Currently, I&apos; m expanding my expertise by diving into Cloud Computing, Applied Generative AI, Web3, and the Metaverse. I’m excited about the potential of these emerging technologies to revolutionize how we connect and interact online.</p>
                                <button className="rounded-lg bg-orange-500 hover:bg-orange-400 hover:text-[20px] text-[17px] w-32 h-11 text-white">Hire Me</button>
                                </div>
                               
                            </div>
                        
                
                

        </div>
    </section>
  );
}
 export default About