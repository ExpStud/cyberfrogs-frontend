import { FC, HTMLAttributes } from "react";
import { getSocialIconByName } from "@constants";
import { DiscordGreenIcon, ThorGreenIcon, TwitterGreenIcon } from "@components";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const HeaderIcons: FC<Props> = ({ className }: Props) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      <ThorGreenIcon url="/thor" />
      <DiscordGreenIcon url={getSocialIconByName("Discord")?.url as string} />
      <TwitterGreenIcon url={getSocialIconByName("Twitter")?.url as string} />
    </div>
  );
};

export default HeaderIcons;
