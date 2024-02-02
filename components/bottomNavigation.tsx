'use client'

import React from "react";
import Link from "next/link";
import { ShipWheel, MessageCircleIcon, UserIcon } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";



const BottomNavigation = () => {
  const [isSelected, setIsSelected] = React.useState("")

  const handleNavigationClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    let target = event.target as HTMLInputElement;
    if (target.id === "") {
      return
    }
    setIsSelected(target.id)
  }

  return (
    <NavigationMenu>
      <NavigationMenuList className=" h-20 sm:hidden fixed bottom-0 left-0 right-0 bg-orange">
        <NavigationMenuItem className="flex-1" >
          <Link href="/profile" legacyBehavior passHref>
            <NavigationMenuLink id="questions" onClick={handleNavigationClick} className={"flex items-center justify-center flex-col h-20"}>
              <MessageCircleIcon id="questions" color="white" size={30} />
              {isSelected === "questions" && (
                <span id="questions" className="text-white">Questions</span>
              )}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="flex-1 ">
          <Link href="/profile" legacyBehavior passHref>
            <NavigationMenuLink id="sessions" onClick={handleNavigationClick} className={"text-center text-red flex items-center justify-center flex-col h-20"}>
              <ShipWheel id="sessions" color="white" size={30} className="pointer-events-none" />
              {isSelected === "sessions" && (
                <span id="sessions" className="text-white">Sessions</span>
              )}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="flex-1">
          <Link href="/profile" legacyBehavior passHref>
            <NavigationMenuLink id="profil" onClick={handleNavigationClick} className={`flex items-center justify-center flex-col h-20 ${isSelected === "profil" ? "bg-white-100" : ""}`}>
              <UserIcon id="profil" color="white" size={30} />
              {isSelected === "profil" && (
                <span id="profil" className="text-white">Profil</span>
              )}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu >
  );
};

export default BottomNavigation;