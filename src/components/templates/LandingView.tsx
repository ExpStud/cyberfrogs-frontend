import { Dispatch, SetStateAction, FC, useContext } from "react";
import { handleAssetLoad } from "@utils";
import Image from "next/image";
import { ViewContext } from "@contexts";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const LandingView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useContext(ViewContext);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="relative w-[130vw] xl:w-[75vw] h-[75vh] ">
        <Image
          src="/images/graphics/landing.png"
          alt="Cyber Frogs"
          fill
          className="object-contain "
          onLoad={() => handleAssetLoad(0, setAssets)}
        />
      </div>
    </div>
  );
};

export default LandingView;
