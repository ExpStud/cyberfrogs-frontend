import { FC, useContext } from "react";
import { NFT } from "@types";
import Image from "next/image";
import { motion } from "framer-motion";
import { ImageShimmer } from "@components";
import { ViewContext } from "@contexts";
import { midEnterAnimation } from "@constants";

interface Props {
  metadata: NFT | undefined;
  isLoadingCard?: boolean;
}

const UserNft: FC<Props> = (props: Props) => {
  const { metadata, isLoadingCard = false } = props;

  const { setShowExplorerModal } = useContext(ViewContext);

  //TODO: add rank
  const rank = 69;

  return (
    <motion.div
      className="flex flex-col relative cursor-pointer"
      onClick={() => metadata && setShowExplorerModal(metadata)}
      {...midEnterAnimation}
    >
      <ImageShimmer
        src={metadata?.content?.links?.image ?? ""}
        alt={metadata?.content?.metadata?.name ?? "Cyber Frog"}
        width={356}
        height={356}
        shimmerOnly={isLoadingCard}
      />
      <div className="relative">
        <Image
          src="/images/explorer/card-bg.svg"
          width={356}
          height={69}
          alt={metadata?.content?.metadata?.name.slice(5) ?? "Loading"}
        />{" "}
        <div className="flex flex-col gap-0 uppercase absolute left-3 top-[25%] xs:top-[15%] sm:top-[20%] md:top-[15%] lg:top-[20%]">
          <p>
            Cyber Frog{" "}
            {!isLoadingCard && (
              <span className="ml-1 text-cf-gold-500">
                {metadata?.content?.metadata?.name.slice(5).replace("#", "NO ")}
              </span>
            )}
          </p>

          <p className="text-cf-white/50 text-sm">
            Rank {!isLoadingCard && rank}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default UserNft;
