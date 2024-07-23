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
      <Image
        src="/images/pages/dashboard/divider.svg"
        width={256}
        height={1}
        alt="Divider"
        className="-mt-4 mb-4 opacity-75 w-full"
      />
      <p className="uppercase mb-6">{title}</p>
      {children}
    </div>
  );
};

export default DataWrapper;
