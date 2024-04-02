import { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Copyright: FC<Props> = ({ className }: Props) => {
  const getYear = () => new Date().getFullYear();
  return (
    <div
      className={`flex justify-center md:justify-start items-center text-cf-white text-opacity-35 uppercase  text-sm font-rajdhani-semibold ${className}`}
    >
      ©{getYear()} cyber frogs™
    </div>
  );
};

export default Copyright;
