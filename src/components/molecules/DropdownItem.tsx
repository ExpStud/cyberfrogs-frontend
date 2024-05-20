import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { dropdownItemsAnimations } from "@constants";

const DropdownItem: FC<{ children: ReactNode; onClick: () => void }> = ({
  children,
  onClick,
}) => {
  return (
    <motion.div
      variants={dropdownItemsAnimations}
      className="cursor-pointer bg-custom-grey transition-200 hover:bg-custom-grey-light pl-2 w-[148px] h-[36px] flex items-center"
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default DropdownItem;
