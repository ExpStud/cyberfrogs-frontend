import { NavigationItem } from "@components";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWalletMultiButton } from "@solana/wallet-adapter-base-ui";
import Image from "next/image";
import { useWallet } from "@solana/wallet-adapter-react";
import { truncatePubKey } from "@utils";
import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { dropdownAnimations, dropdownItemsAnimations } from "@constants";
import { useOutsideAlerter } from "@hooks";

const ConnectWalletButton: FC = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const { setVisible, visible } = useWalletModal();
  const { publicKey, connecting } = useWallet();

  //close dropdown on outside click
  const ref = useRef(null);
  useOutsideAlerter(ref, () => setShowDropdown(false));

  const handleClick = () => {
    if (publicKey) setShowDropdown(!showDropdown);
    else setVisible(true);
  };

  useEffect(() => {
    console.log("showDropdown ", showDropdown);
  }, [showDropdown]);

  return (
    <div className="relative z-10" ref={ref}>
      <NavigationItem
        item={{
          name: publicKey
            ? truncatePubKey(publicKey)
            : visible || connecting
            ? "Connecting..."
            : "Connect",
        }}
        callback={handleClick}
      />
      <AnimatePresence>
        {showDropdown && <WalletDropdown setShowDropdown={setShowDropdown} />}
      </AnimatePresence>
    </div>
  );
};

const WalletDropdown: FC<{
  setShowDropdown: Dispatch<SetStateAction<boolean>>;
}> = ({ setShowDropdown }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const { publicKey } = useWallet();
  const { setVisible } = useWalletModal();
  const { onDisconnect } = useWalletMultiButton({
    onSelectWallet() {
      setVisible(true);
    },
  });

  return (
    <motion.div
      className="absolute top-[25px] h-[168px] w-[168px] "
      variants={dropdownAnimations}
      initial="hidden"
      animate="show"
      exit="exit"
      key="wallet-dropdown"
    >
      <div className="z-10 flex flex-col items-center gap-2 pt-4 text-sm uppercase">
        <WalletDropdownItem
          name={copied ? "copied!" : "copy address"}
          key={0}
          onClick={async () => {
            await navigator.clipboard.writeText(
              publicKey ? publicKey.toBase58() : ""
            );
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
        />
        <WalletDropdownItem
          name="change wallet"
          key={1}
          onClick={() => setVisible(true)}
        />
        <WalletDropdownItem
          name="disconnect"
          key={2}
          onClick={() => {
            if (onDisconnect) {
              onDisconnect();
              setShowDropdown(false);
            }
          }}
        />
      </div>
      {/* bg image */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="202"
        height="231"
        viewBox="0 0 202 231"
        fill="none"
        className="absolute top-0 -left-[16px] -z-10"
      >
        <g filter="url(#filter0_dddd_2116_102)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M185 3H17V151L20.566 156L24.1321 161H95L105 171H175L185 161V3Z"
            fill="#091F17"
          />
        </g>
        <defs>
          <filter
            id="filter0_dddd_2116_102"
            x="0"
            y="0"
            width="202"
            height="231"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="3" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2116_102"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="11" />
            <feGaussianBlur stdDeviation="5.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0.09 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_2116_102"
              result="effect2_dropShadow_2116_102"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="24" />
            <feGaussianBlur stdDeviation="7" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_dropShadow_2116_102"
              result="effect3_dropShadow_2116_102"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="43" />
            <feGaussianBlur stdDeviation="8.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0.01 0"
            />
            <feBlend
              mode="normal"
              in2="effect3_dropShadow_2116_102"
              result="effect4_dropShadow_2116_102"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect4_dropShadow_2116_102"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <Image
        src="/images/icons/threedots.svg"
        width={82}
        height={33}
        alt="dots"
        className="absolute -bottom-7 right-6"
      />
      {/* </motion.div> */}
    </motion.div>
  );
};

const WalletDropdownItem: FC<{ name: string; onClick: () => void }> = ({
  name,
  onClick,
}) => {
  return (
    <motion.div
      variants={dropdownItemsAnimations}
      className="cursor-pointer bg-custom-grey transition-200 hover:bg-custom-grey-light pl-2 w-[148px] h-[36px] flex items-center"
      onClick={onClick}
    >
      {name}
    </motion.div>
  );
};

export default ConnectWalletButton;
