import { FC, useContext } from "react";
import { AttributeItem, ImageShimmer, Modal } from "@components";
import { ViewContext } from "@contexts";
import Image from "next/image";
import { Attribute } from "@types";
import { motion } from "framer-motion";

interface Props {
  show: boolean;
  close: () => void;
}

const NftModal: FC<Props> = (props: Props) => {
  const { show, close } = props;

  const { nftModal } = useContext(ViewContext);
  const id = nftModal?.content?.metadata?.name.slice(5).replace("#", "NO ");

  //TODO: add variables
  const rank = 69;
  const ogRank = 420;
  const attrsLength = nftModal?.content?.metadata?.attributes.length ?? 0;

  return (
    <Modal
      show={show}
      onClick={() => close()}
      className="overflow-y-auto lg:overflow-hidden explorer-scroll"
    >
      {nftModal?.content?.links?.image && (
        <div className="h-full flex flex-col lg:flex-row items-start lg:items-start justify-between gap-5 lg:gap-10 ">
          {/* main image */}
          <ImageShimmer
            src={nftModal?.content?.links?.image ?? ""}
            width={532}
            height={532}
            alt={`Cyber Frog ${id}`}
            className=" w-auto sm:w-[420px] xl:w-auto max-w-[532px] xl:min-w-[532px]"
          />
          {/* data */}
          <div className="flex flex-col gap-2">
            <p className="uppercase text-2xl md:text-4xl font-rajdhani">
              Cyber Frog <span className="ml-1 text-cf-gold-500">{id}</span>
            </p>
            <p className="text-cf-white/50 text-sm md:text-base">
              Rank {rank} (og rank {ogRank})
            </p>
            {/* divider */}
            <Image
              src="/images/pages/explorer/filter-divider.svg"
              width={600}
              height={1}
              alt="Divider"
              className="xl:hidden"
            />
            <Image
              src="/images/pages/explorer/divider-long.svg"
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
      )}
    </Modal>
  );
};

export default NftModal;
