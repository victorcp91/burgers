import { ILinkProps } from "./Link.types";

export const Link = ({ label, href }: ILinkProps) => {
  return (
    <div className="p-6 border-b-[1px] border-border lg:mb-5 bg-transparent lg:invisible">
      <a
        href={href}
        target="_blank"
        className="block w-full text-center rounded-full underline text-base font-bold bg-white"
      >
        {label}
      </a>
    </div>
  );
};
