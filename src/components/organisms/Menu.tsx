import { Dispatch, FC, Fragment, SetStateAction, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HeaderIcons, NavigationItem } from "@components";
import { useLockBodyScroll, useWindowSize } from "@hooks";
import { fadeVariants, midExitAnimation, navigationData } from "@constants";

interface Props {
  toggleMenu: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

const Menu: FC<Props> = (props: Props) => {
  const { toggleMenu, open } = props;
  const [winWidth, winHeight] = useWindowSize();

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
          className=" bg-cf-green-900 fixed top-0 right-0 z-50"
        >
          <motion.div
            className={`px-4 sm:px-6 lg:px-10 py-6 h-screen relative`}
            variants={fadeVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="absolute left-1/2 sm:left-[48%]  top-[20vh] transform -translate-x-1/2 z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 scale-110 sm:scale-125 mr-5">
                {navigationData.map((nav, index) => (
                  <div key={index} className="w-[185px] sm:w-[210px] px-4">
                    {nav?.component ? (
                      <nav.component />
                    ) : (
                      <NavigationItem item={nav} />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <HeaderIcons className="block absolute left-1/2 transform -translate-x-1/2 bottom-10 z-0" />
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
