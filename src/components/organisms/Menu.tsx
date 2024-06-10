import { Dispatch, FC, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowIcon, CloseIcon, HeaderIcons, MenuItem } from "@components";
import { useLockBodyScroll, useWindowSize } from "@hooks";
import { fadeVariants, midExitAnimation, navigationData } from "@constants";
interface Props {
  toggleMenu: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

const Menu: FC<Props> = (props: Props) => {
  const { toggleMenu, open } = props;
  const [winWidth] = useWindowSize();

  const isMobile: boolean = winWidth < 730;
  //stop page scroll (when modal or menu open)
  useLockBodyScroll(open);

  return (
    <AnimatePresence mode="wait" initial={false}>
      {open && (
        <motion.div
          key="main-menu"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: isMobile ? winWidth - 15 : 720, opacity: 1 }}
          exit={{
            width: 0,
            transition: { duration: 0.5 },
            opacity: 1,
          }}
          transition={{ duration: 0.7 }}
          className=" bg-cf-green-900 fixed top-0 right-0 z-50 h-full"
        >
          <motion.div
            className="explorer-scroll px-4 sm:px-6 lg:px-10 py-6 relative h-full flex flex-col justify-between overflow-auto"
            variants={fadeVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <CloseIcon
              onClick={() => toggleMenu(false)}
              className="cursor-pointer self-end !min-w-[30px] !min-h-[30px]"
            />
            <div className="mt-10 ml-2 mr-4 md:mx-6 flex flex-col flex-grow">
              {navigationData.map((nav, index) => (
                <MenuItem key={index} item={nav} />
              ))}
            </div>
            <HeaderIcons className="w-full !justify-center pt-8 lg:pt-4" />
          </motion.div>
        </motion.div>
      )}
      {open && (
        <motion.div
          className="-z-10 fixed inset-0 bg-black bg-opacity-60 cursor-pointer"
          onClick={() => toggleMenu(false)}
          {...midExitAnimation}
        />
      )}
    </AnimatePresence>
  );
};
export default Menu;
