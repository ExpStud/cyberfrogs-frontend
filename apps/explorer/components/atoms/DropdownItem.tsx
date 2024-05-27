import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { dropdownChild } from "@constants";
import { SelectedFilter } from "@explorer-types";

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

export default DropdownItem;
