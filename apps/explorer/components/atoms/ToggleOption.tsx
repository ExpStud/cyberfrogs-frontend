import { motion } from "framer-motion";
import Image from "next/image";
import { FC, MouseEvent } from "react";
import { fastEnterAnimation } from "src/constants";

interface ToggleOptionProps {
  active: boolean;
  onClick: (event: MouseEvent<HTMLParagraphElement>) => void;
  label: "solana" | "bitcoin";
}

const ToggleOption: FC<ToggleOptionProps> = ({ active, onClick, label }) => (
  <div
    className={`relative w-[136px] h-[36px] transition-200 text-cf-white flex items-center justify-center gap-2 pt-0.5  ${
      active ? "cursor-default" : "cursor-pointer opacity-50"
    }`}
    onClick={onClick}
  >
    {active && (
      <>
        <motion.img
          src={`/images/pages/explorer/toggle-active-highlight.svg`}
          width={216}
          height={242}
          alt={label}
          className="absolute -top-[58px] -left-[60px] -z-[1]"
          {...fastEnterAnimation}
        />{" "}
        <motion.img
          src={`/images/pages/explorer/toggle-active-bg.svg`}
          width={136}
          height={36}
          alt={label}
          className="absolute top-0 left-0 -z-[2]"
          {...fastEnterAnimation}
        />
      </>
    )}
    {label === "bitcoin" ? (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="bg-white rounded-full"
      >
        <path
          d="M6.11852 8.81146C6.74533 8.977 8.11531 9.3388 8.33313 8.46367C8.55627 7.56896 7.2279 7.27087 6.57954 7.12538C6.50703 7.10911 6.44302 7.09475 6.39064 7.08168L5.96879 8.7726C6.01177 8.78327 6.06214 8.79657 6.11852 8.81146Z"
          fill="#FF9900"
          fillOpacity="1"
        />
        <path
          d="M6.70959 6.3406C7.23217 6.48005 8.37218 6.78426 8.57072 5.98887C8.77345 5.17539 7.66563 4.93013 7.12453 4.81035C7.06366 4.79687 7.00996 4.78499 6.96611 4.77406L6.58364 6.30762C6.61975 6.31662 6.66212 6.32793 6.70959 6.3406Z"
          fill="#FF9900"
          fillOpacity="1"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.30604 13.7904C9.05695 14.7256 12.8556 12.4434 13.7905 8.69333C14.7256 4.94312 12.4433 1.14436 8.69262 0.209464C4.94287 -0.725437 1.14426 1.55693 0.209664 5.30738C-0.725754 9.05711 1.5567 12.8555 5.30604 13.7904ZM8.54848 4.23636C9.51839 4.57041 10.2277 5.07115 10.0883 6.00269C9.98753 6.68461 9.60972 7.01482 9.10775 7.13057C9.79693 7.48935 10.1476 8.03953 9.81356 8.99339C9.39896 10.1781 8.41396 10.2781 7.10398 10.0302L6.78611 11.3041L6.01786 11.1127L6.33161 9.85589C6.13246 9.80642 5.92902 9.75393 5.7194 9.69703L5.40458 10.9598L4.63725 10.7684L4.95514 9.49208C4.88132 9.47321 4.80702 9.45384 4.73218 9.43433C4.62509 9.40642 4.51691 9.37822 4.40743 9.35077L3.40771 9.10158L3.78912 8.22231C3.78912 8.22231 4.35518 8.37279 4.34748 8.36164C4.56498 8.41549 4.66147 8.27367 4.69949 8.17917L5.20187 6.16535C5.2221 6.1702 5.2418 6.17513 5.26076 6.17987C5.26832 6.18176 5.27576 6.18362 5.28307 6.18544C5.25241 6.17312 5.22462 6.16525 5.2032 6.15981L5.56161 4.72225C5.57095 4.55905 5.5147 4.35314 5.20361 4.2755C5.21562 4.26746 4.64567 4.13683 4.64567 4.13683L4.85002 3.31641L5.90942 3.58093L5.90853 3.5849C6.06778 3.62452 6.23193 3.66212 6.39906 3.70017L6.71388 2.43872L7.48162 2.63012L7.1731 3.86687C7.37924 3.91392 7.58664 3.96137 7.7886 4.01174L8.0949 2.7831L8.86312 2.9745L8.54848 4.23636Z"
          fill="#FF9900"
          fillOpacity="1"
        />
      </svg>
    ) : (
      <Image
        src={`/images/icons/${label.toLocaleLowerCase()}.svg`}
        width={14}
        height={14}
        alt={label ?? "Option"}
      />
    )}
    <p>{label}</p>
  </div>
);

export default ToggleOption;
