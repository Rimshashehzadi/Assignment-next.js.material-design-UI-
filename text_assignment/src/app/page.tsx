import Image from "next/image";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import AddedChechlns from "./components/sections/AddedChechlns";



export default function Home() {
  return (
   <div>
    {/* <Navbar/> */}
    {/* Hero section */}
    <Hero/>
    {/* Added Checkln */}
    <AddedChechlns/>
    </div>
  );
}
