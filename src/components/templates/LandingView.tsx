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
      <Image
        src="/images/logo.svg"
        alt="Cyber Frogs"
        width={640}
        height={507.65}
        className="px-10 2xl:px-0"
        onLoad={() => handleAssetLoad(0, setAssets)}
      />

      <div className="pt-4 uppercase font-rajdhani-bold text-xl text-center">
        Presented by slimes studio
      </div>
    </div>
  );
};

export default LandingView;
