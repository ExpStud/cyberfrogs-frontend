import { FC } from "react";
import { midExitAnimation } from "@constants";
import Image from "next/image";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { motion } from "framer-motion";

const ConnectWallet: FC = () => {
  const { setVisible } = useWalletModal();

  return (
    <motion.div
      key="ConnectWallet"
      {...midExitAnimation}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-connect-bg w-[90vw] 2xl:w-[1520px] h-[93px] flex items-center"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between w-full mt-4 px-5 gap-2">
        <p className="hidden sm:block">connect wallet to initiate upgrade</p>
        <Image
          src="/images/general/buttons/connect-wallet.svg"
          width={300}
          height={40}
          alt="Connect"
          className="cursor-pointer button-transition min-w-[99px] z-10"
          onClick={() => setVisible(true)}
        />
      </div>
    </motion.div>
  );
};
export default ConnectWallet;
