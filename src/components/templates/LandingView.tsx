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
      <div className="flex flex-col gap-14 lg:gap-0 items-center z-0">
        <Image
          src="/images/general/graphics/landing.png"
          alt="Cyber Frogs"
          width={1000}
          height={600}
          className="max-h-[70vh] object-contain"
          onLoad={() => handleAssetLoad(0, setAssets)}
        />
        <div className="relative w-[95vw] md:w-[739px] h-[93px] flex items-center -mt-10">
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
    </div>
  );
};

export default LandingView;
