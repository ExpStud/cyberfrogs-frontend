import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { NumberInput } from "@components";
import { ExplorerBackground, ExplorerToggle } from "@explorer-components";
import { NFT } from "src/types";
import { AnimatePresence, motion } from "framer-motion";
import { dropdownAnimations } from "src/constants";

interface Props {
  data: NFT[];
}

type ExplorerFilter = {
  name: string;
  switch?: boolean;
  dropdown?: string[];
};

const filters: ExplorerFilter[] = [
  { name: "upgraded art only", switch: true },
  { name: "Alpha", dropdown: ["Alpha 1", "Alpha 2", "Alpha 3"] },
  {
    name: "Background",
    dropdown: ["Background 1", "Background 2", "Background 3"],
  },
  { name: "Beta", dropdown: ["Beta 1", "Beta 2", "Beta 3"] },
  { name: "Eyes", dropdown: ["Eyes 1", "Eyes 2", "Eyes 3"] },
  { name: "Faction", dropdown: ["Faction 1", "Faction 2", "Faction 3"] },
  { name: "Headware", dropdown: ["Headware 1", "Headware 2", "Headware 3"] },
  { name: "Item", dropdown: ["Item 1", "Item 2", "Item 3"] },
  { name: "Mouth", dropdown: ["Mouth 1", "Mouth 2", "Mouth 3"] },
  { name: "Outfit", dropdown: ["Outfit 1", "Outfit 2", "Outfit 3"] },
  { name: "Skin", dropdown: ["Skin 1", "Skin 2", "Skin 3"] },
];

const Explorer: FC<Props> = (props: Props) => {
  const { data } = props;

  const [toggle, setToggle] = useState<"solana" | "bitcoin">("solana");

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

  return (
    <div className="flex gap-2 relative w-full 2xl:w-[1554px] min-h-[800px] 2xl:h-[1005px] bg-cf-green-950 2xl:bg-transparent mt-2 2xl:-mt-0.5 p-3 lg:p-5 2xl:pl-8">
      {/* filter, search, sort */}
      <div className="flex flex-col gap-4 lg:gap-6 sm:w-[276px] overflow-y-auto overflow-x-hidden">
        <ExplorerToggle toggle={toggle} setToggle={setToggle} />
        <NumberInput placeholder="search id" handleInput={handleSearch} />
        <div className="flex flex-col">
          {filters.map((filter, index) => (
            <ExplorerFilterItem key={index} filter={filter} index={index} />
          ))}
        </div>
      </div>
      {/* tags & grid */}
      <div className="flex flex-col gap-3"></div>
      <ExplorerBackground />
    </div>
  );
};

interface ExplorerFilterItemProps {
  filter: ExplorerFilter;
  index: number;
}
const ExplorerFilterItem: FC<ExplorerFilterItemProps> = (
  props: ExplorerFilterItemProps
) => {
  const { filter, index } = props;

  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const isDropdown = filter?.dropdown;

  const handleClick = () => {
    if (isDropdown) {
      setOpenDropdown(!openDropdown);
    }
  };

  return (
    <div className="flex flex-col ">
      {index === 0 && (
        <Image
          src="/images/explorer/filter-divider.svg"
          width={276}
          height={1}
          alt="Divider"
        />
      )}
      <div
        className={`flex flex-col gap-2 pl-5 py-4 uppercase ${
          isDropdown ? " cursor-pointer" : ""
        }`}
        onClick={handleClick}
      >
        <div className="flex justify-between">
          <p>{filter.name}</p>
          {isDropdown && (
            <p className="text-lg leading-none">{openDropdown ? "-" : "+"}</p>
          )}
        </div>
        {/* TODO: animate height on open and cascade children */}
        {isDropdown && (
          <AnimatePresence>
            {openDropdown && (
              <motion.div
                className="flex flex-col"
                initial={{ opacity: 0, y: -10 }} // Initial state of the dropdown
                animate={{ opacity: 1, y: 0 }} // Final state of the dropdown
                exit={{ opacity: 0, y: -10 }} // State of the dropdown when it's being removed
                transition={{ duration: 0.2 }} // Optional: Add a transition effect
              >
                {filter.dropdown?.map((item, i) => (
                  <div className="" key={i}>
                    {item}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
      <Image
        src="/images/explorer/filter-divider.svg"
        width={276}
        height={1}
        alt="Divider"
      />
    </div>
  );
};
export default Explorer;
