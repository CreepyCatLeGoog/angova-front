'use client'


import React, { Dispatch, SetStateAction } from "react";
import  InputLabel from "./InputLabel";
import { Button } from "./ui/button";

interface ProfileFormProps {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  mail: string 
  image_url: string;
  inscription_date: Date;

  setUser: Dispatch<SetStateAction<{ firstName: string; lastName: string; userName: string; password: string; mail: string; image_url: string; inscription_date: Date; }>>;
}

const ProfileForm: React.FC<ProfileFormProps> = ({firstName, lastName, userName, password, mail, image_url, inscription_date, setUser}) => {
  // this needs to be updated with context, we need to save info when user click on save. (2 states needed)
  const handleFormUser = (e: React.FormEvent<HTMLInputElement>) => {
    const user = {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      password: password,
      mail: mail,
      image_url: image_url,
      inscription_date: inscription_date,
      [e.currentTarget.id]: e.currentTarget.value
    }

    setUser(user)
  }

  return (
    <div className="h-[480px] relative flex flex-col px-8 pt-2 justify-center  rounded-md shadow bg-white mx-8 sm:h-[550px] sm:justify-center sm:items-center sm:w-2/3">
      <InputLabel onChange={(e: React.FormEvent<HTMLInputElement>) => handleFormUser(e)} id="firstName" placeholder="first name" value={firstName} type="text"/>
      <InputLabel onChange={(e: React.FormEvent<HTMLInputElement>) => handleFormUser(e)} id="lastName" placeholder="last name" value={lastName} type="text"/>
      <InputLabel onChange={(e: React.FormEvent<HTMLInputElement>) => handleFormUser(e)} id="userName" placeholder="user name" value={userName} type="text"/>
      <InputLabel onChange={(e: React.FormEvent<HTMLInputElement>) => handleFormUser(e)} id="mail" placeholder="email" value={mail} type="email"/>
      <InputLabel onChange={(e: React.FormEvent<HTMLInputElement>) => handleFormUser(e)} id="password" placeholder="password" value={password} type="password"/>

      <Button className="absolute w-2/3 left-1/2 -bottom-6 transform -translate-x-1/2 bg-actionblue sm:w-1/4">Sauvegarder</Button>    </div>
  );
};

export default ProfileForm;