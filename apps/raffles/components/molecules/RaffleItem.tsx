import { FC, useContext } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ImageShimmer } from "@components";
import { midEnterAnimation } from "@constants";
import { Raffles } from "@raffles-types";
import { Countdown } from "@raffles-components";
import { ViewContext } from "@contexts";

interface Props {
  metadata: Raffles;
  isLoadingCard?: boolean;
}

const RaffleItem: FC<Props> = (props: Props) => {
  const { metadata, isLoadingCard = false } = props;

  const { setRaffleModal } = useContext(ViewContext);
  //TODO: add participants
  const participants = 420;

  const openModal = () => setRaffleModal(metadata);

  return (
    <motion.div
      className="bg-raffleCardBg flex flex-col relative  w-[374px] max-h-[544px] pl-9 pt-9 -ml-3.5 aspect-[16/11]"
      {...midEnterAnimation}
    >
      <p className="text-xl -mt-2 mb-2 font-rajdhani-bold">
        {metadata?.metadata?.name}
      </p>
      <div className="max-w-[305px]">
        <ImageShimmer
          src={metadata?.links?.image ?? "/images/pages/dashboard/cf-4678.webp"}
          alt={metadata?.metadata?.name ?? "Cyber Frog"}
          width={300}
          height={300}
          shimmerOnly={isLoadingCard}
          hover
          onClick={() => openModal()}
        />
      </div>
      <div className="relative py-2">
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
        src="/images/general/buttons/participate.svg"
        width={300}
        height={40}
        alt="Clear All"
        className="cursor-pointer button-transition min-w-[99px] mt-4 pb-4 pt-1"
        onClick={() => openModal()}
      />
    </motion.div>
  );
};

export default RaffleItem;
