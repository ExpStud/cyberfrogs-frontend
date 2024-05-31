import { Dispatch, SetStateAction, FC } from "react";
import Image from "next/image";
import { Heading } from "@components";
import { handleAssetLoad } from "@utils";
import { useWallet } from "@solana/wallet-adapter-react";
import { AnimatePresence, motion } from "framer-motion";
import { fastExitAnimation } from "@constants";
import { Data } from "@dashboard-components";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const DashboardView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  const { connected } = useWallet();
  //TODO: determine frogs in wallet
  const totalFrogs = 69;

  return (
    <div className="w-full flex flex-col items-start justify-start px-3 md:px-12 2xl:px-0 my-10 ">
      <DashboardHeading
        connected={connected}
        totalFrogs={totalFrogs}
        setAssets={setAssets}
      />
      <Data
        solPrice={0.69}
        kiraPrice={0.69}
        floorPrice={0.69}
        currentSupply={69}
        totalSupply={69}
        burned={69}
      />
    </div>
  );
};

interface DashboardHeadingProps {
  connected: boolean;
  totalFrogs: number;
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}
const DashboardHeading: FC<DashboardHeadingProps> = (
  props: DashboardHeadingProps
) => {
  const { connected, totalFrogs, setAssets } = props;

  return (
    <div className="w-full flex flex-col lg:flex-row justify-between px-3 sm:px-0 2xl:ml-4">
      <div className="flex flex-col justify-between">
        <Heading className="relative w-[504px]" imageClass="!-left-10" />

        <div className="flex items-center gap-3 uppercase mb-4">
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
              <motion.div {...fastExitAnimation} key="not-connected">
                not connected
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <Image
        src="/images/dashboard/intro.png"
        width={968}
        height={210}
        alt="Dashboard"
        className="hidden lg:block lg:-mt-8"
        onLoad={() => handleAssetLoad(0, setAssets)}
      />
    </div>
  );
};
export default DashboardView;
