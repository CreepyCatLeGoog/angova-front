"use client";

import React from "react";
import Dropdown from "./dropdown";
import { useRouter } from "next/navigation";
import { ChevronLeft, Settings } from "lucide-react";

interface TopNavigationProps {
  title?: string;
  isLanguage: boolean;
  isGear: boolean;
  isTitle: boolean;
}

const TopNavigation: React.FC<TopNavigationProps> = ({
  title,
  isLanguage,
  isGear,
  isTitle,
}) => {
  const router = useRouter();

  const handleReturnHistory = () => {
    router.back();
  };
  return (
    <div className="block bg-white shadow">
      <nav className="h-20 sm:hidden border-2 border-b-gray-100 text-lg">
        <div className="flex h-full justify-between items-end w-full pb-3">
          {isLanguage ? (
            <Dropdown />
          ) : (
            <div className="h-16 flex items-end justify-center w-20 cursor-pointer">
              <ChevronLeft
                color="black"
                size={24}
                onClick={handleReturnHistory}
              />
            </div>
          )}
          {isTitle && (
            <p className="leading-7 font-medium cursor-default">{title}</p>
          )}
          <div className="h-16 flex items-end justify-center w-20 cursor-pointer">
            {isGear && <Settings color="black" size={24} />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopNavigation;
