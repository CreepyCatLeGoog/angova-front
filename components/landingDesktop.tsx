import Image from 'next/image';
import React from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import flags from "../lib/roundedFlags.json"
import { ChevronRight } from 'lucide-react';

const LandingDesktop = () => {
  return (
    <div className=" text-black flex flex-col justify-start items-center" > 
      <div className="font-sans  text-center font-bold ">
        
        
        <p className='text-[50px]'>Le code de la route...
          
        </p>
        <p className='text-[40px]'>Traduit dans toutes 
          les langues !  </p>
        
      </div>
      <div className='flex gap-10 justify-start items-center my-14'>
        {flags.map((flag, index) => (
         
          <img className='w-[45px]' src={flag.flag} alt={flag.name}/>
        
        ))}
      </div>
      <Button asChild className="bg-[#F49E4C] w-[230px] h-10 flex items-center px-2 justify-between hover:bg-[#F49E4C] mb-7">
        <Link href="#" className="font-sans text-[16px] text-center font-bold">
          <div className="flex justify-between items-center bg-[#F49E4C] w-[230px] h-10 rounded-md px-2 hover:bg-[#F49E4C]">
           
            <span className="font-sans text-[16px] font-bold">
              Essayer GRATUITEMENT
            </span> 
            <ChevronRight/>
          </div>
        </Link>

      </Button>
      <Image
        src="/car.gif"
        alt="Angova"
        className="w-[30%]  max-w-[381px]"
        width={214}    // Talwind gere la taille 
        height={214}   
      />
 
     
      

    
     

    </div>

  )
}

export default LandingDesktop