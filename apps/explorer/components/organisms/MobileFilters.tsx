import { Dispatch, FC, SetStateAction, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeVariants, midExitAnimation } from "@constants";
import { filters } from "@explorer-constants";
import { ExplorerFilterItem } from "..";
import { SelectedFilter } from "@explorer-types";
import { CloseIcon } from "@components";
import { useLockBodyScroll } from "@hooks";

interface Props {
  toggleMenu: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  handleFilter: (selectedFilter: SelectedFilter) => void;
  firstRender: boolean;
  setFirstRender: (firstRender: boolean) => void;
  selectedFilters: SelectedFilter[];
}

const Menu: FC<Props> = (props: Props) => {
  const {
    toggleMenu,
    open,
    handleFilter,
    firstRender,
    setFirstRender,
    selectedFilters,
  } = props;

  //stop page scroll (when modal or menu open)
  useLockBodyScroll(open);

  return (
    <AnimatePresence mode="wait" initial={false}>
      {open && (
        <motion.div
          key="main-menu"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 320, opacity: 1 }}
          exit={{
            width: 0,
            transition: { duration: 0.3 },
            opacity: 1,
          }}
          transition={{ duration: 0.5 }}
          className=" bg-cf-green-900 fixed top-0 right-0 z-50"
        >
          <motion.div
            className={`px-4 sm:px-6 lg:px-10 py-6 h-screen relative overflow-auto`}
            variants={fadeVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex justify-end w-full pb-4">
              <CloseIcon onClick={() => toggleMenu(false)} />
            </div>
            <div className="flex flex-col">
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
          </motion.div>
        </motion.div>
      )}
      {open && (
        <motion.div
          className="z-10 fixed inset-0 bg-black bg-opacity-60 cursor-pointer"
          onClick={() => toggleMenu(false)}
          {...midExitAnimation}
        />
      )}
    </AnimatePresence>
  );
};

export default Menu;
