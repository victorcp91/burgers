import { Link } from "../Link/Link";
import { IFooterProps } from "./Footer.styles";

export const Footer = ({ linkColor }: IFooterProps) => {
  return (
    <footer className="pb-16 bg-secondaryBackground">
      <Link href="" label="View allergy information" color={linkColor} />
    </footer>
  );
};
