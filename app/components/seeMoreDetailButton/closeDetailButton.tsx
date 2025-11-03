"use client"
import { HiChevronDoubleUp } from "react-icons/hi";

interface MoreDetailButtonProps {
  onClick: () => void; 
  label?: string;       // buton text
}

export default function CloseDetailButton({ onClick, label = "close Details" }: MoreDetailButtonProps) {
  return (
    <button
      onClick={onClick}
      className="pink-to-blue w-[200px] md:w-[250px] xl:w-[300px] py-3 px-2 my-5 rounded-xl flex items-center justify-center gap-2.5 text-white cursor-pointer transition duration-300"
    >
      Close details
      <HiChevronDoubleUp className="w-5 h-5 md:w-8 md:h-8 xl:w-10 x:h-10 text-white"/>
    </button>
  );
}