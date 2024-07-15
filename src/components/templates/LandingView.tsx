import { Dispatch, SetStateAction, FC } from "react";
import { handleAssetLoad } from "@utils";
import Image from "next/image";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const LandingView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="absolute top-1/2 -translate-y-1/2 w-[130vw] xl:w-[75vw] h-[50vh] md:h-[60vh] xl:h-[75vh] 3xl:h-[60vh] ">
        <Image
          src="/images/general/graphics/landing.png"
          alt="Cyber Frogs"
          fill
          className="object-contain "
          // width={1302}
          // height={904}
          onLoad={() => handleAssetLoad(0, setAssets)}
        />
      </div>
    </div>
  );
};

export default LandingView;
