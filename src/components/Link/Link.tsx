import { ILinkProps } from "./Link.types";

export const Link = ({ label, href, color }: ILinkProps) => {
  return (
    <div className="p-6 border-b-[1px] border-border mb-5">
      <a
        href={href}
        target="_blank"
        className="block w-full text-center rounded-full underline text-base font-bold"
        style={{ backgroundColor: color }}
      >
        {label}
      </a>
    </div>
  );
};
