import { FC, useContext } from "react";
import { NFT } from "@types";
import { midExitAnimation } from "@constants";
import Image from "next/image";
import { motion } from "framer-motion";
import { UserNft } from "@mint-components";
import { ViewContext } from "@contexts";

interface SelectFrogsProps {
  nfts: NFT[];
  isLoading: boolean;
  selectedFrogs: NFT[];
  handleSelected: (nft: NFT) => void;
  handleUpgrade: () => void;
}

const SelectFrogs: FC<SelectFrogsProps> = (props: SelectFrogsProps) => {
  const { nfts, isLoading, selectedFrogs, handleSelected, handleUpgrade } =
    props;
  const { setUpgradeModal } = useContext(ViewContext);

  return (
    <motion.div
      key="SelectFrogs"
      {...midExitAnimation}
      className="flex flex-col xl:flex-row justify-evenly xl:justify-center w-full h-auto xl:gap-10 px-1 sm:px-5 md:px-10 lg:px-12"
    >
      <div className="green-container relative w-full xl:max-w-[1100px] h-[60%] md:h-[55%] xl:h-[70vh] xl:min-h-[700px] 2xl:min-h-[750px] xl:max-h-[850px] xl:mb-10  overflow-y-auto explorer-scroll">
        <p className="text-lg lg:text-xl px-5 xl:px-10 pt-5 xl:pt-10">
          select your frogs to upgrade{" "}
          <span className="ml-1 text-cf-gold">{selectedFrogs.length}</span>
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-2.5 lg:gap-5 p-5 xl:p-10 ">
          {nfts.length === 0 && !isLoading ? (
            <div className="">No Frogs found</div>
          ) : (
            [...nfts].map((nft, i) => (
              <UserNft
                metadata={nft}
                isLoadingCard={false}
                key={i}
                handleSelected={handleSelected}
                isSelected={selectedFrogs.some(
                  (frog) =>
                    frog.content?.metadata?.name === nft.content?.metadata?.name
                )}
              />
            ))
          )}
          {/* loading card */}
          {nfts.length === 0 && isLoading && (
            <UserNft
              metadata={undefined}
              isLoadingCard={true}
              handleSelected={() => {}}
            />
          )}
        </div>
      </div>

      <div className="green-container explorer-scroll w-full xl:max-w-[350px] h-[35%] xl:h-[500px] flex flex-col justify-between items-start px-10 py-5 xl:py-12 gap-3 overflow-y-auto ">
        <p className="text-xl">your upgrade cost</p>
        <div className="flex justify-between w-full">
          <p>Your Balance</p>
          <p className="text-cf-gold">11,200 KIRA</p>
        </div>
        <div className="flex justify-between w-full">
          <p>selected Frogs</p>
          <p className="text-cf-gold">{selectedFrogs.length}</p>
        </div>
        <Image
          src="/images/pages/dashboard/divider.svg"
          width={300}
          height={1}
          alt="Divider"
        />
        <div className="font-rajdhani-bold flex justify-between w-full">
          <p>total cost</p>
          <p className="text-cf-gold">{selectedFrogs.length * 2500} KIRA</p>
        </div>

        <div className="flex flex-col gap-3 mt-5 text-xs text-cf-white/85">
          <p className="text-sm font-rajdhani-semibold">important</p>
          <p className="normal-case">
            If you select more than one frog you are about to prepay for your
            frogs. This will let you upgrade them at your pleasure without
            needing to pay each time.
          </p>
          <div
            className="text-cf-gold flex gap-3 items-center mt-2 hover:underline cursor-pointer"
            onClick={() => setUpgradeModal(true)}
          >
            <p>Pricing, Multipliers, and Discounts</p>
            <svg
              width="6"
              height="9"
              viewBox="0 0 6 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-[1px]"
            >
              <path
                d="M5.28809 4.92871C5.28809 5.10156 5.21777 5.25977 5.07715 5.40332L1.69336 8.7124C1.63477 8.76807 1.57178 8.81055 1.50439 8.83984C1.43701 8.86621 1.3623 8.87939 1.28027 8.87939C1.17187 8.87939 1.07227 8.85303 0.981445 8.80029C0.890625 8.74756 0.818848 8.67725 0.766113 8.58936C0.713379 8.49854 0.687012 8.39893 0.687012 8.29053C0.687012 8.12646 0.74707 7.98291 0.867187 7.85986L4.08398 4.72656L4.08398 5.12646L0.867187 2.00195C0.74707 1.87891 0.687011 1.73535 0.687011 1.57129C0.687011 1.46289 0.713379 1.36475 0.766113 1.27686C0.818847 1.18604 0.890625 1.11426 0.981445 1.06152C1.07227 1.00879 1.17187 0.982422 1.28027 0.982422C1.44141 0.982422 1.57764 1.03955 1.68896 1.15381L5.07715 4.4541C5.14746 4.52441 5.2002 4.59912 5.23535 4.67822C5.26758 4.75439 5.28516 4.83789 5.28809 4.92871Z"
                fill="#FFF79E"
              />
            </svg>
          </div>
        </div>

        <Image
          src="/images/general/buttons/upgrade.svg"
          width={270}
          height={40}
          alt="Upgrade"
          className="cursor-pointer button-transition min-w-[99px] z-10"
          onClick={() => handleUpgrade()}
        />
      </div>
    </motion.div>
  );
};

export default SelectFrogs;
