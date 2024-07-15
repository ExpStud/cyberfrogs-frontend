import {
  Dispatch,
  SetStateAction,
  FC,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { getAssetsByOwner, handleAssetLoad } from "@utils";
import { NFT } from "@types";
import { collectionAddress, midExitAnimation } from "@constants";
import { useWindowSize } from "src/hooks";
import Image from "next/image";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { AnimatePresence, motion } from "framer-motion";
interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

enum MintFlow {
  ConnectWallet,
  SelectFrogs,
  UpgradedFrogs,
}

const MintView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  const [mintFlow, setMintFlow] = useState<MintFlow>(MintFlow.ConnectWallet);

  const [userFrogs, setUserFrogs] = useState<NFT[]>([]);
  const [upgradedFrogs, setUpgradedFrogs] = useState<NFT[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [winWidth] = useWindowSize();
  const isMobile = winWidth < 768;
  const isTablet = winWidth <= 1024 && winWidth >= 768;
  const isDesktop = winWidth >= 1024;

  const { connected, publicKey } = useWallet();

  //fetch user nfts and filter cyber frogs
  const getUserNfts = useCallback(async () => {
    if (!publicKey) return;
    setIsLoading(true);

    try {
      const userFrogs: NFT[] = await getAssetsByOwner(publicKey?.toBase58());
      if (!userFrogs) return;
      const frogs = userFrogs.filter(
        (nft) => nft.authorities[0].address === collectionAddress
      );
      setUserFrogs(frogs);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }, [publicKey]);

  useEffect(() => {
    getUserNfts();
  }, [getUserNfts]);

  //reset data on wallet disconnect
  useEffect(() => {
    if (!connected) {
      setUserFrogs([]);
    }
  }, [connected]);

  //handle mint flow
  useEffect(() => {
    if (connected && upgradedFrogs.length === 0) {
      setMintFlow(MintFlow.SelectFrogs);
      return;
    }

    if (connected && upgradedFrogs.length > 0) {
      setMintFlow(MintFlow.UpgradedFrogs);
      return;
    }

    setMintFlow(MintFlow.ConnectWallet);
  }, [connected, upgradedFrogs.length]);

  return (
    <div className="fixed inset-0 w-screen h-screen">
      {/* bg image */}
      <>
        {isDesktop && (
          <Image
            src="/images/pages/mint/bg-xl.jpg"
            fill
            alt="Mint"
            className="-z-10 w-full h-full object-cover absolute inset-0"
            onLoad={() => handleAssetLoad(0, setAssets)}
          />
        )}
        {isTablet && (
          <Image
            src="/images/pages/mint/bg-md.jpg"
            fill
            alt="Mint"
            className="-z-10 w-full h-full object-cover absolute inset-0"
            onLoad={() => handleAssetLoad(0, setAssets)}
          />
        )}
        {isMobile && (
          <Image
            src="/images/pages/mint/bg-sm.jpg"
            fill
            alt="Mint"
            className="-z-10 w-full h-full object-cover absolute inset-0"
            onLoad={() => handleAssetLoad(0, setAssets)}
          />
        )}
      </>

      <AnimatePresence mode="wait">
        {mintFlow === MintFlow.ConnectWallet && <ConnectWallet />}
        {mintFlow === MintFlow.SelectFrogs && <SelectFrogs />}
        {mintFlow === MintFlow.UpgradedFrogs && <UpgradedFrogs />}
      </AnimatePresence>
    </div>
  );
};

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
          alt="Clear All"
          className="cursor-pointer button-transition min-w-[99px] z-10"
          onClick={() => setVisible(true)}
        />
      </div>
    </motion.div>
  );
};

const SelectFrogs: FC = () => {
  const { setVisible } = useWalletModal();

  return <motion.div key="SelectFrogs" {...midExitAnimation}></motion.div>;
};

const UpgradedFrogs: FC = () => {
  const { setVisible } = useWalletModal();

  return <motion.div key="UpgradedFrogs" {...midExitAnimation}></motion.div>;
};

export default MintView;
