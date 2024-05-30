import { FC, useEffect, useRef } from "react";
import { NFT } from "@types";
import Image from "next/image";
import { useInView } from "framer-motion";
import { ImageShimmer } from "src/components";

interface Props {
  metadata: NFT;
  isLoadingCard: boolean;
  paginateData: () => void;
  loadingData: boolean;
}

const Explorer: FC<Props> = (props: Props) => {
  const { metadata, isLoadingCard, paginateData, loadingData } = props;

  const ref = useRef(null);
  const isInView = useInView(ref);

  // trigger pagination when last card is in view
  useEffect(() => {
    if (isInView && isLoadingCard && !loadingData) {
      paginateData();
    }
  }, [isInView, isLoadingCard, loadingData, paginateData]);

  return (
    <div className="flex flex-col relative" ref={ref}>
      <ImageShimmer
        src={metadata.content.links.image}
        alt={metadata.content.metadata.name}
        width={356}
        height={356}
        shimmerOnly={isLoadingCard}
      />
      <div className="relative">
        <Image
          src="/images/explorer/card-bg.svg"
          width={356}
          height={69}
          alt={metadata.content.metadata.name.slice(5)}
        />{" "}
        <div className="flex flex-col gap-0 uppercase absolute left-3 top-[25%] xs:top-[15%] sm:top-[20%] md:top-[15%] lg:top-[20%]">
          {isLoadingCard ? (
            <p>
              Loading <span className="text-cf-gold-500">...</span>
            </p>
          ) : (
            <p>
              Cyber Frog{" "}
              <span className="ml-1 text-cf-gold-500">
                {metadata.content.metadata.name.slice(5).replace("#", "NO ")}
              </span>
            </p>
          )}
          {/* TODO: add rank */}
          {!isLoadingCard && (
            <p className="text-cf-white/50 text-sm">Rank 69</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
