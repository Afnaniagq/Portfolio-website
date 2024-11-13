import Hero from "./component/Hero";
import About from "./about/page";
import Skill from "./skills/page";
import  Projects from "./projects/page";
import Contact from "./contact/page";

function Home(){
  return(
    <div>
      <Hero/>
      <About/>
      <Skill/>
      <Projects/>
      <Contact/>
    </div>
  )
}
export default Home