import { FC, useEffect } from "react";
import { motion, useCycle } from "framer-motion";

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

export default FilterToggle;
