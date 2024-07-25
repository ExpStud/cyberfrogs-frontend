import { FC, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowIcon } from "@components";
import Image from "next/image";
import { Navigation, NavigationData } from "@types";
import { useRouter } from "next/router";
import { navChild, navParent, expandHeight } from "@constants";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { truncatePubKey } from "@utils";
import { useWalletMultiButton } from "@solana/wallet-adapter-base-ui";
import { isMobile } from "react-device-detect";

const MenuItem: FC<{ item: NavigationData }> = ({ item }) => {
  const [didHover, setDidHover] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  const router = useRouter();
  const active = router.pathname === item?.href;

  const isConnect = item?.name === "Connect";
  const { setVisible, visible } = useWalletModal();
  const { publicKey, connecting } = useWallet();
  //disconnect wallet
  const { onDisconnect } = useWalletMultiButton({
    onSelectWallet() {
      setVisible(true);
    },
  });

  const label = isConnect
    ? publicKey
      ? truncatePubKey(publicKey)
      : visible || connecting
      ? "Connecting..."
      : "Connect"
    : item.name;

  const handleMenuItemClick = (item: NavigationData) => {
    //open external link in new tab or internal link
    if (item?.href) {
      if (item?.redirect) window.open(item.href, "_blank");
      else router.push(item.href);

      return;
    }

    //handle dropdown
    if (item?.dropdown) {
      setOpenDropdown(!openDropdown);
      return;
    }

    //handle connect wallet
    if (isConnect) {
      if (publicKey && onDisconnect) {
        onDisconnect();
      } else {
        setVisible(true);
      }
      return;
    }
  };

  //used to calculate duration/delay of dropdown
  const heightDuration = (length: number): number => length * 0.05 + 0.2;
  const heightDelay = (length: number): number => length * 0.01;

  return (
    <div
      className={`relative px-4 text-xl flex flex-col gap-3 pt-6 items-start uppercase   ${
        active
          ? "cursor-default text-cf-gold-500/70"
          : "text-cf-white/75 transition-300 hover:text-cf-white cursor-pointer "
      }`}
      onClick={() => handleMenuItemClick(item)}
      onMouseEnter={() => setDidHover(true)}
      onMouseLeave={() => setDidHover(false)}
    >
      <div className="flex w-full justify-between items-center pb-2">
        <p>{label}</p>
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

      <motion.div
        key="dropdown"
        {...expandHeight(
          openDropdown,
          heightDuration(item?.dropdown?.length ?? 0),
          heightDelay(item?.dropdown?.length ?? 0)
        )}
        className="-mt-2"
      >
        <AnimatePresence mode="wait">
          {item?.dropdown && openDropdown && (
            <motion.div
              key="dropdown"
              className="flex flex-col gap-3 mb-4 -mt-2 "
              variants={navParent(isMobile)}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {item.dropdown.map((d, i) => (
                <MenuDropdownItem item={d} key={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* divider */}
      <div className="relative w-full h-[1px] shadow-inner bg-cf-white/15 2xl:w-[800px]">
        <div className="absolute left-0 h-[1px] w-3 bg-cf-gold-500/30"></div>
      </div>
    </div>
  );
};

//keeping child in same file prevent animation fail on first render
const MenuDropdownItem: FC<{ item: Navigation }> = ({ item }) => {
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
      variants={navChild(isMobile)}
    >
      {item.name}
    </motion.div>
  );
};

export default MenuItem;
