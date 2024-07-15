import { FC, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { dropdownChild, dropdownParent, expandHeight } from "@constants";
import { ExplorerFilter, SelectedFilter } from "@explorer-types";
import { FilterToggle } from "@explorer-components";
import { TextInput } from "@components";

interface ExplorerFilterItemProps {
  filter: ExplorerFilter;
  index: number;
  handleFilter: (filter: SelectedFilter) => void;

  selectedFilters: SelectedFilter[];
}
const ExplorerFilterItem: FC<ExplorerFilterItemProps> = (
  props: ExplorerFilterItemProps
) => {
  const {
    filter,
    index,
    handleFilter,

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

  return (
    <div className="flex flex-col ">
      {index === 0 && (
        <Image
          src="/images/pages/explorer/filter-divider.svg"
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
          {...expandHeight(
            openDropdown,
            heightDuration(filter?.dropdown?.length ?? 0)
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
                  <motion.div
                    className="w-auto flex items-center pt-1 pb-3"
                    variants={dropdownChild}
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
        src="/images/pages/explorer/filter-divider.svg"
        width={276}
        height={1}
        alt="Divider"
      />
    </div>
  );
};

//keeping child in same file prevent animation fail on first render
interface DropdownItemProps {
  category: string;
  item: string;
  isDropdown: boolean;
  handleFilter: (filter: SelectedFilter) => void;
  isSelected?: boolean;
}
const DropdownItem: FC<DropdownItemProps> = (props: DropdownItemProps) => {
  const { category, item, isDropdown, handleFilter, isSelected } = props;

  const handleSelect = () => {
    if (isDropdown) {
      handleFilter({ category, filter: item });
    }
  };

  return (
    <motion.div
      className="w-auto flex items-center"
      variants={dropdownChild}
      onClick={(e) => e.stopPropagation()}
    >
      {isDropdown && (
        <div
          className={`h-4 w-4 cursor-pointer transition-300 border text-cf-green-950 col-centered \ ${
            isSelected
              ? "bg-cf-gold-500 border-cf-gold-500"
              : "bg-cf-green-950 hover:bg-cf-green-900 border-cf-green-500  "
          }`}
          onClick={() => handleSelect()}
        >
          <p className="font-inter text-lg">✓</p>
        </div>
      )}
      <p className="px-4 text-sm" onClick={() => handleSelect()}>
        {item}{" "}
        {isDropdown && <span className="pl-1 text-cf-white/50"> (12)</span>}
      </p>
    </motion.div>
  );
};

export default ExplorerFilterItem;
