import { Dispatch, FC, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowIcon, HeaderIcons } from "@components";
import { useLockBodyScroll, useWindowSize } from "@hooks";
import { fadeVariants, midExitAnimation, navigationData } from "@constants";
import Image from "next/image";
import { NavigationData } from "@types";
import { useRouter } from "next/router";
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
            <div className="mt-20 mx-8 flex flex-col">
              {navigationData.map((nav, index) => (
                <MenuNavigationItem key={index} item={nav} />
              ))}
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

const MenuNavigationItem: FC<{ item: NavigationData }> = ({ item }) => {
  const [didHover, setDidHover] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  const router = useRouter();
  const active = router.pathname === item?.href;

  const handleMenuItemClick = (item: NavigationData) => {
    console.log("item", item);

    //route to the href if it exists
    if (item?.href && !active) {
      router.push(item.href);
      return;
    }

    //handle dropdown
    if (item?.dropdown) {
      setOpenDropdown(!openDropdown);
    }
  };

  return (
    <div
      className={`relative px-4 text-xl flex flex-col gap-3 pt-6 uppercase ${
        active
          ? "cursor-default text-cf-gold-500/70"
          : "text-cf-white/65 transition-300 hover:text-cf-white cursor-pointer "
      }`}
      onClick={() => handleMenuItemClick(item)}
      onMouseEnter={() => setDidHover(true)}
      onMouseLeave={() => setDidHover(false)}
    >
      <div className="flex w-full justify-between items-center pb-2">
        <p className="">{item.name}</p>
        {item?.dropdown && (
          <ArrowIcon
            direction="right"
            pathClass={` transition-300 ${
              didHover ? "!opacity-100" : "!opacity-65"
            }`}
            scale={1.5}
            animate={openDropdown}
          />
        )}
      </div>
      {item?.dropdown && openDropdown && (
        <motion.div className="flex flex-col gap-3">
          {item.dropdown.map((d, i) => (
            <motion.div className="" key={i}>
              {d.name}
            </motion.div>
          ))}
        </motion.div>
      )}
      <div className="relative w-full h-[1px]">
        <Image
          src="/images/dashboard/divider.svg"
          fill
          alt="Divider"
          className="opacity-75 h-[1px] object-cover"
        />
      </div>
    </div>
  );
};

export default Menu;
