import { useRouter } from "next/router";
import { FC, useState } from "react";
import { NavigationData } from "src/types";

interface NavigationItemProps {
  item: NavigationData;
}
const NavigationItem: FC<NavigationItemProps> = (
  props: NavigationItemProps
) => {
  const { item } = props;

  const [hover, setHover] = useState<boolean>(false);

  const router = useRouter();
  const active = item?.href && router.asPath === item?.href;

  const handleClick = () => {
    if (item?.href) {
      router.push(item.href);
    }
  };

  return (
    <div
      className="relative cursor-pointer flex flex-col gap-1 w-[168px]"
      onClick={handleClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <p
        className={`text-sm tracking-wide transition-200 font-rajdhani-bold uppercase  ${
          active
            ? "text-highlight"
            : hover
            ? "text-cf-white text-opacity-100"
            : "text-cf-white text-opacity-75"
        }`}
      >
        {item.name}
      </p>
      {/* bottom border svg */}
      {active ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="396"
          height="206"
          viewBox="0 0 396 206"
          fill="none"
          className="absolute -z-10 -left-[115px] -top-[59px] cursor-default"
        >
          <g filter="url(#filter0_ddd_496_560)">
            <path d="M114 84H282V88H184L180 92H114V84Z" fill="#FFF79E" />
          </g>
          <defs>
            <filter
              id="filter0_ddd_496_560"
              x="0.599998"
              y="-29.4"
              width="394.8"
              height="234.8"
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
              <feOffset />
              <feGaussianBlur stdDeviation="8.1" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 0.968627 0 0 0 0 0.619608 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_496_560"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="16.2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 0.968627 0 0 0 0 0.619608 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_496_560"
                result="effect2_dropShadow_496_560"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="56.7" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 0.968627 0 0 0 0 0.619608 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_dropShadow_496_560"
                result="effect3_dropShadow_496_560"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect3_dropShadow_496_560"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="168"
          height="11"
          viewBox="0 0 168 11"
          className={`transition-200 ${
            hover ? "fill-cf-green-light" : "fill-cf-green-dark "
          }`}
        >
          <rect width="168" height="4" />
          <rect x="165" y="8" width="3" height="3" />
          <rect x="160" y="8" width="3" height="3" />
          <rect x="155" y="8" width="3" height="3" />
        </svg>
      )}
    </div>
  );
};

export default NavigationItem;
