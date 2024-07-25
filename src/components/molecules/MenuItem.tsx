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
      className={`relative px-4 text-xl flex flex-col gap-3 pt-6 items-start uppercase max-w-[290px] sm:max-w-none ${
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
      <div className="relative w-full h-[1px] hidden sm:block">
        <Image
          src="/images/pages/dashboard/divider.svg"
          fill
          alt="Divider"
          className="opacity-75 h-[1px] object-cover"
        />
      </div>
      <svg
        width="256"
        height="1"
        viewBox="0 0 256 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="sm:hidden"
      >
        <g filter="url(#filter0_i_494_422)">
          <line
            y1="0.5"
            x2="256"
            y2="0.5"
            stroke="white"
            strokeOpacity="0.15"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_494_422"
            x="0"
            y="0"
            width="256"
            height="1"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="10" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.882353 0 0 0 0 0.709804 0 0 0 0 0.239216 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_494_422"
            />
          </filter>
        </defs>
      </svg>
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
      variants={navChild}
    >
      {item.name}
    </motion.div>
  );
};

export default MenuItem;
