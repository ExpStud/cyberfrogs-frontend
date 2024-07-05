import { FC, useContext } from "react";
import { ImageShimmer, Modal } from "@components";
import { ViewContext } from "@contexts";
import Image from "next/image";
import { Attribute } from "@types";
import { motion } from "framer-motion";

interface Props {
  show: boolean;
  close: () => void;
}

const ExplorerModal: FC<Props> = (props: Props) => {
  const { show, close } = props;

  const { nftModal } = useContext(ViewContext);
  const id = nftModal?.content?.metadata?.name.slice(5).replace("#", "NO ");

  //TODO: add variables
  const rank = 69;
  const ogRank = 420;
  const attrsLength = nftModal?.content?.metadata?.attributes.length ?? 0;

  console.log("modal", nftModal);

  return (
    <Modal
      show={show}
      onClick={() => close()}
      className="overflow-y-auto lg:overflow-hidden explorer-scroll"
    >
      <div className="h-full flex flex-col lg:flex-row items-start lg:items-start justify-between gap-5 lg:gap-10 ">
        {/* main image */}
        <ImageShimmer
          src={nftModal?.content?.links?.image ?? ""}
          width={532}
          height={532}
          alt={`Cyber Frog ${id}`}
          className=" w-[330px] lg:w-[420px] xl:w-auto max-w-[532px]"
        />
        {/* data */}
        <div
          className="flex flex-col gap-2"
          // style={{ maxHeight: "90vh" }}
        >
          <p className="uppercase text-2xl md:text-4xl font-rajdhani">
            Cyber Frog <span className="ml-1 text-cf-gold-500">{id}</span>
          </p>
          <p className="text-cf-white/50 text-sm md:text-base">
            Rank {rank} (og rank {ogRank})
          </p>
          {/* divider */}
          <Image
            src="/images/explorer/filter-divider.svg"
            width={600}
            height={1}
            alt="Divider"
            className="xl:hidden"
          />
          <Image
            src="/images/explorer/divider-long.svg"
            width={900}
            height={1}
            alt="Divider"
            className="hidden xl:block"
          />
          <p className="text-cf-white/50 text-sm lg:text-base my-5">
            Attributes {attrsLength}
          </p>
          {/* attributes */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-5  ${
              attrsLength > 8
                ? "xl:grid-cols-3 xl:grid-rows-4 xl:grid-flow-col "
                : ""
            }`}
          >
            {nftModal?.content?.metadata?.attributes.map((attr, i) => (
              <AttributeItem key={i} data={attr} attrsLength={attrsLength} />
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

interface AttributeProps {
  data: Attribute;
  attrsLength: number;
}
const AttributeItem: FC<AttributeProps> = (props: AttributeProps) => {
  const { data, attrsLength } = props;

  //TODO: add percentage and sol value
  const percentage = Math.floor(Math.random() * 100) + 1;
  const solValue = 42.0;
  const animatedWidth = (percentage / 100) * 375;

  return (
    <div
      className={`flex flex-col gap-0 mb-3 text-sm 2xl:text-base ${
        attrsLength < 9 ? "items-start" : ""
      }`}
    >
      <p className="text-cf-white whitespace-nowrap text-ellipsis">
        {data.trait_type}{" "}
        <span className="text-cf-gold ml-2">{data.value}</span>
      </p>
      <p className="text-cf-white/50">
        {percentage}% ({solValue} SOL)
      </p>
      {/* progress bar */}
      <svg
        width="375"
        height="4"
        viewBox="0 0 375 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`mt-2 w-full`}
      >
        <rect width="375" height="4" fill="#081F17" />
        <motion.rect
          initial={{ width: 0 }}
          animate={{ width: animatedWidth }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          height="4"
          fill="#FFF79E"
        />
      </svg>
    </div>
  );
};

export default ExplorerModal;
