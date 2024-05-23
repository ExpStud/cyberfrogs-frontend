import { FC } from "react";
import Image from "next/image";

const ExplorerBackground: FC = () => {
  return (
    <>
      {/* left */}
      <div className="absolute top-1 -left-16 2xl:-left-[36px] hidden md:flex flex-col">
        <Image
          src="/images/explorer/grid-left.svg"
          width={61}
          height={586}
          alt="Grid L"
        />
      </div>
      {/* body */}
      <Image
        src="/images/explorer/grid-bg.svg"
        width={1554}
        height={1005}
        alt="Grid"
        className="hidden 2xl:block"
      />

      {/* right */}
      <div className="hidden md:block absolute top-10 -right-2 ">
        <Image
          src="/images/explorer/grid-right-1.svg"
          width={10}
          height={120}
          alt="Grid R1"
        />
        <Image
          src="/images/explorer/grid-right-2.svg"
          width={8}
          height={426}
          alt="Grid R2"
          className="-mt-1"
        />
      </div>
    </>
  );
};
export default ExplorerBackground;
