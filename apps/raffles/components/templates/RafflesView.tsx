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
      <div className="w-full flex flex-col lg:flex-row justify-between px-3 sm:px-0 2xl:ml-4">
        <Heading />
        <Image
          src="/images/explorer/intro.png"
          width={994}
          height={218}
          alt="Explorer"
          className="hidden lg:block lg:-mt-8"
          onLoad={() => handleAssetLoad(0, setAssets)}
        />
      </div>
    </div>
  );
};
export default RafflesView;
