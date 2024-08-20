import Image from "next/image";
import Navbar from "@/components/Navbar";
import MainPage from "@/components/MainPage"

export default function Home() {
  return (
   <div className="flex flex-col">
     <div className="flex bg-[#f4ede3] justify-between h-screen">
        <div className="flex flex-col my-auto ml-6">
              <h1 className="text-black text-6xl font-semibold font-sans ">Slack is where</h1>
              <h1 className="text-black text-6xl font-semibold font-sans pt-1">work happens</h1>
              <p className="text-black font-normal text-xl mt-7">With channels in Slack, you and your team know </p>
              <p className="text-black font-normal text-xl">where to go to ask questions, share updates and </p>
              <p className="text-black font-normal text-xl">stay in the loop.</p>
              <div className="flex my-6">
                    <button className="text-white bg-violet-800 p-5 text-xs rounded-md font-semibold w-44">TRY FOR FREE</button>
                    <button className="text-violet-800 bg-[#f4ede3] border-2 p-5 text-xs rounded-md ml-2 border-violet-800 font-semibold w-44">CONTACT SALES</button>
              </div>  
        </div>
        <Image src="/soloo.png" alt="image" width={1200} height={300}></Image>
        
    N</div>
   </div>
  );
}
