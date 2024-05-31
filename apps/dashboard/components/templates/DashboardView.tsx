import { Dispatch, SetStateAction, FC } from "react";
import Image from "next/image";
import { Heading } from "@components";
import { handleAssetLoad } from "@utils";
import { useWallet } from "@solana/wallet-adapter-react";
import { AnimatePresence, motion } from "framer-motion";
import { fastExitAnimation } from "@constants";
import { DashboardHeading, Data } from "@dashboard-components";

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

export default DashboardView;
