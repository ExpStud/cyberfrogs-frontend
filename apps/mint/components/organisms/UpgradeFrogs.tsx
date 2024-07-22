import { Dispatch, FC, HTMLAttributes, SetStateAction, useState } from "react";
import { NFT } from "@types";
import { midExitAnimation } from "@constants";
import { motion } from "framer-motion";
import Image from "next/image";

interface UpgradeFrogsProps {
  selectedFrogs: NFT[];
  handleBack: () => void;
}

const UpgradeFrogs: FC<UpgradeFrogsProps> = (props: UpgradeFrogsProps) => {
  const { selectedFrogs, handleBack } = props;

  const [upgradeIndex, setUpgradeIndex] = useState<number>(0);

  const upgradeNext = () => {
    setUpgradeIndex((prevState) => {
      if (prevState + 1 < selectedFrogs.length) {
        return prevState + 1;
      }
      return prevState;
    });
  };

  //TODO: add rank
  const rank = 420;

  return (
    <motion.div
      key="UpgradeFrogs"
      {...midExitAnimation}
      className="flex flex-col gap-10 "
    >
      {/* frog panel */}
      <div className="green-container-md relative w-[95vw] md:w-[822px] h-[572px] flex flex-col  p-5 md:pt-10">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <p className="text-4xl">
              Cyber Frog{" "}
              <span className="ml-1 text-cf-gold-500">
                {selectedFrogs[upgradeIndex]?.content?.metadata?.name
                  .slice(5)
                  .replace("#", "NO ")}
              </span>
            </p>
            <ShareButton onClick={() => window.open("https://x.com/", "/")} />
          </div>
          <p className="text-cf-white/50 text-2xl">Rank {rank}</p>
        </div>
        <Image
          src="/images/general/backgrounds/upgrade-frogs.svg"
          width={822}
          height={572}
          alt="Connect"
          className="hidden md:block absolute inset-0 -z-10 min-w-[539px] min-h-[93px] object-cover"
        />
      </div>
      {/* action panel */}
      <div className="green-container flex flex-col sm:flex-row justify-between items-center gap-5 p-5 sm:py-0 w-[90vw] md:w-[80vw] lg:w-[820px] min-h-[80px]">
        <p className="block text-xl font-rajdhani-semibold">
          Frog {upgradeIndex + 1} of {selectedFrogs.length} upgraded
        </p>
        {upgradeIndex + 1 === selectedFrogs.length ? (
          <div
            className="underline cursor-pointer"
            onClick={() => handleBack()}
          >
            upgrade more?
          </div>
        ) : (
          <Image
            src="/images/general/buttons/upgrade-another.svg"
            width={270}
            height={40}
            alt="Connect"
            className="cursor-pointer button-transition min-w-[99px] z-10"
            onClick={() => upgradeNext()}
          />
        )}
      </div>
      {/* return */}
      <div
        className="underline cursor-pointer -mt-8 self-center text-sm font-rajdhani-semibold"
        onClick={() => handleBack()}
      >
        back to select screen
      </div>
    </motion.div>
  );
};

interface ShareButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const ShareButton: FC<ShareButtonProps> = (props: ShareButtonProps) => {
  const { ...buttonProps } = props;
  return (
    <button
      className="button-transition relative flex items-center justify-center bg-transparent border-0 p-0 cursor-pointer"
      style={{ width: "115px", height: "32px" }}
      {...buttonProps}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="115"
        height="32"
        viewBox="0 0 115 32"
        fill="none"
        className="absolute top-0 left-0"
      >
        <path
          d="M5 5L10 0H115V27L112.5 29.5L110 32H0V5H5Z"
          fill="#124835"
          fillOpacity="0.65"
        />
      </svg>
      <span className="z-10 text-sm font-semibold text-white uppercase">
        Share on X
      </span>
    </button>
  );
};

export default UpgradeFrogs;
