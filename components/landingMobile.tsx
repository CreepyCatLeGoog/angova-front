import Image from 'next/image';
import React from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import CarrouselFlag from './carrouselFlag';
const LandingMobile = () => {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className=" text-black flex flex-col justify-start items-center landingMobile" >
=======
    <div className=" text-black flex flex-col justify-start items-center" style={{ height: '93vh' }}>
>>>>>>> b7cd091 (landing mobile version done)
=======
    <div className=" text-black flex flex-col justify-start items-center landingMobile" >
>>>>>>> fd05449 (landing done, revoir taille star et boutton scroll)
      <Image
        src="/car.gif"
        alt="Angova"
        className="w-[60%]"
        width={214}    // Talwind gere la taille 
        height={214}   
      />
<<<<<<< HEAD
<<<<<<< HEAD
      {/* <iframe src="https://app.vectary.com/p/6xckN1fgrJjm4Qaam5n4Oz" frameborder="0" width="100%" height="480"></iframe> */}
=======
>>>>>>> b7cd091 (landing mobile version done)
=======
      {/* <iframe src="https://app.vectary.com/p/6xckN1fgrJjm4Qaam5n4Oz" frameborder="0" width="100%" height="480"></iframe> */}
>>>>>>> fd05449 (landing done, revoir taille star et boutton scroll)
      <div className="font-sans text-[30px] text-center font-bold mb-5">
        <p className="mb-2">  Hola !</p>
        
        <p>Le code de la route,<br/>
          traduit dans toutes <br/>
          les langues !  
        </p>
        
      </div>
      
      <CarrouselFlag/>

      <Button asChild className="bg-[#4591CD] w-[260px] h-10 hover:bg-[#4591CD] mb-4">
        <Link href="/login" className="font-sans text-[16px] text-center font-bold" >Connexion</Link>
      </Button>
      <Button asChild className="bg-[#F49E4C] w-[260px] h-10 hover:bg-[#F49E4C]">
        <Link href="#" className="font-sans text-[16px] text-center font-bold">S’inscrire gratuitement</Link>
<<<<<<< HEAD
<<<<<<< HEAD
       
=======
>>>>>>> b7cd091 (landing mobile version done)
=======
       
>>>>>>> fd05449 (landing done, revoir taille star et boutton scroll)
      </Button>
  
     

    </div>

  )
}

export default LandingMobile