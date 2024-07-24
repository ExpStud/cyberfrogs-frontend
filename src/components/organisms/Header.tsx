import { FC } from "react";

import { Navigation } from "@components";

interface Props {}

const Header: FC<Props> = (props: Props) => {
  const {} = props;

  return (
    <header className="z-10 transition-all duration-500 relative w-full overflow-hidden">
      <Navigation />
    </header>
  );
};

export default Header;
