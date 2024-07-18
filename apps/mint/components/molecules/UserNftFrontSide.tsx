import { FC, useState } from "react";
import { NFT } from "@types";
import Image from "next/image";
import { motion } from "framer-motion";
import { ImageShimmer } from "@components";

interface Props {
  metadata: NFT | undefined;
  isLoadingCard?: boolean;
  isFlipped: boolean;
  setIsFlipped: (isFlipped: boolean) => void;
  didHover: boolean;
}

const UserNftFrontSide: FC<Props> = (props: Props) => {
  const {
    metadata,
    isLoadingCard = false,
    isFlipped,
    setIsFlipped,
    didHover,
  } = props;

  //TODO: add rank
  const rank = 69;

  return (
    <motion.div
      className="flex flex-col h-full w-full"
      initial={{ opacity: 1 }}
      animate={{
        opacity: isFlipped ? 0 : 1,
      }}
      transition={{
        rotateY: isFlipped ? 0 : 180,
        duration: isFlipped ? 0.2 : 0.2,
        delay: isFlipped ? 0.1 : 0.1,
      }}
    >
      <ImageShimmer
        src={
          metadata?.content?.links?.image ??
          "/images/pages/dashboard/cf-4678.webp"
        }
        alt={metadata?.content?.metadata?.name ?? "Cyber Frog"}
        width={210}
        height={210}
        shimmerOnly={isLoadingCard}
        externalHover={!isFlipped && didHover}
      />
      <div className="relative">
        <div className="flex flex-col justify-center p-2 gap-0 uppercase bg-cf-green-900">
          <div className="flex text-sm md:text-base whitespace-nowrap">
            <p className="hidden md:block">Cyber Frog</p>
            <p className="md:hidden">CF</p>
            {!isLoadingCard && (
              <p className="ml-1 text-cf-gold-500">
                {metadata?.content?.metadata?.name.slice(5).replace("#", "NO ")}
              </p>
            )}
          </div>

          <p className="text-cf-white/50 text-xs md:text-sm">
            Rank {!isLoadingCard && rank}
          </p>
        </div>
        <Image
          src="/images/pages/dashboard/divider.svg"
          width={256}
          height={1}
          alt="Divider"
          className="opacity-75"
        />
        <div className="flex gap-2 items-center text-xs md:text-sm text-cf-white/50 p-2 bg-[#0D3426]">
          <p>cost </p>
          <p className="text-cf-white whitespace-nowrap">2500 kira</p>{" "}
          <div
            onClick={(e) => {
              e.stopPropagation();
              setIsFlipped(!isFlipped);
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.89205 8.81818L5.9858 4.71023L6.90057 4.71023L6.99148 8.81818L5.89205 8.81818ZM6.44318 2.9375C6.61553 2.9375 6.76326 2.99811 6.88636 3.11932C7.00758 3.24053 7.06818 3.38826 7.06818 3.5625C7.06818 3.73296 7.00758 3.87879 6.88636 4C6.76326 4.12121 6.61553 4.18182 6.44318 4.18182C6.27462 4.18182 6.12879 4.12121 6.00568 4C5.88068 3.87879 5.81818 3.73296 5.81818 3.5625C5.81818 3.44697 5.84754 3.34186 5.90625 3.24716C5.96307 3.15246 6.03882 3.07671 6.13352 3.01989C6.22632 2.96496 6.32954 2.9375 6.44318 2.9375ZM6.44318 0.443182C7.04735 0.443182 7.62311 0.535038 8.17045 0.71875C8.71591 0.902462 9.21686 1.16193 9.67329 1.49716C10.1278 1.83049 10.5227 2.22538 10.858 2.68182C11.1913 3.13636 11.4498 3.63636 11.6335 4.18182C11.8172 4.72917 11.9091 5.30492 11.9091 5.90909C11.9091 6.51326 11.8172 7.08807 11.6335 7.63352C11.4498 8.18087 11.1913 8.68182 10.858 9.13636C10.5227 9.5928 10.1278 9.98769 9.6733 10.321C9.21686 10.6563 8.71591 10.9157 8.17045 11.0994C7.62311 11.2831 7.04735 11.375 6.44318 11.375C5.83902 11.375 5.2642 11.2831 4.71875 11.0994C4.1714 10.9157 3.67045 10.6563 3.21591 10.321C2.75947 9.98769 2.36458 9.5928 2.03125 9.13636C1.69602 8.68182 1.43655 8.18087 1.25284 7.63352C1.06913 7.08807 0.977272 6.51326 0.977272 5.90909C0.977272 5.30493 1.06913 4.72917 1.25284 4.18182C1.43655 3.63636 1.69602 3.13636 2.03125 2.68182C2.36458 2.22538 2.75947 1.83049 3.21591 1.49716C3.67045 1.16193 4.1714 0.902463 4.71875 0.718751C5.2642 0.535038 5.83901 0.443182 6.44318 0.443182ZM6.44318 1.2017C5.92235 1.20171 5.42708 1.28125 4.95739 1.44034C4.48579 1.59943 4.05398 1.82292 3.66193 2.1108C3.26989 2.39867 2.92992 2.73864 2.64204 3.13068C2.35417 3.52273 2.13163 3.9536 1.97443 4.4233C1.81534 4.89489 1.73579 5.39015 1.73579 5.90909C1.73579 6.42993 1.81534 6.92519 1.97443 7.39489C2.13163 7.86648 2.35417 8.2983 2.64204 8.69034C2.92992 9.08239 3.26989 9.42235 3.66193 9.71023C4.05398 9.99811 4.4858 10.2206 4.95739 10.3778C5.42708 10.5369 5.92235 10.6165 6.44318 10.6165C6.96401 10.6165 7.45928 10.5369 7.92898 10.3778C8.39867 10.2206 8.83049 9.99811 9.22443 9.71023C9.61648 9.42235 9.95644 9.08239 10.2443 8.69034C10.5322 8.2983 10.7557 7.86648 10.9148 7.39489C11.072 6.92519 11.1506 6.42992 11.1506 5.90909C11.1506 5.39015 11.072 4.89489 10.9148 4.4233C10.7557 3.9536 10.5322 3.52273 10.2443 3.13068C9.95644 2.73864 9.61648 2.39867 9.22443 2.1108C8.83049 1.82292 8.39867 1.59943 7.92898 1.44034C7.45928 1.28125 6.96401 1.2017 6.44318 1.2017Z"
                fill="#FFFEF3"
                fillOpacity="0.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UserNftFrontSide;
