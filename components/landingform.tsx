import Image from 'next/image';
import React from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Carrousel from './carrousel';
const LandingForm = () => {
  return (
    <div className=" text-black h-screen flex flex-col justify-start items-center">
      <Image
        src="/car.gif"
        alt="Angova"
        className="w-[60%]"
        width={214}    // Talwind gere la taille 
        height={214}   
      />
      <div className="font-sans text-[30px] text-center font-bold">
        <p className="mb-2">  Hola !</p>
        
        <p>Le code de la route,<br/>
          traduit dans toutes <br/>
          les langues !  
        </p>
        
      </div>
      <Carrousel/>
      
        <Button asChild className="bg-[#4591CD] w-[220px] h-12 hover:bg-[#4591CD] mb-3">
          <Link href="#">Connexion</Link>
        </Button>
        <Button asChild className="bg-[#F49E4C] w-[220px] h-12 hover:bg-[#F49E4C]">
          <Link href="#">S’inscrire gratuitement</Link>
        </Button>
  
     

    </div>

  )
}

export default LandingForm