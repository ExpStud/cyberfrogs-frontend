import { FC, useState } from "react";
import { CloseIcon, Logo, Menu, MenuIcon } from "@components";
import { AnimatePresence, motion } from "framer-motion";
import { midExitAnimation } from "@constants";

const HeaderContent: FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <div className="w-screen flex items-center justify-between px-6 lg:px-[8vw] py-3 lg:py-6  z-20">
      <Logo />
      {/* desktop nav */}
      {/* mobile nav */}
      <AnimatePresence mode="wait">
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

      <Menu toggleMenu={setOpenMenu} open={openMenu} />
    </div>
  );
};
export default HeaderContent;
