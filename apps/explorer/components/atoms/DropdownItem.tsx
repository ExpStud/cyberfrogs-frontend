import { FC, useState } from "react";
import { motion } from "framer-motion";
import { dropdownChild } from "@constants";

interface DropdownItemProps {
  item: string;
  isDropdown: boolean;
}
const DropdownItem: FC<DropdownItemProps> = (props: DropdownItemProps) => {
  const { item, isDropdown } = props;

  const [selected, setSelected] = useState<boolean>(false);

  return (
    <motion.div
      className="w-auto flex items-center"
      variants={dropdownChild}
      onClick={(e) => e.stopPropagation()}
    >
      {isDropdown && (
        <div
          className={`h-4 w-4 cursor-pointer transition-300 border text-cf-green-950 col-centered \ ${
            selected
              ? "bg-cf-gold-500 border-cf-gold-500"
              : "bg-cf-green-950 hover:bg-cf-green-900 border-cf-green-500  "
          }`}
          onClick={() => setSelected(!selected)}
        >
          <p className="font-inter text-lg">✓</p>
        </div>
      )}
      <p className="px-4" onClick={() => setSelected(!selected)}>
        {item}
      </p>
    </motion.div>
  );
};

export default DropdownItem;
