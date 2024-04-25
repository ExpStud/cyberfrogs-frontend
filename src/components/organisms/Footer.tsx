import { FC } from "react";
import { Copyright, IconBar, LegacyWebsiteButton } from "@components";

const Footer: FC = () => {
  return (
    <footer
      className="p-6 lg:p-10 w-screen flex flex-col-reverse md:flex-row md:justify-center items-center gap-10 md:gap-0"
      key="footer"
    >
      <Copyright className="w-full md:w-1/3  md:pl-[6vw]" />
      <IconBar className="hidden md:!flex w-1/3  " />
      <LegacyWebsiteButton className="flex justify-center md:justify-end items-center text-cf-white text-opacity-35 uppercase w-full md:w-1/3  md:pr-[6vw]" />
      {/* mobile */}
      <IconBar className="md:!hidden w-full !justify-center " />
    </footer>
  );
};

export default Footer;
