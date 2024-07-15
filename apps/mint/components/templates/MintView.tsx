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
import { collectionAddress } from "@constants";
import { useWindowSize } from "src/hooks";
import Image from "next/image";
interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const MintView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  const [userFrogs, setUserFrogs] = useState<NFT[]>([]);
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

  return (
    <div className="fixed inset-0 w-screen h-screen">
      {isDesktop && (
        <Image
          src="/images/mint/bg-xl.jpg"
          fill
          alt="Mint"
          className="w-full h-full object-cover absolute inset-0"
          onLoad={() => handleAssetLoad(0, setAssets)}
        />
      )}
      {isTablet && (
        <Image
          src="/images/mint/bg-md.jpg"
          fill
          alt="Mint"
          className="w-full h-full object-cover absolute inset-0"
          onLoad={() => handleAssetLoad(0, setAssets)}
        />
      )}{" "}
      {isMobile && (
        <Image
          src="/images/mint/bg-sm.jpg"
          fill
          alt="Mint"
          className="w-full h-full object-cover absolute inset-0"
          onLoad={() => handleAssetLoad(0, setAssets)}
        />
      )}
    </div>
  );
};

export default MintView;
