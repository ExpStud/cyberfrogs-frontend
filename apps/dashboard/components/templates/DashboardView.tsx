import {
  Dispatch,
  SetStateAction,
  FC,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Dashboard, DashboardHeading, Data } from "@dashboard-components";
import { getAssetsByOwner } from "@utils";
import { NFT } from "@types";
import { collectionAddress } from "src/constants";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const DashboardView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  const [userFrogs, setUserFrogs] = useState<NFT[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
    <div className="w-full flex flex-col items-start justify-start px-3 md:pl-12 md:pr-0 2xl:px-0 mt-10 overflow-x-hidden">
      <DashboardHeading
        connected={connected}
        totalFrogs={userFrogs.length}
        setAssets={setAssets}
      />
      {/* TODO: fetch collection data */}
      <Data
        solPrice={0.69}
        kiraPrice={0.69}
        floorPrice={0.69}
        currentSupply={69}
        totalSupply={69}
        burned={69}
      />
      <Dashboard
        userFrogs={userFrogs}
        isLoading={isLoading}
        connected={connected}
      />
    </div>
  );
};

export default DashboardView;
