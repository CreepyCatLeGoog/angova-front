"use client"

import React from 'react';

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface InputLabelProps {
  id: string
  placeholder: string
  value: string;
  type: string


  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}
 
const InputLabel: React.FC<InputLabelProps> = ({id, placeholder, value, type, onChange}) => {
  const capitalizedPlaceholder =  placeholder.charAt(0).toUpperCase()+ placeholder.slice(1)
  return (
    <div id={id} className="grid w-full max-w-sm items-center gap-1.5 text-base lg:h-20">
      <Label  htmlFor={placeholder} className="text-orange sm:text-base text-sm">{capitalizedPlaceholder}</Label>
      <Input onChange={(e) => onChange(e)} type={type} id={id} placeholder={capitalizedPlaceholder} value={value} className="border-2 border-gray-300 p-2 mb-4 text-sm"/>
    </div>
  )
}

export default InputLabel