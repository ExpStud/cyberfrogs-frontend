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
import { ConnectWallet, SelectFrogs, UpgradeModal } from "@mint-components";
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
  const [selectedFrogs, setSelectedFrogs] = useState<NFT[]>([]);
  const [upgradedFrogs, setUpgradedFrogs] = useState<boolean>(false);
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
    if (connected && !upgradedFrogs) {
      setMintFlow(MintFlow.SelectFrogs);
      return;
    }

    if (connected && upgradedFrogs) {
      setMintFlow(MintFlow.UpgradedFrogs);
      return;
    }

    setMintFlow(MintFlow.ConnectWallet);
  }, [connected, upgradedFrogs]);

  const handleSelected = (nft: NFT) => {
    setSelectedFrogs((prevSelectedFrogs) => {
      // Check if the NFT is already selected
      const isAlreadySelected = prevSelectedFrogs.some(
        (selectedFrog) =>
          selectedFrog.content?.metadata?.name === nft.content?.metadata?.name
      );

      if (isAlreadySelected) {
        // Remove the NFT from the array
        return prevSelectedFrogs.filter(
          (selectedFrog) =>
            selectedFrog.content?.metadata?.name !== nft.content?.metadata?.name
        );
      } else {
        // Add the NFT to the array
        return [...prevSelectedFrogs, nft];
      }
    });
  };

  return (
    <div className="fixed inset-0 w-screen h-screen flex xl:items-end 3xl:items-center justify-center pt-24">
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
        {mintFlow === MintFlow.SelectFrogs && (
          <SelectFrogs
            nfts={userFrogs}
            isLoading={isLoading}
            selectedFrogs={selectedFrogs}
            handleSelected={handleSelected}
          />
        )}
        {mintFlow === MintFlow.UpgradedFrogs && <UpgradedFrogs />}
      </AnimatePresence>
    </div>
  );
};

const UpgradedFrogs: FC = () => {
  return <motion.div key="UpgradedFrogs" {...midExitAnimation}></motion.div>;
};

export default MintView;
