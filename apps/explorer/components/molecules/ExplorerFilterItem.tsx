import { FC, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { dropdownParent, expandHeight } from "@constants";
import { ExplorerFilter } from "@explorer-types";
import { DropdownItem } from "@explorer-components";

interface ExplorerFilterItemProps {
  filter: ExplorerFilter;
  index: number;
  handleFilter: (text: string) => void;
}
const ExplorerFilterItem: FC<ExplorerFilterItemProps> = (
  props: ExplorerFilterItemProps
) => {
  const { filter, index, handleFilter } = props;

  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const isDropdown = filter?.dropdown ? true : false;

  const handleClick = () => {
    if (isDropdown) {
      setOpenDropdown(!openDropdown);
    }
  };

  //used to calculate duration/delay of dropdown
  const heightDuration = (length: number): number => length * 0.1 + 0.2;
  const heightDelay = (length: number): number => length * 0.03;

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
        className={`flex flex-col pl-5 py-4 uppercase ${
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
        <motion.div
          {...expandHeight(
            openDropdown,
            heightDuration(filter?.dropdown?.length ?? 0),
            heightDelay(filter?.dropdown?.length ?? 0)
          )}
        >
          {isDropdown && (
            <AnimatePresence>
              {openDropdown && (
                <motion.div
                  className="flex flex-col py-3 gap-1"
                  variants={dropdownParent}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {filter.dropdown?.map((item, i) => (
                    <DropdownItem
                      item={item}
                      key={i}
                      isDropdown={isDropdown}
                      handleFilter={handleFilter}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </motion.div>
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

export default ExplorerFilterItem;
