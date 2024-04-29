import {
  Dispatch,
  FC,
  Fragment,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HeaderIcons, IconBar, NavigationItem } from "@components";
import Link from "next/link";
import { useWindowSize } from "@hooks";
import { fadeVariants, midExitAnimation, navigationData } from "@constants";

interface Props {
  toggleMenu: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

const Menu: FC<Props> = (props: Props) => {
  const { toggleMenu, open } = props;
  const [winWidth, winHeight] = useWindowSize();

  const isTablet: boolean = winWidth < 900;
  //stop page scroll (when modal or menu open)
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      {open && (
        <motion.div
          key="main-menu"
          // onMouseLeave={() => toggleMenu(false)}
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: isTablet ? winWidth - 15 : 669, opacity: 1 }}
          exit={{
            width: 0,
            transition: { duration: 0.5 },
            opacity: 1,
          }}
          transition={{ duration: 0.7 }}
          className=" bg-cf-green fixed top-0 right-0 z-50xw"
          // onClick={() => toggleMenu(false)}
        >
          <motion.div
            className={`px-4 sm:px-6 lg:px-10 py-6 h-screen relative`}
            variants={fadeVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="absolute left-1/2 top-[20vh] transform -translate-x-1/2 ">
              <div className="flex flex-col gap-12 sm:gap-14 scale-110">
                {navigationData.map((nav, index) => (
                  <Fragment key={index}>
                    {nav?.component ? (
                      <nav.component />
                    ) : (
                      <NavigationItem item={nav} />
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
            <HeaderIcons className="block absolute left-1/2 transform -translate-x-1/2 bottom-10" />
          </motion.div>
        </motion.div>
      )}
      {open && (
        <motion.div
          className="-z-10 fixed inset-0 bg-black bg-opacity-60 "
          onClick={() => toggleMenu(false)}
          {...midExitAnimation}
        />
      )}
    </AnimatePresence>
  );
};

export default Menu;
