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
import { ConnectWallet, UserNft } from "@mint-components";
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
  const [infoModal, setInfoModal] = useState<boolean>(false);

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
    <div className="fixed inset-0 w-screen h-screen flex xl:items-end justify-center pt-24">
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
            setInfoModal={setInfoModal}
          />
        )}
        {mintFlow === MintFlow.UpgradedFrogs && <UpgradedFrogs />}
      </AnimatePresence>

      {infoModal && <div></div>}
    </div>
  );
};

interface SelectFrogsProps {
  nfts: NFT[];
  isLoading: boolean;
  setInfoModal: Dispatch<SetStateAction<boolean>>;
}
const SelectFrogs: FC<SelectFrogsProps> = (props: SelectFrogsProps) => {
  const { nfts, isLoading, setInfoModal } = props;
  return (
    <motion.div
      key="SelectFrogs"
      {...midExitAnimation}
      className="flex flex-col xl:flex-row justify-evenly w-full h-full xl:gap-10 px-1 sm:px-5 md:px-10 lg:px-12"
    >
      <div className="green-container relative w-full h-[60%] md:h-[55%]">
        {/* <Image
          src="/images/pages/mint/select-bg.svg"
          width={1130}
          height={833.5}
          alt="Mint"
          className="object-cover absolute inset-0"
        /> */}

        {/* <div className="grid grid-cols-3 md:gird-cols-4 xl:grid-cols-5">
        {nfts.map((nft, i) => (
          <UserNft metadata={nft} isLoadingCard={false} key={i} />
        ))}
      </div> */}
        {/* loading card */}
        {nfts.length === 0 && isLoading && (
          <UserNft metadata={undefined} isLoadingCard={true} />
        )}
      </div>

      <div className="green-container explorer-scroll w-full xl:max-w-[350px] h-[35%]  xl:h-[501px] flex flex-col justify-between items-start px-10 py-5 xl:py-12 gap-3 overflow-y-auto ">
        <p className="text-xl">your upgrade cost</p>
        <div className="flex justify-between w-full">
          <p>Your Balance</p>
          <p className="text-cf-gold">11,200 KIRA</p>
        </div>
        <div className="flex justify-between w-full">
          <p>selected Frogs</p>
          <p className="text-cf-gold">3</p>
        </div>
        <Image
          src="/images/pages/dashboard/divider.svg"
          width={300}
          height={1}
          alt="Divider"
        />
        <div className="font-rajdhani-bold flex justify-between w-full">
          <p>total cost</p>
          <p className="text-cf-gold">7,500 KIRA</p>
        </div>

        <div className="flex flex-col gap-3 mt-5 text-xs text-cf-white/85">
          <p className="text-sm font-rajdhani-semibold">important</p>
          <p className="normal-case">
            If you select more than one frog you are about to prepay for your
            frogs. This will let you upgrade them at your pleasure without
            needing to pay each time.
          </p>
          <div
            className="text-cf-gold flex gap-3 items-center mt-2 hover:underline"
            onClick={() => setInfoModal(true)}
          >
            <p>Pricing, Multipliers, and Discounts</p>
            <svg
              width="6"
              height="9"
              viewBox="0 0 6 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-[1px]"
            >
              <path
                d="M5.28809 4.92871C5.28809 5.10156 5.21777 5.25977 5.07715 5.40332L1.69336 8.7124C1.63477 8.76807 1.57178 8.81055 1.50439 8.83984C1.43701 8.86621 1.3623 8.87939 1.28027 8.87939C1.17187 8.87939 1.07227 8.85303 0.981445 8.80029C0.890625 8.74756 0.818848 8.67725 0.766113 8.58936C0.713379 8.49854 0.687012 8.39893 0.687012 8.29053C0.687012 8.12646 0.74707 7.98291 0.867187 7.85986L4.08398 4.72656L4.08398 5.12646L0.867187 2.00195C0.74707 1.87891 0.687011 1.73535 0.687011 1.57129C0.687011 1.46289 0.713379 1.36475 0.766113 1.27686C0.818847 1.18604 0.890625 1.11426 0.981445 1.06152C1.07227 1.00879 1.17187 0.982422 1.28027 0.982422C1.44141 0.982422 1.57764 1.03955 1.68896 1.15381L5.07715 4.4541C5.14746 4.52441 5.2002 4.59912 5.23535 4.67822C5.26758 4.75439 5.28516 4.83789 5.28809 4.92871Z"
                fill="#FFF79E"
              />
            </svg>
          </div>
        </div>

        <Image
          src="/images/general/buttons/upgrade.svg"
          width={270}
          height={40}
          alt="Upgrade"
          className="cursor-pointer button-transition min-w-[99px] z-10"
          onClick={() => console.log(true)}
        />
      </div>
    </motion.div>
  );
};

const UpgradedFrogs: FC = () => {
  return <motion.div key="UpgradedFrogs" {...midExitAnimation}></motion.div>;
};

export default MintView;
