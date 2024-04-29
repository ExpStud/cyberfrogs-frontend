import { Dispatch, SetStateAction, FC, useContext } from "react";

import { ViewContext } from "@contexts";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const ExplorerView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {" "}
      hello
    </div>
  );
};

export default ExplorerView;
