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
import Image from "next/image";

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
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-2 relative w-full 2xl:w-[1554px] h-[1000px] 2xl:h-[1005px] bg-cf-green-950 2xl:bg-transparent mt-2 2xl:-mt-0.5 pl-3 lg:pl-5 2xl:pl-8 py-3 lg:py-5">
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

        <div className="hidden lg:flex flex-col explorer-scroll overflow-y-auto overflow-x-hidden pr-5">
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
      <div className="z-[1] flex flex-col md:mx-4 lg:mx-7 overflow-hidden">
        <FilterTags
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          handleFilter={handleFilter}
        />
        <div
          className={`z-[1] grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-4 lg:gap-8 pr-2 explorer-scroll ${
            selectedFilters.length > 0
              ? "pt-4 lg:pt-[26px]"
              : "pt-4 lg:pt-[56px]"
          }`}
        >
          {data.map((nft: NFT, index) => (
            <div className="flex flex-col relative" key={index}>
              <Image
                src={nft.content.links.image}
                width={356}
                height={356}
                alt={index.toString()}
              />
              <div className="relative">
                <Image
                  src="/images/explorer/card-bg.svg"
                  width={356}
                  height={69}
                  alt={index.toString()}
                />{" "}
                <div className="flex flex-col gap-0 uppercase absolute left-3 top-[25%] xs:top-[15%] sm:top-[20%] md:top-[15%] lg:top-[20%]">
                  <p>
                    Cyber Frog{" "}
                    <span className="ml-1 text-cf-gold-500">
                      {nft.content.metadata.name.slice(5).replace("#", "NO ")}
                    </span>
                  </p>
                  {/* TODO: add rank */}
                  <p className="text-cf-white/50 text-sm">Rank 69</p>
                </div>
              </div>
            </div>
          ))}
        </div>
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
