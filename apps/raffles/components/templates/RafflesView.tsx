import { Dispatch, SetStateAction, FC } from "react";
import Image from "next/image";
import { Heading } from "@components";
import { handleAssetLoad } from "@utils";
import { raffles } from "@raffles-constants";
import { Raffles } from "@raffles-types";
import { AnimatePresence, motion } from "framer-motion";
import { midExitAnimation } from "src/constants";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const RafflesView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  const showRaffles = raffles.length > 0;

  return (
    <div className="w-full flex flex-col px-3 md:px-12 2xl:px-0 mt-10 ">
      {/* heading & image */}
      <div className="relative w-full flex flex-col xl:flex-row justify-between px-3 md:px-0 2xl:ml-4">
        <Heading />

        {showRaffles && (
          <Image
            src="/images/raffles/intro.jpg"
            width={1017}
            height={208}
            alt="Raffles"
            className="hidden xl:block xl:opacity-80 2xl:opacity-100 -mt-10 mx-5"
            // onLoad={() => handleAssetLoad(0, setAssets)}
          />
        )}
      </div>
      {/* raffles */}
      <AnimatePresence mode="wait">
        {!showRaffles ? (
          <motion.div key="no-raffles" {...midExitAnimation}>
            <Image
              src="/images/raffles/empty.png"
              width={1219}
              height={860}
              alt="Mp Raffles"
              className="mt-20 lg:-mt-20 lg:p-10"
            />
          </motion.div>
        ) : (
          <motion.div key="raffles" {...midExitAnimation} className="my-10">
            Raffles
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default RafflesView;
