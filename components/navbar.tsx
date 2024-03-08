"use client"

import React from 'react';
import Image from 'next/image';
import Dropdown from './dropdown';

const Navbar = () => {

  return (
    <nav className="w-screen relative z-20 flex-col flex-grow md:pb-0 md:px-0  md:flex md:justify-between md:flex-row  border-[DEDEDE] border-b-2">
      <div className="flex justify-between items-center w-full mt-3 mb-3">
        <Dropdown />
        <div className='mr-6'>
          <Image
            src={'/logo.png'}
            alt="Angova"
            width={90}
            height={40}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

