import {
  Dispatch,
  SetStateAction,
  FC,
  use,
  useCallback,
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import { useWallet } from "@solana/wallet-adapter-react";
import { DashboardHeading, Data } from "@dashboard-components";
import { getAssetsByOwner } from "@utils";
import { NFT } from "@types";
import { collectionAddress } from "src/constants";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const DashboardView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  const [userFrogs, setUserFrogs] = useState<NFT[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { connected, publicKey } = useWallet();

  //fetch user nfts and filter cyber frogs
  const getUserNfts = useCallback(async () => {
    if (!publicKey) return;
    setLoading(true);

    try {
      const userFrogs: NFT[] = await getAssetsByOwner(publicKey?.toBase58());
      if (!userFrogs) return;
      const frogs = userFrogs.filter(
        (nft) => nft.authorities[0].address === collectionAddress
      );
      setUserFrogs(frogs);
    } catch (error) {
      console.error(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, [publicKey]);

  useEffect(() => {
    getUserNfts();
  }, [getUserNfts]);

  return (
    <div className="w-full flex flex-col items-start justify-start px-3 md:pl-12 md:pr-0 2xl:px-0 mt-10 ">
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
      <Dashboard userFrogs={userFrogs} />
    </div>
  );
};

interface DashboardProps {
  userFrogs: NFT[];
}

const Dashboard: FC<DashboardProps> = (props: DashboardProps) => {
  const { userFrogs } = props;

  return (
    <div className="relative flex bg-cf-green-950 md:bg-transparent md:bg-dashboardBg min-h-[700px] w-full md:w-[1550px] mt-5 md:mt-0 px-5 md:px-10 py-6">
      {/* data & frogs */}
      <div className="flex flex-col gap-3">
        <Image
          src="/images/dashboard/dash-text.svg"
          width={118}
          height={9}
          alt="Text"
        />
        <div className="flex justify-between w-full"></div>
        <div className="grid grid-cols-2 xs:grid-cols-2 md:grid-cols-5 gap-4 lg:gap-8 pr-2 explorer-scroll">
          {userFrogs.map((nft: NFT, index) => (
            <div key={index}>{nft.content.metadata.name}</div>
          ))}
        </div>
      </div>

      {/* left image */}
      <div className="absolute top-1 -left-[52px] hidden md:flex flex-col">
        <Image
          src="/images/explorer/grid-left.svg"
          width={61}
          height={586}
          alt="Dashboard Left"
          className="hidden md:block"
        />
      </div>
    </div>
  );
};

export default DashboardView;
