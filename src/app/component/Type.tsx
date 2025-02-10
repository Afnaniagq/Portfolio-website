"use client"
import React from "react";
import Typewriter from 'typewriter-effect';

export default  function Type(){
    return(
  
      <h2 className="text-[27px] md:text-[30px] flex flex-row font-semibold text-[#243642] ">
<Typewriter
  options={{
    strings: ['I am a Web Developer', 'I am a Digital Marketer'],
    autoStart: true,
    loop: true,
  }}
/>
</h2>
    )
}
