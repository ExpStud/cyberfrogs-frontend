import { FC, Fragment, useState } from "react";
import {
  CloseIcon,
  HeaderIcons,
  Logo,
  Menu,
  MenuIcon,
  NavigationItem,
} from "@components";
import { AnimatePresence, motion } from "framer-motion";
import { midExitAnimation, navigationData } from "@constants";

const Navigation: FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className="page-spacing pt-1 md:pt-3 lg:pt-6 w-screen flex items-center justify-between gap-8 z-20">
      <Logo />

      {/* desktop nav */}
      <div className="hidden xl:flex gap-4 xl:gap-8 2xl:gap-10">
        {navigationData.map((nav, index) => (
          <Fragment key={index}>
            {nav?.component ? <nav.component /> : <NavigationItem item={nav} />}
          </Fragment>
        ))}
      </div>

      <HeaderIcons className="hidden xl:!flex " />

      {/* mobile nav */}
      <div className="flex xl:hidden gap-10">
        <AnimatePresence mode="wait">
          {!openMenu ? (
            <motion.div
              key="menu-icon"
              onClick={() => setOpenMenu(true)}
              className="cursor-pointer "
              {...midExitAnimation}
            >
              <MenuIcon />
            </motion.div>
          ) : (
            <motion.div
              key="close-icon"
              onClick={() => setOpenMenu(false)}
              className="cursor-pointer z-[100] "
              {...midExitAnimation}
            >
              <CloseIcon />
            </motion.div>
          )}
        </AnimatePresence>

        <Menu toggleMenu={setOpenMenu} open={openMenu} />
      </div>
    </div>
  );
};
export default Navigation;
