import { useRouter } from "next/router";
import { FC, useState } from "react";
import { NavigationData } from "@types";
import { GreenBorderSVG, GoldBorderSVG } from "@components";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { truncatePubKey } from "@utils";

interface NavigationItemProps {
  item: NavigationData;
}
const NavigationItem: FC<NavigationItemProps> = (
  props: NavigationItemProps
) => {
  const { item } = props;

  const [hover, setHover] = useState<boolean>(false);

  const router = useRouter();
  const active = item?.href && router.asPath === item?.href;

  const { setVisible } = useWalletModal();
  const { publicKey } = useWallet();

  const handleClick = () => {
    //connect wallet
    if (item?.connectWallet) {
      if (publicKey) setVisible(true);
      else setVisible(true);
    }

    //internal link
    if (item?.href) {
      router.push(item.href);
    }
  };

  return (
    <div
      className="hidden lg:flex relative cursor-pointer flex-col gap-1 w-[168px]"
      onClick={handleClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <p
        className={`text-sm tracking-wide transition-200 font-rajdhani-bold uppercase  ${
          active
            ? "text-highlight"
            : hover
            ? "text-cf-white text-opacity-100"
            : "text-cf-white text-opacity-75"
        }`}
      >
        {item?.connectWallet && publicKey
          ? truncatePubKey(publicKey)
          : item.name}
      </p>

      {/* bottom border */}
      {active ? (
        <GoldBorderSVG className="absolute -z-10 -left-[115px] -top-[59px] cursor-default" />
      ) : (
        <GreenBorderSVG hover={hover} />
      )}
    </div>
  );
};

export default NavigationItem;
