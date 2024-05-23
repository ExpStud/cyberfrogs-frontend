import {
  Dispatch,
  SetStateAction,
  FC,
  useEffect,
  useState,
  use,
  useCallback,
} from "react";
import Image from "next/image";
import { Heading } from "@components";
import {
  ExplorerBackground,
  ListingData,
  TextToggle,
} from "@explorer-components";
import { getAssetsByAuthority, handleAssetLoad } from "@utils";
import { NftDataType } from "@explorer-types";
import { NFT } from "src/types";

interface Props {
  data: NFT[];
}

const Explorer: FC<Props> = (props: Props) => {
  const { data } = props;

  return (
    <div className="flex gap-2 relative min-w-[300px] w-full 2xl:w-[1554px] min-h-[800px] 2xl:h-[1005px] bg-cf-green-950 2xl:bg-transparent mt-2 2xl:-mt-0.5">
      {/* sort & filter */}
      <div className="flex flex-col gap-3 lg:w-[200px] 2xl:w-[276px]"></div>
      {/* tags & grid */}
      <div className="flex flex-col gap-3"></div>
      <ExplorerBackground />
    </div>
  );
};
export default Explorer;
