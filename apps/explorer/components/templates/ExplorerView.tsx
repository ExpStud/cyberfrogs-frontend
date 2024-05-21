import { Dispatch, SetStateAction, FC, useEffect, useState } from "react";
import Image from "next/image";
import { Heading } from "@components";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const ExplorerView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  return (
    <div className="w-full flex flex-col items-start justify-start">
      <Heading />
    </div>
  );
};
export default ExplorerView;
