import {
  Dispatch,
  SetStateAction,
  FC,
  useEffect,
  useState,
  use,
  useCallback,
} from "react";
import Image from "next/image";
import { Heading } from "@components";
import { Explorer, ListingData, TextToggle } from "@explorer-components";
import { getAssetsByAuthority, handleAssetLoad } from "@utils";
import { NftDataType } from "@explorer-types";
import { NFT } from "src/types";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const ExplorerView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  const [overviewToggle, setOverviewToggle] = useState<boolean>(true);
  const [listingData, setListingData] = useState<NftDataType | null>(null);
  const [nftData, setNftData] = useState<NFT[]>([]);

  useEffect(() => {
    //TODO: fetch listing data
    const NftData: NftDataType = {
      floorPrice: 7.52,
      listingCount: 292,
      supply: 757,
      owners: 2400,
    };

    setListingData(NftData);
  }, []);

  //fetch nft metadata
  const fetchNftMetadata = useCallback(async () => {
    const frogs: NFT[] = await getAssetsByAuthority();
    setNftData(frogs);
  }, []);

  useEffect(() => {
    fetchNftMetadata();
  }, [fetchNftMetadata]);

  return (
    <div className="w-full flex flex-col items-center xl:items-start justify-start px-3 md:px-12 2xl:px-0 my-10 ">
      {/* heading & image */}
      <div className="w-full flex flex-col lg:flex-row justify-between px-3 sm:px-0 2xl:ml-4">
        <Heading />
        <Image
          src="/images/explorer/intro.png"
          width={994}
          height={218}
          alt="Loaded"
          className="hidden lg:block lg:-mt-8"
          onLoad={() => handleAssetLoad(0, setAssets)}
        />
      </div>

      {/* toggle & data */}
      <div className="w-full flex flex-col lg:flex-row justify-between mt-10 lg:-mt-10 z-0 2xl:ml-0">
        <TextToggle
          overviewToggle={overviewToggle}
          setOverviewToggle={setOverviewToggle}
        />
        <ListingData data={listingData} />
      </div>

      {/* explorer */}
      <Explorer data={nftData} />
    </div>
  );
};
export default ExplorerView;
