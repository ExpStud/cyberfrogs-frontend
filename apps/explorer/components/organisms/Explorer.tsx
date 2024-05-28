import { FC, use, useEffect, useRef, useState } from "react";
import { FilterIcon, NumberInput } from "@components";
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
import { SelectedFilter } from "@explorer-types";

interface Props {
  data: NFT[];
}

const Explorer: FC<Props> = (props: Props) => {
  const { data } = props;

  const [toggle, setToggle] = useState<"solana" | "bitcoin">("solana");
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilter[]>([]);
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

  const handleFilter = (selectedFilter: SelectedFilter) => {
    setSelectedFilters((prev) => {
      const filterExists = prev.some(
        (filter) =>
          filter.category === selectedFilter.category &&
          filter.filter === selectedFilter.filter
      );
      if (filterExists) {
        return prev.filter(
          (filter) =>
            filter.category !== selectedFilter.category ||
            filter.filter !== selectedFilter.filter
        );
      }
      return [...prev, selectedFilter];
    });
  };

  return (
    <div className="flex gap-2 relative w-full 2xl:w-[1554px] h-[1000px] 2xl:h-[1005px] bg-cf-green-950 2xl:bg-transparent mt-2 2xl:-mt-0.5 p-3 lg:p-5 2xl:pl-8">
      {/* sort, search, filter */}
      <div className="flex flex-col sm:flex-row lg:flex-col items-center lg:items-start gap-2 md:gap-4 lg:gap-6 w-full lg:w-auto h-[100px] sm:h-[40px] lg:h-auto">
        <ExplorerToggle toggle={toggle} setToggle={setToggle} />
        <div className="flex gap-4 items-center justify-between sm:w-full">
          <NumberInput
            placeholder="search id"
            handleInput={handleSearch}
            className="w-[230px] sm:w-[169px] md:!w-[276px] min-h-[40px]"
          />
          <FilterIcon className="lg:hidden" />
        </div>

        <div className="hidden lg:flex flex-col custom-scroll overflow-y-auto overflow-x-hidden pr-5">
          {filters.map((filter, index) => (
            <ExplorerFilterItem
              key={filter.name}
              filter={filter}
              index={index}
              handleFilter={handleFilter}
              firstRender={firstRender}
              setFirstRender={setFirstRender}
              selectedFilters={selectedFilters}
            />
          ))}
        </div>
      </div>
      {/* tags & grid */}
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <AnimatePresence mode="wait">
            {selectedFilters.length > 1 && (
              <motion.div
                onClick={() => setSelectedFilters([])}
                className="cursor-pointer"
                key="clear-all"
                {...fastExitAnimation}
              >
                <Image
                  src="/images/buttons/clear-all.svg"
                  width={99}
                  height={30}
                  alt="Clear All"
                />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex flex-wrap gap-3 ">
            {selectedFilters.map((filter, index) => (
              <motion.div
                key={filter.filter}
                className="row-centered px-2 border border-cf-green-800 cursor-pointer"
                {...fastExitAnimation}
                onClick={() => handleFilter(filter)}
              >
                {filter.filter}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <ExplorerBackground />
    </div>
  );
};

export default Explorer;
