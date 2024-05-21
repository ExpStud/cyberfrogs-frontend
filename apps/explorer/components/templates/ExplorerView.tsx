import { Dispatch, SetStateAction, FC, useEffect, useState, use } from "react";
import Image from "next/image";
import { Heading } from "@components";
import { ListingData, TextToggle } from "@explorer-components";
import { handleAssetLoad } from "@utils";
import { NftDataType } from "@explorer-types";

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

  return (
    <div className="w-full flex flex-col items-start justify-start">
      {/* heading & image */}
      <div className="w-full flex flex-col lg:flex-row justify-between">
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
    </div>
  );
};
export default ExplorerView;
