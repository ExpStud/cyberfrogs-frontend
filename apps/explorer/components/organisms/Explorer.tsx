import { FC, useEffect, useRef, useState } from "react";
import { NumberInput } from "@components";
import {
  ExplorerBackground,
  ExplorerFilterItem,
  ExplorerToggle,
} from "@explorer-components";
import { NFT } from "@types";
import { filters } from "@explorer-constants";
import Image from "next/image";
import { fastExitAnimation, midExitAnimation } from "src/constants";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  data: NFT[];
}

const Explorer: FC<Props> = (props: Props) => {
  const { data } = props;

  const [toggle, setToggle] = useState<"solana" | "bitcoin">("solana");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [firstRender, setFirstRender] = useState<boolean>(true);

  useEffect(() => {
    //TODO: handle toggle change
    if (toggle === "solana") {
    }
    if (toggle === "bitcoin") {
    }
  }, [toggle]);

  const handleSearch = (input: number) => {
    //TODO: filter data based on search
  };

  const handleFilter = (text: string) => {
    setSelectedFilters((prev) => {
      if (prev.includes(text)) {
        return prev.filter((item) => item !== text);
      }
      return [...prev, text];
    });
  };

  return (
    <div className="flex gap-2 relative w-full 2xl:w-[1554px] h-[1000px] 2xl:h-[1005px] bg-cf-green-950 2xl:bg-transparent mt-2 2xl:-mt-0.5 p-3 lg:p-5 2xl:pl-8">
      {/* filter, search, sort */}
      <div className=" flex flex-col gap-4 lg:gap-6 w-auto ">
        <ExplorerToggle toggle={toggle} setToggle={setToggle} />
        <NumberInput
          placeholder="search id"
          handleInput={handleSearch}
          className="w-[276px]"
        />
        <div className="flex flex-col custom-scroll overflow-y-auto overflow-x-hidden pr-5">
          {filters.map((filter, index) => (
            <ExplorerFilterItem
              key={index}
              filter={filter}
              index={index}
              handleFilter={handleFilter}
              firstRender={firstRender}
              setFirstRender={setFirstRender}
              clearFilters={selectedFilters.length === 0}
            />
          ))}
        </div>
      </div>
      {/* tags & grid */}
      <div className="flex flex-col gap-3">
        <div className="">
          <AnimatePresence mode="wait">
            {selectedFilters.length > 0 ? (
              <motion.div className="" {...fastExitAnimation} key="tags">
                <div
                  onClick={() => setSelectedFilters([])}
                  className="cursor-pointer"
                >
                  <Image
                    src="/images/buttons/clear-all.svg"
                    width={99}
                    height={30}
                    alt="Clear All"
                  />
                </div>
              </motion.div>
            ) : (
              <></>
            )}
          </AnimatePresence>
        </div>
      </div>
      <ExplorerBackground />
    </div>
  );
};

export default Explorer;
