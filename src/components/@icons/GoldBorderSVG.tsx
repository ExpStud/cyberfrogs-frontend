import { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const GoldBorderSVG: FC<Props> = (props: Props) => {
  const { ...componentProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="396"
      height="206"
      viewBox="0 0 396 206"
      fill="none"
      className={componentProps.className}
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
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
  );
};

export default GoldBorderSVG;
