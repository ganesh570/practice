import Image from "next/image";

const Navbar=()=>{
    return (
        <div className="  bg-white">
            <div className="flex max-w-screen-2xl mx-auto justify-between">
               
                    <div className="flex items-center justify-evenly h-16">
                        <div className="flex pr-3">
                            <div className="flex items-center pr-2">
                            <Image src="/download.png" alt="Image" width={25} height={25}></Image>
                            </div>
                        <div className="flex items-center">
                        <a href="/" className="text-black text-3xl font-bold">
                                slack
                            </a>
                        </div>
                            
                        </div>
                        <div className="flex text-black ml-5">Why Slack?</div>
                        <div className="flex text-black ml-5">Solutions</div>
                        <div className="flex text-black ml-5">Resources</div>
                        <div className="flex text-black ml-5">Enterprise</div>
                        <div className="flex text-black ml-5">Pricing</div>
                    </div>
                    
           
            <div className="flex items-center">
            <div className="flex text-black mr-5">Sign in</div>
            <button className="text-white bg-violet-800 p-5 text-xs rounded-md font-semibold">GET STARTED</button>
            </div>
        </div>
        </div>
    )
}

export default Navbar;