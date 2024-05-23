import { FC } from "react";
import { Copyright, IconBar, LegacyWebsiteButton } from "@components";

interface Props {}
const Footer: FC<Props> = (props: Props) => {
  const {} = props;

  return (
    <footer
      className="page-spacing relative py-6 lg:py-8 w-screen flex flex-col-reverse md:flex-row md:justify-center items-center gap-6 md:gap-0"
      key="footer"
    >
      <Copyright className="w-full md:w-1/3" />
      <IconBar className="hidden md:!flex w-1/3  " />
      {/* <LegacyWebsiteButton className="flex justify-center md:justify-end items-center text-cf-white text-opacity-35 uppercase w-full md:w-1/3 " /> */}
      <div className="flex justify-center md:justify-end items-center text-cf-white text-opacity-35 uppercase w-full md:w-1/3 text-sm font-rajdhani-semibold">
        Terms of Service
      </div>
      {/* mobile */}
      <IconBar className="md:!hidden w-full !justify-center " />
    </footer>
  );
};

export default Footer;
