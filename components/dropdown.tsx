import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import flags from "../lib/flags.json";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="nav" className="bg-white">
          <Image
            src={"/flags/squared/fr.png"}
            alt="France"
            width={24}
            height={24}
          />
          <span className="text-lg ml-2">
            {isOpen ? (
              <ChevronUp color="black" />
            ) : (
              <ChevronDown color="black" />
            )}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 w-40">
        <DropdownMenuGroup>
          {flags.map((flag, index) => (
            <DropdownMenuItem key={index}>
              <div className="flex items-center space-x-2 cursor-pointer py-2 text-sm text-gray-700 dark:text-gray-400">
                <Image src={flag.flag} alt={flag.name} width={24} height={24} />
                <span>{flag.name}</span>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
