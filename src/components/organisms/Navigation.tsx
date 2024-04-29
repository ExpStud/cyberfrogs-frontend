import { FC, Fragment, useState } from "react";
import {
  CloseIcon,
  DiscordGreenIcon,
  Logo,
  Menu,
  MenuIcon,
  NavigationItem,
  ThorGreenIcon,
  TwitterGreenIcon,
} from "@components";
import { AnimatePresence, motion } from "framer-motion";
import {
  getSocialIconByName,
  midExitAnimation,
  navigationData,
} from "@constants";

const Navigation: FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className="nav-px py-3 lg:py-6 w-screen flex items-center justify-between gap-8 z-20">
      <Logo />

      {/* desktop nav */}
      <div className="hidden xl:flex gap-4 xl:gap-8 2xl:gap-10">
        {navigationData.map((nav, index) => (
          <Fragment key={index}>
            {nav?.component ? <nav.component /> : <NavigationItem item={nav} />}
          </Fragment>
        ))}
      </div>

      <div className="hidden xl:flex gap-4">
        <ThorGreenIcon url="/thor" />
        <DiscordGreenIcon url={getSocialIconByName("Discord")?.url as string} />
        <TwitterGreenIcon url={getSocialIconByName("Twitter")?.url as string} />
      </div>

      {/* mobile nav */}
      <AnimatePresence mode="wait">
        {!openMenu ? (
          <motion.div
            key="menu-icon"
            onClick={() => setOpenMenu(true)}
            className="cursor-pointer xl:hidden"
            {...midExitAnimation}
          >
            <MenuIcon />
          </motion.div>
        ) : (
          <motion.div
            key="clise-icon"
            onClick={() => setOpenMenu(false)}
            className="cursor-pointer z-[100] xl:hidden"
            {...midExitAnimation}
          >
            <CloseIcon />
          </motion.div>
        )}
      </AnimatePresence>

      <Menu toggleMenu={setOpenMenu} open={openMenu} />
    </div>
  );
};
export default Navigation;
