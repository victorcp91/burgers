import Image from "next/image";
import { searchIcon } from "@/assets/icons";
import { ISearchInput } from "./SearchInput.types";
import { useEffect, useRef, useState } from "react";

const TIME_BEFORE_UPDATE = 1000;

export const SearchInput = ({
  change,
  onChangeTyping,
  ...props
}: ISearchInput) => {
  const typingTimer = useRef<NodeJS.Timeout>();

  const [localValue, setLocalValue] = useState(props.value);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    onChangeTyping(isTyping);
  }, [isTyping, onChangeTyping]);

  const typing = (value: string) => {
    setLocalValue(value);
    clearTimeout(typingTimer.current);
    if (!value) {
      change(value);
      setIsTyping(false);
    } else {
      setIsTyping(true);
      typingTimer.current = setTimeout(() => {
        change(localValue as string);
        setIsTyping(false);
      }, TIME_BEFORE_UPDATE);
    }
  };

  return (
    <div className="flex h-10 w-[cal(100% - 2rem)] rounded-[7.29px] border-[0.91px] border-inputBorder bg-white">
      <Image src={searchIcon} alt="Buscar" className="m-3" />
      <input
        className="w-full h-full bg-transparent outline-none lg:placeholder:text-[#2C2C2C]"
        {...props}
        value={localValue}
        onChange={(e) => typing(e.currentTarget.value)}
      />
    </div>
  );
};
