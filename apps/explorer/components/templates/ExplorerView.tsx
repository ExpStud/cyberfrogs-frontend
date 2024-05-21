import { Dispatch, SetStateAction, FC, useEffect, useState } from "react";
import Image from "next/image";
import { Heading } from "@components";
import { TextToggle } from "@explorer-components";
import { handleAssetLoad } from "@utils";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const ExplorerView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  //overview & attributes toggle
  const [overviewToggle, setOverviewToggle] = useState<boolean>(true);

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
      <div className="w-full flex flex-col lg:flex-row justify-between mt-10 lg:-mt-10">
        <TextToggle
          overviewToggle={overviewToggle}
          setOverviewToggle={setOverviewToggle}
        />
      </div>
    </div>
  );
};

const ListingData = () => {
  return (
    <div className="w-full flex flex-col items-start justify-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1034"
        height="111"
        viewBox="0 0 1034 111"
        fill="none"
      >
        <g filter="url(#filter0_dddd_499_575)">
          <path
            d="M17 3H1007L1012 8L1017 13V51H27L22 46L17 41V3Z"
            fill="#081F17"
          />
        </g>
        <defs>
          <filter
            id="filter0_dddd_499_575"
            x="0"
            y="0"
            width="1034"
            height="111"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
              result="effect1_dropShadow_499_575"
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
              in2="effect1_dropShadow_499_575"
              result="effect2_dropShadow_499_575"
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
              in2="effect2_dropShadow_499_575"
              result="effect3_dropShadow_499_575"
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
              in2="effect3_dropShadow_499_575"
              result="effect4_dropShadow_499_575"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect4_dropShadow_499_575"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
export default ExplorerView;
