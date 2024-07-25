import { Dispatch, SetStateAction, FC } from "react";
import Image from "next/image";
import { Heading } from "@components";
import { handleAssetLoad } from "@utils";
import { AnimatePresence, motion } from "framer-motion";
import { fastExitAnimation } from "@constants";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

interface DashboardHeadingProps {
  connected: boolean;
  totalFrogs: number;
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}
const DashboardHeading: FC<DashboardHeadingProps> = (
  props: DashboardHeadingProps
) => {
  const { connected, totalFrogs, setAssets } = props;
  const { setVisible } = useWalletModal();

  return (
    <div className="relative w-full flex flex-col lg:flex-row justify-between px-3 md:px-0 2xl:ml-4 mb-4">
      <div className="flex flex-col justify-between">
        <Heading className="relative" />

        <div className="flex items-center gap-3 uppercase mt-16">
          <div
            className={`w-2 h-2 rounded-full mb-[1px] transition-500 ${
              connected
                ? "green-highlight bg-cf-green-300"
                : "orange-highlight bg-cf-orange"
            }`}
          />
          <AnimatePresence mode="wait">
            {connected ? (
              <motion.div
                {...fastExitAnimation}
                key="connected"
                className="whitespace-nowrap"
              >
                <p>
                  connected
                  {totalFrogs > 0 && <span> / Holder ({totalFrogs})</span>}
                </p>
              </motion.div>
            ) : (
              <motion.div
                {...fastExitAnimation}
                key="not-connected"
                className="cursor-pointer"
                onClick={() => setVisible(true)}
              >
                connect wallet
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <Image
        src="/images/pages/dashboard/intro.png"
        width={968}
        height={210}
        alt="Dashboard"
        className="hidden lg:block absolute right-0 -top-4 z-0 opacity-20 xl:opacity-100"
        onLoad={() => handleAssetLoad(0, setAssets)}
      />
    </div>
  );
};
export default DashboardHeading;
