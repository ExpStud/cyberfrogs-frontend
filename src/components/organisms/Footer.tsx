import { FC, useContext } from "react";
import { IconBar } from "@components";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeAnimation } from "src/constants";
import { ViewContext } from "@contexts";
import { useRouter } from "next/router";

interface Props {}

const Footer: FC<Props> = (props: Props) => {
  const {} = props;

  const { showView } = useContext(ViewContext);
  const router = useRouter();

  const getYear = () => new Date().getFullYear();

  return (
    <motion.footer
      className="p-6 lg:p-10 w-screen flex flex-col-reverse md:flex-row md:justify-center items-center gap-10 md:gap-0"
      key="footer"
      {...(router.pathname === "/" ? fadeAnimation(showView, 2) : {})}
    >
      <div className="flex justify-center md:justify-start items-center text-custom-white text-opacity-35 uppercase w-full md:w-1/3 text-sm md:pl-[6vw] font-rajdhani-semibold">
        ©{getYear()} cyber frogs™
      </div>
      <IconBar className="hidden md:!flex w-1/3  " />
      <div className="flex justify-center md:justify-end items-center text-custom-white text-opacity-35 uppercase w-full md:w-1/3  md:pr-[6vw]">
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
      {/* mobile */}
      <IconBar className="md:!hidden w-full !justify-center " />
    </motion.footer>
  );
};

export default Footer;
