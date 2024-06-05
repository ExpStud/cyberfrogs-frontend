import Image from "next/image";
import { FC, HTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";
import { dropdownAnimations } from "@constants";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  grid?: boolean; //used for more than 1 column
}
const Dropdown: FC<Props> = ({ children, grid = false }) => {
  return (
    <motion.div
      className={`absolute top-[25px] h-[168px] w-[168px] cursor-default z-50 `}
      variants={dropdownAnimations}
      initial="hidden"
      animate="show"
      exit="exit"
      key="wallet-dropdown"
    >
      <div
        className={`z-10 pt-4 text-sm uppercase flex flex-col items-center gap-2`}
      >
        {children}
      </div>
      {/* bg image */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="202"
        height="231"
        viewBox="0 0 202 231"
        fill="none"
        className={`absolute top-0 -left-[16px] -z-10 ${
          grid ? "top-[102px] scale-y-[1.9]" : ""
        }`}
      >
        <g filter="url(#filter0_dddd_2116_102)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M185 3H17V151L20.566 156L24.1321 161H95L105 171H175L185 161V3Z"
            fill="#091F17"
          />
        </g>
        <defs>
          <filter
            id="filter0_dddd_2116_102"
            x="0"
            y="0"
            width="202"
            height="231"
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
              result="effect1_dropShadow_2116_102"
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
              in2="effect1_dropShadow_2116_102"
              result="effect2_dropShadow_2116_102"
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
              in2="effect2_dropShadow_2116_102"
              result="effect3_dropShadow_2116_102"
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
              in2="effect3_dropShadow_2116_102"
              result="effect4_dropShadow_2116_102"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect4_dropShadow_2116_102"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <Image
        src="/images/icons/threedots.svg"
        width={82}
        height={33}
        alt="dots"
        className={`absolute  -z-10 ${
          grid ? "right-[20px] -bottom-[180px]" : "-bottom-7 right-[20px]"
        }`}
      />
    </motion.div>
  );
};

export default Dropdown;
