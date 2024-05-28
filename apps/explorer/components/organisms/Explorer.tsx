import { FC, useEffect, useState } from "react";
import { FilterIcon, NumberInput } from "@components";
import {
  ExplorerBackground,
  ExplorerFilterItem,
  ExplorerToggle,
  FilterTags,
  MobileFilters,
} from "@explorer-components";
import { NFT } from "@types";
import { filters } from "@explorer-constants";
import { SelectedFilter } from "@explorer-types";
import { useWindowSize } from "@hooks";

interface Props {
  data: NFT[];
}

const Explorer: FC<Props> = (props: Props) => {
  const { data } = props;

  const [toggle, setToggle] = useState<"solana" | "bitcoin">("solana");
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilter[]>([]);
  const [firstRender, setFirstRender] = useState<boolean>(true);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const [winWidth] = useWindowSize();

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

  //close mobile menu on large screens
  useEffect(() => {
    if (winWidth >= 1024) setOpenMenu(false);
  }, [winWidth]);

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-2 relative w-full 2xl:w-[1554px] h-[1000px] 2xl:h-[1005px] bg-cf-green-950 2xl:bg-transparent mt-2 2xl:-mt-0.5 p-3 lg:p-5 2xl:pl-8">
      {/* sort, search, filter */}
      <div className="flex flex-col-reverse  sm:flex-row lg:flex-col sm:items-center lg:items-start  gap-4 lg:gap-6 w-full lg:w-auto h-[100px] sm:h-[40px] lg:h-auto">
        <ExplorerToggle toggle={toggle} setToggle={setToggle} />
        <div className="flex gap-4 items-center justify-between w-full">
          <NumberInput
            placeholder="search id"
            handleInput={handleSearch}
            className="!w-full !max-w-[276px] sm:w-[169px] md:!w-[276px] min-h-[40px]"
          />
          <FilterIcon className="lg:hidden" onClick={() => setOpenMenu(true)} />
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
      <div className="z-[1] flex flex-col md:gap-3">
        <FilterTags
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          handleFilter={handleFilter}
        />
      </div>
      <MobileFilters
        toggleMenu={setOpenMenu}
        open={openMenu}
        handleFilter={handleFilter}
        firstRender={firstRender}
        setFirstRender={setFirstRender}
        selectedFilters={selectedFilters}
      />
      <ExplorerBackground />
    </div>
  );
};

export default Explorer;
