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
      className="flex flex-col relative cursor-pointer min-w-[256px]"
      onClick={() => metadata && setShowExplorerModal(metadata)}
      {...midEnterAnimation}
    >
      <ImageShimmer
        src={
          metadata?.content?.links?.image ?? "/images/dashboard/cf-4678.webp"
        }
        alt={metadata?.content?.metadata?.name ?? "Cyber Frog"}
        width={356}
        height={356}
        shimmerOnly={isLoadingCard}
        hover
      />
      <div className="relative">
        {/* <Image
          src="/images/explorer/card-bg.svg"
          width={356}
          height={69}
          alt={metadata?.content?.metadata?.name.slice(5) ?? "Loading"}
        /> */}
        <div className="flex flex-col justify-center px-4 gap-0 uppercase bg-cf-green-900 h-[72px]">
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
        <Image
          src="/images/dashboard/divider.svg"
          width={256}
          height={1}
          alt="Divider"
          className="opacity-75"
        />
      </div>
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="256"
          height="39"
          viewBox="0 0 256 39"
          fill="none"
          className=""
        >
          <path
            d="M0 0H256V29L251 34L246 39H0V0Z"
            fill="#124835"
            fillOpacity="0.25"
          />
        </svg>
        <p className="absolute left-4 bottom-[6px] uppercase text-cf-white/50">
          est value <span className="text-cf-white ml-1">{420} sol </span>
        </p>
      </div>
    </motion.div>
  );
};

export default UserNft;
