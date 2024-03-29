import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import LandingMobile from "@/components/landingMobile";
import LandingDesktop from "@/components/landingDesktop";
import Navbar from "@/components/navbar";
import Image from 'next/image';
import Link from "next/link";
import { Heart, Instagram } from 'lucide-react';
import CarrouselFeedback from "@/components/carrouselFeedback";
import CarrouselTrustUs from "@/components/carrouselTrustUs";
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";
import { SignOut } from "@/components/auth-component";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ContactForm from "@/components/contactForm";

export default async function LandingPage() {


  const session = await auth();
  const user = session?.user;
  

  

 
  return user ? (
    <div>
      <MaxWidthWrapper>
        <Navbar />
      

        {/* TEST PURPOSES ONLY */}
        <h1>Logged in as {user.name}</h1>
        <p>Email: {user.email}</p>
        <Avatar>
          <AvatarImage
            src={user.image ?? "https://github.com/shadcn.png"}
            alt="@shadcn"
          />
          <AvatarFallback>{user.name.substring(0, 1)}</AvatarFallback>
        </Avatar>
        <SignOut />
      </MaxWidthWrapper>
    </div>
  ) : (
    <div>

    
      <MaxWidthWrapper>
        <Navbar />
        <div className="block lg:hidden "> <LandingMobile /> </div>
        <div className="hidden lg:block pt-12" style={{ height: '93vh' }}><LandingDesktop /> </div>
        <div className=" text-black flex flex-col justify-start items-center px-12 2xl:px-[20%] gap-[50px]  pt-[15px] md:mt-[6.5rem] " >
          <div className="w-[100%]">
            <h2 className="font-sans text-[23px] lg:text-[45px] font-bold "><span className="text-[#F49E4C]">An’gova</span> vous conduit à l'indépendance...</h2>

          </div>
          <div className="flex justify-between w-[100%] gap-[20px] ">
            <img
              src="/menWithEarth.png"
              alt="Angova"
              className="w-[141px] lg:w-[449px]  md:w-[280px] h-[121px]  md:h-auto lg:h-[377px]"
              width={141}   
              height={121}  
            />
            <div className=" flex flex-col justify-end mb-0 ml-0 lg:mb-12 lg:ml-14  ">
              <h3 className="font-sans text-[16px] font-semibold mb-4  md:text-[19px] lg:text-[40px] text-[#F49E4C]">Un apprentissage inclusif ! </h3>
              <p className="font-sans text-[10px] font-normal  md:text-[18px] lg:text-[28px] w-auto lg:w-[28vw]">
                An’gova à pour objectif 
                de rendre l'apprentissage 
                de la conduite accessible 
                à tout le monde.
              </p>
            </div>
          </div>
          <div className="flex justify-between w-[100%] gap-[20px]">
            
            <div className=" flex flex-col justify-end mb-0 ml-0 lg:mb-12 lg:ml-14  ">
              <h3 className="font-sans text-[16px] font-semibold mb-4   md:text-[19px] lg:text-[40px] text-[#F49E4C] ">Un problème ? </h3>
              <p className="font-sans text-[10px] font-normal md:text-[18px] lg:text-[28px] w-auto lg:w-[28vw]">
              En cas d'incompréhension de la langue française, les solutions sont rares et coûteuses. 
              Avec An’gova découvrez un accès facile et rapide du code de la route !
              </p>
            </div>
            <img
              src="/menWithEarth.png"
              alt="Angova"
              className="w-[141px] md:w-[280px] lg:w-[449px] h-[121px]  md:h-auto lg:h-[377px]"
              width={141}   
              height={121}  
            />
          </div>
          <div className="flex justify-between w-[100%] gap-[20px]">
            <img
              src="/earthFlag.png"
              alt="Angova"
              className="w-[120px] md:w-[240px] lg:w-[450px] md:h-[240px] h-[120px] lg:h-[450px] "
              width={141}   
              height={121}  
            />
            <div className=" flex flex-col justify-end mb-0 ml-0 lg:mb-12 lg:ml-14  ">
              <h3 className="font-sans text-[16px] font-semibold mb-4 lg:text-[40px] md:text-[19px] text-[#F49E4C] ">LA solution !! </h3>
              <p className="font-sans text-[10px] font-normal lg:text-[28px] w-auto md:text-[18px] lg:w-[28vw]">
                An’gova propose le code de la route traduit en Langue des signes
                Française et dans un large choix langues !
              </p>
              <Button asChild className="bg-[#F49E4C] w-[65px] h-[25px] lg:w-[150px] lg:h-[35px] hover:bg-[#F49E4C] rounded mt-0 lg:mt-6">
                <Link href="#" className="font-sans text-[10px] text-center font-medium">Essayer</Link>
              </Button>
            </div>
          </div>
         
        </div>
        <div className= "h-[100vh] md:h-auto">
          <div className=" text-black flex flex-col justify-start  pt-[1.5rem] md:mt-[7.5rem] lg:mt-[10rem] h-[52%]   md:h-auto">
            <div className="flex  justify-center  items-center  mb-0 xl:mb-[5rem]"> <h3 className="font-sans text-[16px] md:text-[24px]  lg:text-[30px] font-semibold mr-2">Vos avis</h3> <Heart fill="#111"/>  </div>
            <CarrouselFeedback/>
            <h2 className="font-sans text-[16px] md:text-[23px]  lg:text-[30px] md:text-center font-semibold mt-[4rem] xl:mt-[8rem] pl-[28px]">Ils nous font <span className="text-[#F49E4C]">confiance :</span></h2>
            <CarrouselTrustUs/>
          </div>
          <div className="  flex flex-col justify-between  items-center bg-[#4591CD] pt-3 h-[48%] 2xl:mt-[15px]  md:h-auto" >
           
            
            <div className=" flex flex-col justify-start  items-center w-[100%] mb-0 md:mb-20">
              <div  className="flex flex-col justify-start  items-center md:flex-row text-white font-sans text-[15px] md:text-[20px] font-bold my-0 md:my-4 ">
                <h2>Une question ? </h2>
                <h2 className=" ml-0 md:ml-2">Contactez-nous ! </h2>
              </div>
             
              <ContactForm/>
            </div>
            
            <div className="flex flex-col w-screen justify-between  items-start  h-[70px]"> 
              <div className="flex w-screen justify-center  items-center  h-[70px]"> 
                <Instagram  style={{ color: 'white', marginRight : 12 }}/>
                <Image
                  src="/linkedin.png"
                  alt="linkedin"
                  className="w-[1.5em] h-[1.5em] mr-[12px]"
                  width={25}   
                  height={25}  
                />  
                <Image
                  src="/tiktok.png"
                  alt="tiktok"
                  className="w-[1.5em] h-[1.5em] "
                  width={25}   
                  height={25}  
                />  
              </div>
              <div className="flex w-screen justify-center  items-center pb-4"> 
                <p className="text-white text-[9px] font-medium">Copywright Angova</p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
