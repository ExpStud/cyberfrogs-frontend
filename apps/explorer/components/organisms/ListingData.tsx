import { FC } from "react";
import { NftDataType } from "@explorer-types";

const ListingData: FC<{ data: NftDataType | null }> = ({ data }) => {
  return (
    <div
      className="relative bg-cf-green-950 shadow-explorerData xl:shadow-lg xl:bg-transparent xl:bg-explorerData flex items-center justify-around -ml-6 md:ml-0 lg:ml-12 mt-3 px-4 xl:pl-8 pt-0.5 text-sm md:text-base
      w-screen md:w-full h-[48px] xl:w-[1015px] uppercase"
    >
      <div className="flex gap-3">
        floor{" "}
        <span className="text-cf-gold">{data?.floorPrice ?? <></>} sol</span>
      </div>
      <div className="w-[1px] h-[10px] bg-cf-green-800" />
      <div className="flex gap-3">
        listed{" "}
        <span className="text-cf-gold">{data?.listingCount ?? <></>}</span>
      </div>
      <div className="w-[1px] h-[10px] bg-cf-green-800" />
      <div className="flex gap-3">
        supply <span className="text-cf-gold">{data?.supply ?? <></>}</span>
      </div>
      <div className="w-[1px] h-[10px] bg-cf-green-800" />
      <div className="flex gap-3">
        owners <span className="text-cf-gold">{data?.owners ?? <></>}</span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
        className="absolute top-2 left-2 xl:left-[22px] "
      >
        <path d="M0 0H8L4 4L0 8V0Z" fill="#124835" />
      </svg>
    </div>
  );
};
export default ListingData;
