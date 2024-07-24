import { Dispatch, SetStateAction, FC } from "react";
import { handleAssetLoad } from "@utils";
import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const LandingView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const router = useRouter();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center max-w-screen">
      <div className="absolute top-[45vh] -translate-y-1/2 ">
        <Image
          src="/images/general/graphics/landing.png"
          alt="Cyber Frogs"
          width={1000}
          height={600}
          // onLoad={() => handleAssetLoad(0, setAssets)}
        />
      </div>
      <div className="absolute z-0 bottom-44 md:bottom-24 left-1/2 -translate-x-1/2 w-[95vw] md:w-[739px] h-[93px] flex items-center">
        <Image
          src="/images/general/backgrounds/start-upgrade.svg"
          width={739}
          height={93}
          alt="Connect"
          className="hidden md:block absolute inset-0 -z-10 min-w-[539px] min-h-[93px] object-cover"
        />
        <div className="flex flex-col md:flex-row items-center justify-between w-full md:mt-5 px-5 gap-2">
          <p className="hidden md:block text-xl font-rajdhani-bold">
            Upgrade Frogs
          </p>
          <Image
            src="/images/general/buttons/start-upgrade.svg"
            width={216}
            height={40}
            alt="Connect"
            className="cursor-pointer button-transition min-w-[99px] z-10 mt-3 md:mt-0"
            onClick={() => router.push("/mint")}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingView;
