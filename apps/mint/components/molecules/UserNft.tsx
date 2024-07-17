import { FC, useState } from "react";
import { NFT } from "@types";
import Image from "next/image";
import { motion } from "framer-motion";
import { ImageShimmer } from "@components";
import { midEnterAnimation } from "@constants";

interface Props {
  metadata: NFT | undefined;
  isLoadingCard?: boolean;
  handleSelected: (nft: NFT) => void;
  isSelected?: boolean;
}

const UserNft: FC<Props> = (props: Props) => {
  const {
    metadata,
    isLoadingCard = false,
    handleSelected,
    isSelected = false,
  } = props;

  const [didHover, setDidHover] = useState<boolean>(false);

  //TODO: add rank
  const rank = 69;

  return (
    <motion.div
      className={`flex flex-col relative cursor-pointer max-w-[210px] ${
        isSelected ? "outline outline-cf-gold" : ""
      }`}
      onClick={() => metadata && handleSelected(metadata)}
      {...midEnterAnimation}
      onMouseEnter={() => setDidHover(true)}
      onMouseLeave={() => setDidHover(false)}
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
        externalHover={didHover}
      />
      <div className="relative">
        <div className="flex flex-col justify-center p-2 gap-0 uppercase bg-cf-green-900">
          <p className="text-sm md:text-base">
            <span className="hidden md:block">Cyber Frog</span>
            <span className="md:hidden">CF</span>
            {!isLoadingCard && (
              <span className="ml-1 text-cf-gold-500">
                {metadata?.content?.metadata?.name.slice(5).replace("#", "NO ")}
              </span>
            )}
          </p>

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
        <p className="text-xs md:text-sm text-cf-white/50 p-2 bg-[#0D3426]">
          cost <span className="text-cf-white">2500 kira</span>
        </p>
      </div>
    </motion.div>
  );
};

export default UserNft;
