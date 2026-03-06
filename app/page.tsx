import Image from "next/image";
import Hero from "./component/Hero";
import Real from "./component/Real";
import Get from "./component/Get";
import From from "./component/From";
import Ready from "./component/Ready";
import RoofingTestimonials from "./component/RoofingTestimonials";
import Blog from "./component/Blog";

export default function Home() {
  return (
    <>
    <Hero/> 
    <Real/>
    <Get/>
    <From/> 
    <RoofingTestimonials/>
    <Blog/>
    <Ready/>
    </>
  );
}
