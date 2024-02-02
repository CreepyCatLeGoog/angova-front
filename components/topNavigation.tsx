'use client'

import React from 'react'
import Dropdown from './dropdown';
import { ChevronLeft, Settings } from "lucide-react";

interface TopNavigationProps {
  title?: string;
  isLanguage: boolean;
  isGear: boolean;
  isTitle: boolean;
}

const TopNavigation: React.FC<TopNavigationProps> = ({ title, isLanguage, isGear, isTitle }) => {
  return (
    <nav className="h-20 sm:hidden fixed top-0 left-0 right-0 border-2 border-b-gray-100 ">
      <div className="flex h-full justify-between items-end w-full pb-3">
        {isLanguage ? (
          <Dropdown />
        ) : (
          <div className='h-16 flex items-end justify-center w-20 cursor-pointer'>
            <ChevronLeft color="black" size={24} />
          </div>
        )}
        {isTitle && (
          <p className="leading-7 font-medium cursor-default">{title}</p>
        )}
        <div className='h-16 flex items-end justify-center w-20 cursor-pointer'>
          {isGear && (
            <Settings color="black" size={24} />
          )}
        </div>
      </div>
    </nav >
  )
}

export default TopNavigation