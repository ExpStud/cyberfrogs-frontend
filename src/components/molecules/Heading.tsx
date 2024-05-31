import { useRouter } from "next/router";
import { FC, HTMLAttributes, useEffect, useState } from "react";
import Image from "next/image";
import { HeadingType } from "@types";
import { HeadingData } from "@constants";

interface HeadingProps extends HTMLAttributes<HTMLDivElement> {
  imageClass?: string;
}

const Heading: FC<HeadingProps> = (props) => {
  const [data, setData] = useState<HeadingType | null>(null);
  const router = useRouter();

  useEffect(() => {
    //set heading based on path
    const heading = HeadingData.find((h) => h.path === router.asPath);
    setData(heading ?? null);
  }, [router.asPath]);

  return (
    <div className="relative" {...props}>
      <h1>{data?.name}</h1>
      {data?.image && (
        <div
          className={`absolute -top-9 md:-top-6 -left-4 ${props.imageClass}`}
        >
          <Image
            src={data.image}
            alt={data.name}
            width={data.imageWidth}
            height={data.imageHeight}
          />
        </div>
      )}
      {/* divider */}
      <svg
        width="220"
        height="2"
        viewBox="0 0 220 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-80 mt-2 md:mt-4 ml-1 pr-10 md:pr-0"
      >
        <g filter="url(#filter0_i_495_486)">
          <line
            y1="1"
            x2="220"
            y2="1"
            stroke="#FFFEF3"
            strokeOpacity="0.15"
            strokeWidth="2"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_495_486"
            x="0"
            y="0"
            width="220"
            height="2"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="20" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.882353 0 0 0 0 0.709804 0 0 0 0 0.239216 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_495_486"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Heading;
