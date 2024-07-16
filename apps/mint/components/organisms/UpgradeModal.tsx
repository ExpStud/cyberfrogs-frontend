import { FC } from "react";
import { Modal } from "@components";

interface Props {
  show: boolean;
  close: () => void;
}

const RaffleModal: FC<Props> = (props: Props) => {
  const { show, close } = props;

  console.log(show);
  return (
    <Modal
      show={show}
      onClick={() => close()}
      className="overflow-y-auto lg:overflow-hidden explorer-scroll"
      upgradeModal
    >
      <div className="flex flex-col justify-between items-center w-full h-full">
        <p>Pricing, multipliers, and discounts</p>
        <Divider />
        <div className="flex flex-col gap-1 text-sm text-cf-white/70">
          <p className="text-cf-white font-rajdhani-semibold">
            BASE UPGRADE COST
          </p>
          <p>NON-FACTIONED FROGS (2,500 KIRA)</p>
          <p>FACTIONED FROGS (1,500 KIRA)</p>
          <p>TMB TOKENS (FREE)</p>
        </div>
        <Divider />
        <div className="flex flex-col gap-1 text-sm text-cf-white/70">
          <p className="text-cf-white font-rajdhani-semibold">
            COST MULTIPLIER LEGEND
          </p>
          <p>IF ALPHA FROG (2X UPGRADE COST)</p>
          <p>IF BETA FROG (1.5X UPGRADE COST)</p>
          <p>IF THOR HAMMER FROGS (20X UPGRADE COST)</p>
        </div>
        <Divider />
        <div className="flex flex-col gap-1 text-sm text-cf-white/70">
          <p className="text-cf-white font-rajdhani-semibold">
            DISCOUNT LEGEND
          </p>
          <p>5 FROGS PREPAYED (15%)</p>
          <p>10 FROGS PREPAYED (25%)</p>
          <p>24 FROGS PREPAYED (35%)</p>
          <p>75 FROGS PREPAYED (45%)</p>
          <p>100+ FROGS PREPAYED (75%)</p>
        </div>
      </div>
    </Modal>
  );
};

const Divider = () => {
  return (
    <svg
      width="400"
      height="1"
      viewBox="0 0 400 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_5052_204)">
        <line y1="0.5" x2="400" y2="0.5" stroke="white" strokeOpacity="0.15" />
      </g>
      <defs>
        <filter
          id="filter0_i_5052_204"
          x="0"
          y="0"
          width="400"
          height="1"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="10" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.882353 0 0 0 0 0.709804 0 0 0 0 0.239216 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_5052_204"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default RaffleModal;
