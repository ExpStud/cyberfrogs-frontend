import { FC } from "react";
import { IconBar } from "@components";
import Image from "next/image";

interface Props {}
const Footer: FC<Props> = (props: Props) => {
  const getYear = () => new Date().getFullYear();

  return (
    <footer
      className="p-10 w-screen flex flex-col-reverse md:flex-row md:justify-center items-center gap-12 md:gap-0"
      key="footer"
    >
      <div className="flex justify-center md:justify-start items-center text-white text-opacity-35 uppercase w-full md:w-1/3 xl:w-1/4 text-sm">
        ©{getYear()} cyber frogs™
      </div>
      <IconBar className="hidden md:!flex w-1/3 xl:w-1/4" />
      <div className="flex justify-center md:justify-end items-center text-white text-opacity-35 uppercase w-full md:w-1/3 xl:w-1/4">
        <a
          href="https://cyberfrogs.io/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            src={"/images/button/legacy-website.png"}
            width={157}
            height={30}
            alt="Legacy Site"
          />
        </a>
      </div>
      <IconBar className="md:!hidden w-full !justify-center " />
    </footer>
  );
};

export default Footer;
