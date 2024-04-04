'use client'

import React from 'react';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import TopNavigation from "@/components/TopNavigation";
import BottomNavigation from "@/components/BottomNavigation";
import ProfileForm from "@/components/ProfileForm";
import { Button  } from "@/components/ui/button";
import { InputFile } from '@/components/ui/inputFile';
import { Pen } from "lucide-react";

const UpdatePage = () => {
  const userData = {
    firstName: "Eddy",
    lastName: "Wall",
    userName: "eddwall",
    password: "password",
    mail: "eddywall@gmail.com",
    image_url: "https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg",
    inscription_date: new Date()
  }

  const [user, setUser] = React.useState(userData);
  const [openAvatarModifier, setOpenAvatarModifier] = React.useState(false)


  const handleAvatarModifier = (e: any) => {
    console.log('open')
    e.preventDefault();
    e.stopPropagation();
    setOpenAvatarModifier(!openAvatarModifier)
  }

  const closeAvatarModifier = () => {
    console.log('close')

    setOpenAvatarModifier(false)
  }

  return (
    <MaxWidthWrapper>
      <TopNavigation title="Modifier mon profil" isTitle={true} isLanguage={false} isGear={false} />
      <div  className="h-32 mb-4 flex justify-center flex-col items-center relative z-30 sm:h-fit sm:mt-5 sm:mb-0">
        <div onClick={closeAvatarModifier} className="w-2/6 relative flex justify-center items-center">
        <div className="w-16 h-16 rounded-full mb-4 overflow-hidden items-center border-2 border-white ring-2 ring-orange sm:h-36 sm:w-36 relative ">
          {user.image_url ? 
          (<div>
            <img src={user.image_url} alt="Profile" className="object-cover w-full h-full relative" />
          </div>) :
          (null)}
        </div>
        <div className="w-5 h-5 rounded-full overflow-hidden border-2 m-2 flex items-center justify-center absolute top-0 right-7 mr-1 sm:right-10 lg:right-32 lg:w-10 lg:h-10 bg-actionblue">
          <Pen strokeWidth={2} color="white" size={20} className="sm:inline hidden"/>
          <Pen strokeWidth={2} color="white" size={10} className="sm:hidden inline"/>
        </div>
      </div>
      <InputFile className={`${openAvatarModifier ? "visible": "hidden"}`}></InputFile>
      <p onClick={handleAvatarModifier} className={`text-gray-400 text-xs underline cursor-pointer ${openAvatarModifier ? "hidden": "visible"} z-100 sm:text-lg`}>Modifier mon avatar</p>
      </div>
      <h2 className="font-bold hidden sm:inline ml-56 sm:text-xl">Modifier mon profil</h2>
      <div className="flex sm:justify-center justify-center sm:mt-4">
        <ProfileForm {...user} setUser={setUser} />
      </div>
      <div className="h-36 flex items-center justify-around flex-col mt-14 z-0">
        <Button className="bg-orange mb-2 w-4/5 sm:w-2/3">Deconnexion</Button>
        <p className="color-black underline cursor-pointer">Supprimer mon compte</p>
      </div>
    </MaxWidthWrapper>
  );
}

export default UpdatePage;
