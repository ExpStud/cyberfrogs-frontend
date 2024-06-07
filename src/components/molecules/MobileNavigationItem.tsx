import { FC, useState } from "react";
import { motion } from "framer-motion";
import { ArrowIcon } from "@components";
import Image from "next/image";
import { Navigation, NavigationData } from "@types";
import { useRouter } from "next/router";

const MobileNavigationItem: FC<{ item: NavigationData }> = ({ item }) => {
  const [didHover, setDidHover] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  const router = useRouter();
  const active = router.pathname === item?.href;

  const handleMenuItemClick = (item: NavigationData) => {
    console.log("item", item);

    //open external link in new tab or internal link
    if (item?.href) {
      if (item?.redirect) window.open(item.href, "_blank");
      else router.push(item.href);
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
          : "text-cf-white/75 transition-300 hover:text-cf-white cursor-pointer "
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
              didHover ? "!opacity-100" : "!opacity-75"
            }`}
            scale={1.5}
            animate={openDropdown}
          />
        )}
      </div>
      {item?.dropdown && openDropdown && (
        <motion.div className="flex flex-col gap-3 mb-4 -mt-2 ">
          {item.dropdown.map((d, i) => (
            <MobileNavigationDropdownItem item={d} key={i} />
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

const MobileNavigationDropdownItem: FC<{ item: Navigation }> = ({ item }) => {
  const [didHover, setDidHover] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  const router = useRouter();
  const active = router.pathname === item?.href;

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    //open external link in new tab or internal link
    if (item?.href) {
      if (item?.redirect) window.open(item.href, "_blank");
      else router.push(item.href);
    }
  };

  return (
    <motion.div
      className={`text-base ml-0 pt-1 transition-300   ${
        active
          ? "cursor-default text-cf-gold-500/70"
          : "text-cf-white/60 transition-300 hover:text-cf-white cursor-pointer"
      }`}
      onClick={(e) => handleClick(e)}
    >
      {item.name}
    </motion.div>
  );
};

export default MobileNavigationItem;
