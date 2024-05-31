import { FC } from "react";
import { NftDataType } from "@explorer-types";
import Image from "next/image";

interface Props {
  solPrice: number;
  kiraPrice: number;
  floorPrice: number;
  currentSupply: number;
  totalSupply: number;
  burned: number;
}
const Data: FC<Props> = (props: Props) => {
  const {
    solPrice,
    kiraPrice,
    floorPrice,
    currentSupply,
    totalSupply,
    burned,
  } = props;

  const textClass = "flex gap-3 w-auto m;-3";
  const dividerClass =
    "hidden md:block w-[1.25px] h-[15px] bg-cf-green-800 whitespace-nowrap";

  return (
    <div className="relative bg-cf-green-950 md:bg-transparent md:bg-dashboardData -mt-1 px-2 w-full h-[110px] md:h-[70px]">
      <div className="z-10 grid grid-cols-2 md:flex md:flex-wrap h-full items-center justify-around uppercase text-[15px] md:text-base sm:pb-1 sm:pl-3">
        <div className={textClass}>
          sol price <span className="text-cf-gold">${solPrice}</span>
        </div>
        <div className={dividerClass} />
        <div className={`${textClass} ml-10 md:ml-0`}>
          kira price <span className="text-cf-gold">${kiraPrice}</span>
        </div>
        <div className={dividerClass} />
        <div className={textClass}>
          cyber frogs fp <span className="text-cf-gold">{floorPrice} sol</span>
        </div>
        <div className={dividerClass} />
        <div className={`${textClass} ml-10 md:ml-0`}>
          supply <span className="text-cf-gold">{currentSupply}</span>
        </div>
        <div className={dividerClass} />
        <div className={`${textClass}`}>
          burned{" "}
          <span className="text-cf-gold">
            {burned} ({burned / totalSupply}%)
          </span>
        </div>
      </div>
      <div className="absolute -bottom-7 inset-x-0 -z-[1] h-[33px] w-full md:w-[97.9%] lg:w-[98.8%] md:ml-4">
        <Image
          src="/images/dashboard/data-dots.svg"
          fill
          className="object-cover"
          alt="Dots"
        />
      </div>
    </div>
  );
};
export default Data;
