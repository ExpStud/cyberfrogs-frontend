import { Dispatch, SetStateAction, FC } from "react";
import Image from "next/image";
import { Heading } from "@components";
import { handleAssetLoad } from "@utils";
import { raffles } from "@raffles-constants";
import { Raffles } from "@raffles-types";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const RafflesView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  return (
    <div className="w-full flex flex-col items-center xl:items-start justify-start px-3 md:px-12 2xl:px-0 my-10 ">
      {/* heading & image */}
      <div className="relative w-full flex flex-row justify-between px-3 md:px-0 2xl:ml-4">
        <Heading />
        <Image
          src="/images/raffles/intro.jpg"
          width={1017}
          height={208}
          alt="Raffles"
          // className="hidden md:block absolute right-0 -top-4 z-0 opacity-20 xl:opacity-80 2xl:opacity-100"
          className="hidden xl:block xl:opacity-80 2xl:opacity-100 -mt-10 mx-5"
          onLoad={() => handleAssetLoad(0, setAssets)}
        />
      </div>
    </div>
  );
};
export default RafflesView;
