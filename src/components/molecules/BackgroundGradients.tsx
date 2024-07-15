import { FC } from "react";
import Image from "next/image";

const BackgroundGradients: FC = () => {
  return (
    <>
      <div className="-z-[20] fixed top-0 h-screen w-screen">
        <Image
          src="/images/backgrounds/texture.png"
          fill
          alt="Texture"
          priority
          className="object-cover "
        />
      </div>
      <div className="-z-[15] light-top fixed left-1/2 -translate-x-1/2 -top-[55svh] w-[100vw] h-[75svh] overflow-hidden" />
      <div className="-z-[10] gradient-top fixed left-1/2 -translate-x-1/2 top-0 w-[100vw] h-[200px] sm:h-[40svh]  overflow-hidden" />
      <div className="-z-[5] fixed top-0 inset-x-0 w-[100vw] h-[36.9vh] overflow-x-hidden">
        <Image
          src="/images/backgrounds/grid.png"
          fill
          alt="Texture"
          priority
          className="object-cover"
        />
      </div>
    </>
  );
};

export default BackgroundGradients;
