import { Dispatch, FC, SetStateAction, useState } from "react";
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
      <div className="green-container-md relative w-[95vw] md:w-[822px] h-[572px] flex items-center">
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <p>
              Cyber Frog{" "}
              <span className="ml-1 text-cf-gold-500">
                {selectedFrogs[upgradeIndex]?.content?.metadata?.name
                  .slice(5)
                  .replace("#", "NO ")}
              </span>
            </p>
          </div>
          <p className="text-cf-white/50 text-sm">Rank {rank}</p>
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

export default UpgradeFrogs;
