"use client"
import React from "react";
import Typewriter from 'typewriter-effect';

export default  function Type(){
    return(
  
      <h2 className="text-[30px] md:text-[35px] flex flex-row text-black ">
<Typewriter
  options={{
    strings: ['I,m a Web Developer', 'I,m a Digital Marketer'],
    autoStart: true,
    loop: true,
  }}
/>
</h2>
    )
}
