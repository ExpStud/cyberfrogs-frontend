import { FC, useContext } from "react";
import { ImageShimmer, Modal } from "@components";
import { ViewContext } from "@contexts";
import { Countdown } from "@raffles-components";

interface Props {
  show: boolean;
  close: () => void;
}

const RaffleModal: FC<Props> = (props: Props) => {
  const { show, close } = props;

  const { raffleModal } = useContext(ViewContext);
  const id = raffleModal?.metadata?.name.slice(5).replace("#", "NO ");

  //TODO: add variables
  const participants = 420;
  const price = 69;

  return (
    <Modal
      show={show}
      onClick={() => close()}
      className="overflow-y-auto lg:overflow-hidden explorer-scroll"
    >
      {raffleModal?.links?.image && (
        <div className="h-full flex flex-col lg:flex-row items-start lg:items-start justify-between gap-5 lg:gap-10 ">
          {/* main image */}
          <ImageShimmer
            src={raffleModal?.links?.image ?? ""}
            width={532}
            height={532}
            alt={raffleModal?.metadata?.name}
            className=" w-auto sm:w-[420px] xl:w-auto max-w-[532px] xl:min-w-[532px]"
          />
          {/* data */}
          <div className="flex flex-col gap-2 w-full">
            <p className="uppercase text-2xl md:text-4xl font-rajdhani">
              Item{" "}
              <span className="ml-1 text-cf-gold-500">
                {raffleModal?.metadata?.name}
              </span>
            </p>
            <div className="flex flex-col flex-wrap sm:flex-row gap-0 sm:gap-5 ">
              <div className="flex gap-2 text-cf-white/50 w-[173px]">
                Ends In{" "}
                <Countdown
                  date={raffleModal?.endDate}
                  className="!text-cf-white"
                />
              </div>
              <div className="flex gap-2 text-cf-white/50">
                participants{" "}
                <span className="text-cf-white">{participants}</span>
              </div>
              <div className="flex gap-2 text-cf-white/50">
                price per ticket <span className="text-cf-white">{price}</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5 xl:gap-10 2xl:gap-20 2xl:mr-10">
              {/* connect wallet */}
              <div className="flex flex-col gap-2">
                <p className="text-cf-white ">Buy Tickets</p>
                <button className="bg-cf-orange">connect wallet</button>
              </div>
              {/* description */}
              <div className="flex flex-col gap-2 max-h-[200px] overflow-hidden">
                <p className="text-cf-white">Description</p>
                <p className="text-cf-white/85 text-sm normal-case overflow-hidden">
                  <span className="line-clamp-6">
                    {raffleModal?.metadata?.description}
                  </span>
                </p>
              </div>
              {/* bids */}
              <div className="flex flex-col gap-2 max-h-[200px] overflow-hidden">
                <p className="text-cf-white">My Bids</p>
              </div>
              {/* bids history */}
              <div className="flex flex-col gap-2 max-h-[200px] overflow-hidden">
                <p className="text-cf-white">Bids History</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default RaffleModal;
