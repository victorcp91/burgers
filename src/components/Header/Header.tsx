import React from "react";
import Image from "next/image";

export const Header = ({ imageSrc, alt }: IHeaderProps) => {
  return (
    <div className="relative w-full h-[9.375rem]">
      <Image
        src={imageSrc}
        alt={alt}
        fill
        sizes="100vw"
        priority
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};
