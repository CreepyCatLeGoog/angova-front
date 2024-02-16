"use client";

import React from "react";
import Image from "next/image";
import Dropdown from "./dropdown";

const ubuntu = Ubuntu({
  weight: ['400', '500', '700', '300'],
  subsets: ['latin'],
})
 
const Navbar = () => {
  return (
    <nav className="w-full relative z-20 flex-col flex-grow md:pb-0 md:px-0  md:flex md:justify-between md:flex-row  border-[DEDEDE] border-b-2">
      <div className="flex justify-between items-center w-full mt-3 mb-3">
        <Dropdown />
        <div className='mr-6'>
          <Image
            src={'/logo.png'}
            alt="Angova"
            width={90}
            height={40}
          />
        </div>
      </div>
      <div className="hidden lg:flex justify-between items-center w-full mt-3 mb-3 pl-[4%] pr-[8rem] xl:pl-[15%] xl:pr-[10rem]">
        
        <div className='mr-6'>
          <Image
            src={'/logo.png'}
            alt="Angova"
            width={140}
            height={60}
          />
        </div>
        <div className='flex  justify-center items-center'>
          <div className={ubuntu.className}> <Dropdown   /></div>
          <Button asChild className="bg-transparent border border-[#4591CD] text-[#4591CD] hover:text-white  w-[260px] h-[40px] hover:bg-[#4591CD] ml-14 mr-5">
            <Link href="#" className="font-sans text-[16px] text-[#4591CD]  text-center font-extrabold">Connexion</Link>
          </Button>
          <Button asChild className="bg-[#F49E4C] w-[260px] h-[40px] hover:bg-[#F49E4C]">
            <Link href="#" className="font-sans text-[16px] text-center font-extrabold">S’inscrire gratuitement</Link>
          </Button>
        </div>
        
       
      </div>
    </nav>
  );
};

export default Navbar;
