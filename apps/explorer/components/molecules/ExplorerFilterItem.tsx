import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import {
  dropdownChild,
  dropdownChildFirstReneer,
  dropdownParent,
  dropdownParentFirstRender,
  enterAnimation,
  expandHeight,
} from "@constants";
import { ExplorerFilter } from "@explorer-types";
import { DropdownItem } from "@explorer-components";
import { TextInput } from "@components";

interface ExplorerFilterItemProps {
  filter: ExplorerFilter;
  index: number;
  handleFilter: (text: string) => void;
  firstRender: boolean; //disables animation on first render due to initial load
  setFirstRender: (firstRender: boolean) => void;
}
const ExplorerFilterItem: FC<ExplorerFilterItemProps> = (
  props: ExplorerFilterItemProps
) => {
  const { filter, index, handleFilter, firstRender, setFirstRender } = props;

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
            ? { enterAnimation }
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

const FilterToggle: FC<{ handleToggle: (isToggled: boolean) => void }> = ({
  handleToggle,
}) => {
  const range = [1, 17];
  const [x, cycleX] = useCycle(range[0], range[1]);

  useEffect(() => {
    const isToggled = x === range[1];
    handleToggle(isToggled);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [x, handleToggle]);

  return (
    <div
      className="bg-explorerToggle1Bg relative w-[42px] h-[24px] cursor-pointer"
      onClick={() => cycleX()}
    >
      <p className="absolute left-1 top-0.5 font-inter text-green-950 text-sm ">
        ✓
      </p>
      {/* toggle */}
      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ x }} // Animate the x property
        className="mt-[0.5px]"
      >
        <g filter="url(#filter0_di_1949_9)">
          <path
            d="M4 3.5L5.5 2H21V17.5L19.5 19L18.5 20H3V4.5L4 3.5Z"
            fill="#FFFEF3"
          />
        </g>
        <defs>
          <filter
            id="filter0_di_1949_9"
            x="0"
            y="0"
            width="24"
            height="24"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0313726 0 0 0 0 0.121569 0 0 0 0 0.0901961 0 0 0 0.3 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1949_9"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1949_9"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.882353 0 0 0 0 0.709804 0 0 0 0 0.239216 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_1949_9"
            />
          </filter>
        </defs>
      </motion.svg>
    </div>
  );
};

export default ExplorerFilterItem;
