import { FC } from "react";
import Image from "next/image";

interface Props {
  blur?: boolean;
}
const BackgroundGradients: FC<Props> = (props: Props) => {
  const { blur = false } = props;
  return (
    <>
      <div className="-z-[20] fixed top-0 h-screen w-screen">
        <Image
          src="/images/general/backgrounds/texture.png"
          fill
          alt="Texture"
          priority
          className="object-cover"
        />
      </div>
      <div className="-z-[15] light-top fixed left-1/2 -translate-x-1/2 -top-[55svh] w-[100vw] h-[75svh]" />
      <div className="-z-[10] gradient-top fixed left-1/2 -translate-x-1/2 top-0 w-[100vw] h-[200px] sm:h-[40svh] " />
      <div className="-z-[5] fixed top-0 inset-x-0 w-[100vw] h-[36.9vh] overflow-x-hidden ">
        <Image
          src="/images/general/backgrounds/grid.png"
          fill
          alt="Texture"
          priority
          className="object-cover"
        />
      </div>
      {blur && (
        <div className="-z-[4] fixed h-screen w-screen backdrop-blur-md" />
      )}
    </>
  );
};

export default BackgroundGradients;
