import { FC } from "react";
import Image from "next/image";
import { fastExitAnimation } from "src/constants";
import { motion } from "framer-motion";
import { SelectedFilter } from "@explorer-types";

interface Props {
  selectedFilters: SelectedFilter[];
  setSelectedFilters: (selectedFilters: SelectedFilter[]) => void;
  handleFilter: (selectedFilter: SelectedFilter) => void;
}

const FilterTags: FC<Props> = (props: Props) => {
  const { selectedFilters, setSelectedFilters, handleFilter } = props;

  return (
    <div className="flex md:gap-3 mt-2.5">
      {selectedFilters.length > 0 && (
        <motion.div
          onClick={() => setSelectedFilters([])}
          className="cursor-pointer"
          key="clear-all"
          {...fastExitAnimation}
        >
          <Image
            src="/images/general/buttons/clear-all.svg"
            width={99}
            height={30}
            alt="Clear All"
            className="button-transition min-w-[99px] hidden md:flex"
          />
        </motion.div>
      )}
      <div className="flex flex-wrap gap-3 ">
        {selectedFilters.map((filter, index) => (
          <motion.div
            key={index}
            className="row-centered flex gap-1 items-center px-3 border border-cf-green-800 cursor-pointer text-cf-white text-xs md:text-sm"
            {...fastExitAnimation}
            onClick={() => handleFilter(filter)}
          >
            <span className="hidden md:flex text-cf-white/50">
              {filter.category}:{" "}
            </span>

            <p>{filter.filter}</p>
            <p className="text-cf-white/50 ml-1.5 text-base">x</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FilterTags;
