import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ImageShimmer } from "@components";
import { midEnterAnimation } from "@constants";
import { Raffles } from "@raffles-types";
import { Countdown } from "@raffles-components";

interface Props {
  metadata: Raffles;
  isLoadingCard?: boolean;
}

const RaffleItem: FC<Props> = (props: Props) => {
  const { metadata, isLoadingCard = false } = props;

  //TODO: add participants
  const participants = 420;

  return (
    <motion.div
      className="bg-raffleCardBg flex flex-col relative w-[374px] h-[544px] pl-9 pt-9 -ml-3.5"
      {...midEnterAnimation}
    >
      <ImageShimmer
        src={metadata?.links?.image ?? "/images/dashboard/cf-4678.webp"}
        alt={metadata?.metadata?.name ?? "Cyber Frog"}
        width={300}
        height={300}
        shimmerOnly={isLoadingCard}
        hover
      />
      <div className="relative py-4">
        <div className="flex flex-col justify-center gap-0 uppercase">
          <div className="flex gap-2">
            Ends In <Countdown date={metadata.endDate} />
          </div>

          <p className="text-cf-white/50 text-sm">
            Participants {participants}
          </p>
        </div>
      </div>
      <Image
        src="/images/buttons/participate.svg"
        width={300}
        height={40}
        alt="Clear All"
        className="cursor-pointer button-transition min-w-[99px] mt-4"
        onClick={() => console.log("TODO: handle Raffle")}
      />
    </motion.div>
  );
};

export default RaffleItem;
