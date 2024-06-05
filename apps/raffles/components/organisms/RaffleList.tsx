import { Dispatch, SetStateAction, FC } from "react";
import { raffles } from "@raffles-constants";
import { midExitAnimation } from "src/constants";
import { motion } from "framer-motion";
import { Raffles } from "@raffles-types";
import { RaffleItem } from "..";

interface Props {
  raffles: Raffles[];
}

const RaffleList: FC<Props> = (props: Props) => {
  const { raffles } = props;

  return (
    <motion.div
      key="raffles"
      {...midExitAnimation}
      className="my-10 2xl:mx-5 flex flex-wrap gap-8 items-center"
    >
      {raffles.map((raffle, index) => (
        <RaffleItem key={index} metadata={raffle} />
      ))}
    </motion.div>
  );
};
export default RaffleList;
