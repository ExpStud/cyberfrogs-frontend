import { FC, useState } from "react";
import { NFT } from "@types";
import { midExitAnimation } from "@constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShareButton } from "@mint-components";
import { ImageShimmer } from "@components";

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
      className="flex flex-col gap-10 mb-14"
    >
      {/* frog panel */}
      <div className="green-container-md relative w-[93vw] md:w-[750px] lg:w-[822px] h-auto md:h-[572px] flex flex-col items-center gap-5 md:gap-10 p-5 md:p-10">
        <div className="flex flex-col gap-3 w-full">
          <div className="flex justify-between items-center w-full">
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

        {selectedFrogs[upgradeIndex]?.content?.links?.image && (
          <div className="flex  justify-between gap-5 w-full">
            <ImageShimmer
              src={selectedFrogs[upgradeIndex]?.content?.links?.image}
              alt={
                selectedFrogs[upgradeIndex]?.content?.metadata?.name ??
                "Cyber Frog"
              }
              width={350}
              height={350}
            />
            <div className="flex flex-col gap-2.5 items-center">
              <ImageShimmer
                src={selectedFrogs[upgradeIndex]?.content?.links?.image}
                alt={
                  selectedFrogs[upgradeIndex]?.content?.metadata?.name ??
                  "Cyber Frog"
                }
                width={350}
                height={350}
                shimmerOnly={true} //TODO: set to false when new image is loaded
              />
              {/* TODO: add new image url to href, disable if image isnt loaded */}
              <a
                href="/images/pages/dashboard/cf-4678.webp"
                target="_blank"
                rel="noreferrer"
                className="hover:underline text-sm"
              >
                download high-res
              </a>
            </div>
          </div>
        )}

        {/* background */}
        <Image
          src="/images/general/backgrounds/upgrade-frogs.svg"
          width={822}
          height={572}
          alt="Connect"
          className="hidden md:block absolute inset-0 -z-10 min-w-[539px] min-h-[93px] object-cover"
        />
      </div>
      {/* action panel */}
      <div className="self-center green-container flex flex-col sm:flex-row justify-between items-center gap-5 p-5 md:px-10 sm:py-0 w-[93vw] md:w-[750px] lg:w-[822px] min-h-[80px]">
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
      <button
        className="  self-center text-sm font-rajdhani-semibold flex gap-2 items-center uppercase"
        onClick={() => handleBack()}
      >
        <svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.84712 10.3679L0.0246804 5.54545L4.84712 0.723011L5.87127 1.73722L2.8038 4.80469H10.2562V6.28622H2.8038L5.87127 9.34872L4.84712 10.3679Z"
            fill="white"
          />
        </svg>
        back to selection screen
      </button>
    </motion.div>
  );
};

export default UpgradeFrogs;
