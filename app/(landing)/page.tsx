"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import LandingMobile from "@/components/landingMobile"
import Navbar from "@/components/navbar"
import Image from 'next/image';
import Link from "next/link"
import FavoriteIcon from '@mui/icons-material/Favorite';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CarrouselFeedback from "@/components/carrouselFeedback";
import CarrouselTrustUs from "@/components/carrouselTrustUs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Le nom d'utilisateur doit comporter au moins 2 caractères.",
  }),
  mail: z
    .string()
    .min(1, { message: "Ce champ doit être rempli." })
    .email("Le courrier doit être un mail valide"),
 
  message: z.string().min(10, {
    message: "Le message doit comporter au moins 10 caractères.",
  }),
})

const LandingPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      mail: "",
      message: ""
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  return (
    <>
      <MaxWidthWrapper>
        <Navbar />
        <LandingMobile /> 
        <div className=" text-black flex flex-col justify-start items-center " style={{ height: '100vh', padding: "28px" }}>
          <h2 className="font-sans text-[23px] font-bold mb-[7vh]"><span className="text-[#F49E4C]">An’gova</span> vous conduit à l'indépendance...</h2>
          <div className="flex mb-20">
            <Image
              src="/menWithEarth.png"
              alt="Angova"
              className="w-[141px] h-[121px] mr-8"
              width={141}   
              height={121}  
            />
            <div className=" flex flex-col justify-start ">
              <h3 className="font-sans text-[16px] font-medium mb-4">Un apprentissage inclusif ! </h3>
              <p className="font-sans text-[10px] font-normal text-[#F49E4C]">
                An’gova à pour objectif 
                de rendre l'apprentissage 
                de la conduite accessible 
                à tout le monde.
              </p>
            </div>
          </div>

          <div className="flex  mb-20">
            
            <div className=" flex flex-col justify-start ">
              <h3 className="font-sans text-[16px] font-medium  mb-4">Un problème ?</h3>
              <p className="font-sans text-[10px] font-normal text-[#F49E4C]">
                En cas d'incompréhension de la langue française, les solutions sont rares et coûteuses. 
                Avec An’gova découvrez un accès facile et rapide du code de la route !
              </p>
            </div>
            <Image
              src="/menWithEarth.png"
              alt="Angova"
              className="w-[141px] h-[121px] ml-8"
              width={141}   
              height={121}  
            />
          </div>

          <div className="flex ">
            <Image
              src="/menWithEarth.png"
              alt="Angova"
              className="w-[141px] h-[121px] mr-8"
              width={141}   
              height={121}  
            />
            <div className=" flex flex-col justify-start ">
              <h3 className="font-sans text-[16px] font-medium mb-4">LA solution ! </h3>
              <p className="font-sans text-[10px] font-normal text-[#F49E4C] mb-2">
                An’gova propose le code de la route traduit en Langue des signes Française et dans un large choix langues !
              </p>
              <Button asChild className="bg-[#F49E4C] w-[65px] h-[25px] hover:bg-[#F49E4C] rounded">
                <Link href="#" className="font-sans text-[10px] text-center font-medium">Essayer</Link>
              </Button>
            </div>
          </div>
         
        </div>
        <div  style={{ height: '100vh'}}>
          <div className=" text-black flex flex-col justify-start  pt-[1.5rem]" style={{ height: '52%' }}>
            <div className="flex  justify-center  "> <h3 className="font-sans text-[16px] font-semibold mr-2 ">Vos avis</h3> <FavoriteIcon/>  </div>
            <CarrouselFeedback/>
            <h2 className="font-sans text-[16px] font-semibold mt-[4rem] pl-[28px]">Ils nous font <span className="text-[#F49E4C]">confiance :</span></h2>
            <CarrouselTrustUs/>
          </div>
          <div className="  flex flex-col justify-between  items-center bg-[#4591CD] pt-3" style={{ height: '48%' }}>
           
            
            <div className=" flex flex-col justify-start  items-center w-[100%]">
              <h2 className="text-white font-sans text-[15px] font-semibold ">Une question ? </h2>
              <h2 className="text-white font-sans text-[15px] font-semibold ">Contactez-nous ! </h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-[70%] mt-[20px] flex flex-col justify-center  items-center" >
                  <FormField
                    control={form.control}
                    name="username"
                  
                    render={({ field }) => (
                      <FormItem  className = "w-[100%]">
                        <FormControl>
                          <Input placeholder="Nom" {...field} style={{ borderRadius: '8px', height: "27px", fontSize: "10px"}} />
                        </FormControl>                      
                        <FormMessage style={{fontSize: "10px"}} />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="mail"
                  
                    render={({ field }) => (
                      <FormItem  className = "w-[100%]">
                        
                        <FormControl>
                          <Input placeholder="Mail" {...field} style={{ borderRadius: '8px', height: "27px", fontSize: "10px" }} />
                        </FormControl>
                        
                        <FormMessage style={{fontSize: "10px"}} />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                  
                    render={({ field }) => (
                      <FormItem  className = "w-[100%]">                       
                        <FormControl>
                          <Textarea placeholder="Message" {...field} style={{ borderRadius: '8px', fontSize: "10px"}} />
                        </FormControl>
                        <FormMessage style={{fontSize: "10px"}} />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="bg-[#F49E4C] font-medium" style={{ borderRadius: '6px', height: "25px", fontSize: "10px", width:"50%" }} >Envoyer</Button>
                </form>
                

              </Form>
            </div>
            
            <div className="flex flex-col w-screen justify-between  items-start  h-[70px]"> 
              <div className="flex w-screen justify-center  items-center  h-[70px]"> 
                <InstagramIcon  style={{ color: 'white', marginRight : 12 }}/>
                <LinkedInIcon style={{ color: 'white', marginRight : 12  }}/>
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
    </>
  )
}

export default LandingPage