import { FC, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import Image from "next/image";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { motion } from "framer-motion";
import { midExitAnimation } from "@constants";
import { NumberInput } from "src/components";

interface Props {}

const BuyTickets: FC<Props> = (props: Props) => {
  const {} = props;
  const [tickets, setTickets] = useState<number>(1);

  const { connected, publicKey } = useWallet();
  const { setVisible } = useWalletModal();

  //TODO: add balance
  const solbalance = 69;

  const handlePurchase = () => {};

  return (
    <div className="flex flex-col gap-2">
      <p className="text-cf-white ">Buy Tickets</p>
      {connected ? (
        <motion.div
          key="participate"
          className="flex flex-col gap-2"
          {...midExitAnimation}
        >
          <p className="text-cf-white/50">
            your sol balance{" "}
            <span className="text-cf-white">{solbalance} sol</span>
          </p>
          <motion.div className=""></motion.div>

          <NumberInput
            placeholder="1 ticket"
            handleInput={setTickets}
            className="!w-full !h-[40px] bg-cf-green-999 max-w-[300px]"
            max={100}
          />
          <Image
            src="/images/general/buttons/participate.svg"
            width={300}
            height={40}
            alt="Clear All"
            className="cursor-pointer button-transition min-w-[99px] mt-0"
            onClick={() => handlePurchase()}
          />
        </motion.div>
      ) : (
        <motion.div key="connect" {...midExitAnimation}>
          <Image
            src="/images/general/buttons/connect-wallet.svg"
            width={300}
            height={40}
            alt="Clear All"
            className="cursor-pointer button-transition min-w-[99px] mt-0"
            onClick={() => setVisible(true)}
          />
        </motion.div>
      )}
    </div>
  );
};

export default BuyTickets;
