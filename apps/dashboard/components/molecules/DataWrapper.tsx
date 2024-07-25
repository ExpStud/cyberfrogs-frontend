import { FC } from "react";
import Image from "next/image";

interface DataProps {
  title: string;
  children: React.ReactNode;
}
const DataWrapper: FC<DataProps> = (props: DataProps) => {
  const { title, children } = props;
  return (
    <div className="relative w-full sm:w-[256px] min-w-[200px] md:min-w-[256px] h-[172px] min-h-[172px] flex flex-col py-4">
      <div className="relative w-full h-[1px] shadow-inner bg-cf-white/15 -mt-4 mb-4 ">
        <div className="absolute left-0 h-[1px] w-3 bg-cf-gold-500/30"></div>
      </div>
      <p className="uppercase mb-6">{title}</p>
      {children}
    </div>
  );
};

export default DataWrapper;
