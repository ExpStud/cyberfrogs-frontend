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

      {/* e */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1554"
        height="1005"
        viewBox="0 0 1554 1005"
        fill="none"
      >
        <g filter="url(#filter0_dddd_475_206)">
          <path d="M17 3H533L543 13.0412H1537V1094H17V3Z" fill="#081F17" />
        </g>
        <defs>
          <filter
            id="filter0_dddd_475_206"
            x="0"
            y="0"
            width="1554"
            height="1154"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="3" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_475_206"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="11" />
            <feGaussianBlur stdDeviation="5.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0.09 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_475_206"
              result="effect2_dropShadow_475_206"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="24" />
            <feGaussianBlur stdDeviation="7" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_dropShadow_475_206"
              result="effect3_dropShadow_475_206"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="43" />
            <feGaussianBlur stdDeviation="8.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0.01 0"
            />
            <feBlend
              mode="normal"
              in2="effect3_dropShadow_475_206"
              result="effect4_dropShadow_475_206"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect4_dropShadow_475_206"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
export default ExplorerView;
