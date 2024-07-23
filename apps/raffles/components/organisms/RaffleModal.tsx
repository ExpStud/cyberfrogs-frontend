import { FC, useContext } from "react";
import { ImageShimmer, Modal } from "@components";
import { ViewContext } from "@contexts";
import { BuyTickets, Countdown } from "@raffles-components";
import { truncatePubKey } from "@utils";
import { PublicKey } from "@solana/web3.js";

interface Props {
  show: boolean;
  close: () => void;
}

type BidsEntry = {
  date: Date;
  tickets: number;
  wallet: string;
};

const myBids: BidsEntry[] = [
  {
    date: new Date("2024-10-31T23:59:59.999Z"),
    tickets: 69,
    wallet: "3wP5sQ8E5vkGaWU3FLFX9fXibDjTt56BUGAMP8pe33FX",
  },
  {
    date: new Date("2024-12-31T23:19:59.999Z"),
    tickets: 69,
    wallet: "3wP5sQ8E5vkGaWU3FLFX9fXibDjTt56BUGAMP8pe33FX",
  },
];

const bidHistory: BidsEntry[] = [
  {
    date: new Date("2024-12-30T23:59:59.999Z"),
    tickets: 69,
    wallet: "3wP5sQ8E5vkGaWU3FLFX9fXibDjTt56BUGAMP8pe33FX",
  },
  {
    date: new Date("2024-11-31T23:59:59.999Z"),
    tickets: 69,
    wallet: "3wP5sQ8E5vkGaWU3FLFX9fXibDjTt56BUGAMP8pe33FX",
  },
  {
    date: new Date("2024-12-28T23:59:59.999Z"),
    tickets: 69,
    wallet: "3wP5sQ8E5vkGaWU3FLFX9fXibDjTt56BUGAMP8pe33FX",
  },
  {
    date: new Date("2024-12-31T23:19:59.999Z"),
    tickets: 69,
    wallet: "3wP5sQ8E5vkGaWU3FLFX9fXibDjTt56BUGAMP8pe33FX",
  },
  {
    date: new Date("2024-12-30T23:59:59.999Z"),
    tickets: 69,
    wallet: "3wP5sQ8E5vkGaWU3FLFX9fXibDjTt56BUGAMP8pe33FX",
  },
  {
    date: new Date("2024-11-31T23:59:59.999Z"),
    tickets: 69,
    wallet: "3wP5sQ8E5vkGaWU3FLFX9fXibDjTt56BUGAMP8pe33FX",
  },
  {
    date: new Date("2024-12-28T23:59:59.999Z"),
    tickets: 69,
    wallet: "3wP5sQ8E5vkGaWU3FLFX9fXibDjTt56BUGAMP8pe33FX",
  },
  {
    date: new Date("2024-12-31T23:19:59.999Z"),
    tickets: 69,
    wallet: "3wP5sQ8E5vkGaWU3FLFX9fXibDjTt56BUGAMP8pe33FX",
  },
];

const RaffleModal: FC<Props> = (props: Props) => {
  const { show, close } = props;

  const { raffleModal } = useContext(ViewContext);

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
              <div className="flex gap-2 text-cf-white/50 w-[177px]">
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
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10 sm:gap-10 2xl:gap-16 2xl:mr-10">
              {/* buy tickets */}
              <BuyTickets />
              {/* description */}
              <div className="flex flex-col gap-2 max-h-[200px] overflow-hidden">
                <p className="text-cf-white">Description</p>
                <p className="text-cf-white/65 text-sm normal-case overflow-hidden">
                  <span className="line-clamp-6">
                    {raffleModal?.metadata?.description}
                  </span>
                </p>
              </div>
              {/* bids */}
              <div className="flex flex-col gap-2 max-h-[200px] ">
                <p className="text-cf-white">My Bids</p>
                <div className="flex flex-col gap-2  overflow-auto explorer-scroll pr-5">
                  {myBids.map((bid, index) => (
                    <BidItem key={index} bid={bid} isMyBid />
                  ))}
                </div>
              </div>
              {/* bids history */}
              <div className="flex flex-col gap-2 max-h-[200px] ">
                <p className="text-cf-white">Bid History</p>
                <div className="flex flex-col gap-2  overflow-auto explorer-scroll pr-5">
                  {bidHistory.map((bid, index) => (
                    <BidItem key={index} bid={bid} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

interface BidItemProps {
  bid: BidsEntry;
  isMyBid?: boolean;
}
const BidItem: FC<BidItemProps> = (props: BidItemProps) => {
  const { bid, isMyBid = false } = props;

  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="flex justify-between">
      <p>{formatTime(bid.date)}</p>
      <p className="text-cf-gold">
        {bid.tickets} ticket{bid.tickets > 1 ? "s" : ""}
      </p>
      <p>{isMyBid ? "" : truncatePubKey(new PublicKey(bid.wallet))}</p>
    </div>
  );
};

export default RaffleModal;
