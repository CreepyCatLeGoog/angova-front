'use client'

import React from "react";
import Link from "next/link";
import { ShipWheel, MessageCircleIcon, UserIcon } from "lucide-react";
import { usePathname } from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";



const BottomNavigation = () => {


  return (
    <NavigationMenu>
      <NavigationMenuList className=" h-20 sm:hidden fixed bottom-0 left-0 right-0 bg-orange">
        <NavigationMenuItem className="flex-1" >
          <Link href="/profile" legacyBehavior passHref>
            <NavigationMenuLink id="questions" className={"flex items-center justify-center flex-col h-20"}>
              <MessageCircleIcon id="questions" color="white" size={30} />
              {usePathname() === "questions" && (
                <span id="questions" className="text-white">????????</span>
              )}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="flex-1 ">
          <Link href="/session" legacyBehavior passHref>
            <NavigationMenuLink id="sessions" className={"text-center text-red flex items-center justify-center flex-col h-20"}>
              <ShipWheel id="sessions" color="white" size={30} className="pointer-events-none" />
              {usePathname() === "/session" && (
                <span id="sessions" className="text-white">Sessions</span>
              )}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="flex-1">
          <Link href="/profile" legacyBehavior passHref>
            <NavigationMenuLink id="profil" className={"flex items-center justify-center flex-col h-20"}>
              <UserIcon id="profil" color="white" size={30} />
              {usePathname() === "/profile" && (
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