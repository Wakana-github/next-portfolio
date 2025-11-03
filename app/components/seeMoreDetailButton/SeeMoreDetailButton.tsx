"use client"
import { HiChevronDoubleDown } from "react-icons/hi";

interface MoreDetailButtonProps {
  onClick: () => void; 
  label?: string;       // buton text
}

export default function MoreDetailButton({ onClick, label = "See more details" }: MoreDetailButtonProps) {
  return (
    <button
      onClick={onClick}
      className="pink-to-blue text-white w-[200px] md:w-[250px] xl:w-[300px] py-3 px-2 my-5 rounded-xl flex items-center justify-center gap-2.5 1text-white cursor-pointer transition duration-300"
    >
      See More details
      <HiChevronDoubleDown className="w-5 h-5 md:w-8 md:h-8 xl:w-10 x:h-10 text-white"/>
    </button>
  );
}