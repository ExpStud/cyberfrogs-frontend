import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CardItem } from "@mint-components";

interface Props {
  isFlipped: boolean;
  setIsFlipped: (isFlipped: boolean) => void;
}

const UserNftBackSide: FC<Props> = (props: Props) => {
  const { isFlipped, setIsFlipped } = props;

  return (
    <motion.div
      className="absolute z-10 h-full w-full flex flex-col justify-between cursor-pointer  bg-cf-green-900 overflow-y-auto explorer-scroll"
      initial={{ rotateY: 180, opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.06 } }}
    >
      <svg
        width="9"
        height="9"
        viewBox="0 0 9 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-2.5 right-2.5"
        onClick={(e) => {
          e.stopPropagation();
          setIsFlipped(!isFlipped);
        }}
      >
        <path
          d="M7.07386 8.35227L0.409091 1.69886L1.69318 0.409091L8.35227 7.07386L7.07386 8.35227ZM1.69318 8.35227L0.409091 7.07386L7.07386 0.409091L8.35227 1.69886L1.69318 8.35227Z"
          fill="#FFFEF3"
          fillOpacity="0.5"
        />
      </svg>

      <p className="text-sm md:text-base px-2 pt-5">
        upgrade cost <br />
        Breakdown
      </p>

      <div className="flex flex-col gap-2 text-[13px] text-xs md:text-sm p-2">
        <CardItem label="Base Price" value="2,500 KIRA" />
        <CardItem label="Factioned" value="yes (-1000)" />
        <CardItem label="Alpha" value="yes (2x)" />
        <CardItem label="beta" value="" isValid={false} />
        <CardItem label="thor" value="" isValid={false} />
      </div>
      <div>
        <Image
          src="/images/pages/dashboard/divider.svg"
          width={256}
          height={1}
          alt="Divider"
          className="opacity-75"
        />
        <div className="flex gap-2 items-center text-xs md:text-sm text-cf-white/50 p-2 bg-[#0D3426] h-[38px]">
          <CardItem label="total" value="5,000 KIRA" />{" "}
        </div>
      </div>
    </motion.div>
  );
};

export default UserNftBackSide;
