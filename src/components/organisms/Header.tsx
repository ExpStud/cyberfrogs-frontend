import { FC } from "react";

import { Navigation } from "@components";

interface Props {}

const Header: FC<Props> = (props: Props) => {
  const {} = props;

  return (
    <header className="z-10 relative w-full self-center flex flex-col items-center">
      <Navigation />
    </header>
  );
};

export default Header;
