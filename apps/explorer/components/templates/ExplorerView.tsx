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
import { ListingData, TextToggle } from "@explorer-components";
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
  }, []);

  useEffect(() => {
    fetchNftMetadata();
  }, [fetchNftMetadata]);

  return (
    <div className="w-full flex flex-col items-center xl:items-start justify-start px-3 md:px-12 2xl:px-0 my-10 ">
      {/* heading & image */}
      <div className="w-full flex flex-col lg:flex-row justify-between px-3 sm:px-0">
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
      <div className="w-full flex flex-col lg:flex-row justify-between mt-10 lg:-mt-10 z-0">
        <TextToggle
          overviewToggle={overviewToggle}
          setOverviewToggle={setOverviewToggle}
        />
        <ListingData data={listingData} />
      </div>

      {/* explorer */}
      <div className="flex self-center 2xl:self-start relative min-w-[300px] w-full 2xl:w-[1554px] min-h-[800px] 2xl:h-[1005px] bg-cf-green-950 2xl:bg-transparent mt-2 2xl:-mt-1 ">
        {/* left */}
        <div className="absolute top-1 -left-16 2xl:-left-[52px] hidden md:flex flex-col">
          <Image
            src="/images/explorer/grid-left.svg"
            width={61}
            height={586}
            alt="Grid L"
          />
        </div>
        {/* body */}
        <Image
          src="/images/explorer/grid-bg.svg"
          width={1554}
          height={1005}
          alt="Grid"
          className="hidden 2xl:block"
        />

        {/* right */}
        <div className="hidden md:block absolute top-10 -right-2 2xl:right-[7px]">
          <Image
            src="/images/explorer/grid-right-1.svg"
            width={10}
            height={120}
            alt="Grid R1"
          />
          <Image
            src="/images/explorer/grid-right-2.svg"
            width={8}
            height={426}
            alt="Grid R2"
            className="-mt-1"
          />
        </div>
      </div>
    </div>
  );
};
export default ExplorerView;
