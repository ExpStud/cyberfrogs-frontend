import { FC, Fragment, useState } from "react";
import { CloseIcon, Logo, Menu, MenuIcon, NavigationItem } from "@components";
import { AnimatePresence, motion } from "framer-motion";
import { midExitAnimation, navigationData } from "@constants";

const Navigation: FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className="nav-px py-3 lg:py-6 w-screen flex items-center justify-between z-20 ">
      <Logo />

      {/* desktop nav */}
      <div className="flex gap-3 xl:gap-10">
        {navigationData.map((nav, index) => (
          <Fragment key={index}>
            {nav?.component ? <nav.component /> : <NavigationItem item={nav} />}
          </Fragment>
        ))}
      </div>

      {/* mobile nav */}
      {/* <AnimatePresence mode="wait">
        {!openMenu ? (
          <motion.div
            key="menu-icon"
            onClick={() => setOpenMenu(true)}
            className="cursor-pointer lg:hidden"
            {...midExitAnimation}
          >
            <MenuIcon />
          </motion.div>
        ) : (
          <motion.div
            key="clise-icon"
            onClick={() => setOpenMenu(false)}
            className="cursor-pointer z-[100] lg:hidden"
            {...midExitAnimation}
          >
            <CloseIcon />
          </motion.div>
        )}
      </AnimatePresence>

      <Menu toggleMenu={setOpenMenu} open={openMenu} /> */}
    </div>
  );
};
export default Navigation;
