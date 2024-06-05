import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  dropdownChild,
  dropdownChildFirstReneer,
  dropdownParent,
  dropdownParentFirstRender,
  expandHeight,
} from "@constants";
import { ExplorerFilter, SelectedFilter } from "@explorer-types";
import { DropdownItem, FilterToggle } from "@explorer-components";
import { TextInput } from "@components";

interface ExplorerFilterItemProps {
  filter: ExplorerFilter;
  index: number;
  handleFilter: (filter: SelectedFilter) => void;
  firstRender: boolean; //disables animation on first render due to initial load
  setFirstRender: (firstRender: boolean) => void;
  selectedFilters: SelectedFilter[];
}
const ExplorerFilterItem: FC<ExplorerFilterItemProps> = (
  props: ExplorerFilterItemProps
) => {
  const {
    filter,
    index,
    handleFilter,
    firstRender,
    setFirstRender,
    selectedFilters,
  } = props;

  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const isDropdown = filter?.dropdown ? true : false;

  const handleClick = () => {
    if (isDropdown) {
      setOpenDropdown(!openDropdown);
    }
  };

  //used to calculate duration/delay of dropdown
  const heightDuration = (length: number): number => length * 0.05 + 0.2;
  const heightDelay = (length: number): number => length * 0.01;

  const isSelected = (filterName: string) => {
    return selectedFilters.some((filter) => filter.filter === filterName);
  };

  const handleSearch = (input: string) => {
    //TODO: handle search
  };
  const handleToggle = (toggled: boolean) => {
    //TODO: handle toggle
  };

  useEffect(() => {
    if (firstRender && openDropdown) setFirstRender(false);
  }, [firstRender, openDropdown, setFirstRender]);

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
          {isDropdown ? (
            <p className="text-lg leading-none">{openDropdown ? "-" : "+"}</p>
          ) : (
            <FilterToggle handleToggle={handleToggle} />
          )}
        </div>

        <motion.div
          key={index}
          {...(firstRender
            ? {}
            : expandHeight(
                openDropdown,
                heightDuration(filter?.dropdown?.length ?? 0),
                heightDelay(filter?.dropdown?.length ?? 0)
              ))}
        >
          {isDropdown && (
            <AnimatePresence>
              {openDropdown && (
                <motion.div
                  className="flex flex-col py-3 gap-1"
                  variants={
                    firstRender ? dropdownParentFirstRender : dropdownParent
                  }
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <motion.div
                    className="w-auto flex items-center pt-1 pb-3"
                    variants={
                      firstRender ? dropdownChildFirstReneer : dropdownChild
                    }
                    onClick={(e) => e.stopPropagation()}
                  >
                    <TextInput
                      handleInput={handleSearch}
                      placeholder="Search Attribute"
                    />
                  </motion.div>
                  {filter.dropdown?.map((item, i) => (
                    <DropdownItem
                      category={filter.name}
                      item={item}
                      key={i}
                      isDropdown={isDropdown}
                      handleFilter={handleFilter}
                      isSelected={isSelected(item)}
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
