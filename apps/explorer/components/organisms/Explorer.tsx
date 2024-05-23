import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { NumberInput } from "@components";
import { ExplorerBackground, ExplorerToggle } from "@explorer-components";
import { NFT } from "src/types";

interface Props {
  data: NFT[];
}

const Explorer: FC<Props> = (props: Props) => {
  const { data } = props;

  const [toggle, setToggle] = useState<"solana" | "bitcoin">("solana");

  //TODO: handle toggle change
  useEffect(() => {
    if (toggle === "solana") {
    }
    if (toggle === "bitcoin") {
    }
  }, [toggle]);

  const handleSearch = (input: number) => {
    //TODO: filter data based on search
  };

  return (
    <div className="flex gap-2 relative min-w-[300px] w-full 2xl:w-[1554px] min-h-[800px] 2xl:h-[1005px] bg-cf-green-950 2xl:bg-transparent mt-2 2xl:-mt-0.5 py-5 pr-4 pl-8">
      {/* filter, search, sort */}
      <div className="flex flex-col gap-3 lg:w-[200px] 2xl:w-[276px] ">
        <ExplorerToggle toggle={toggle} setToggle={setToggle} />
        <NumberInput placeholder="search id" handleInput={handleSearch} />
      </div>
      {/* tags & grid */}
      <div className="flex flex-col gap-3"></div>
      <ExplorerBackground />
    </div>
  );
};
export default Explorer;
