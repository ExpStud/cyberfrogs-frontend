import { FC, HTMLAttributes } from "react";
import {
  MagicEdenIcon,
  DiscordIcon,
  TensorIcon,
  TwitterIcon,
  YouTubeIcon,
} from "@components";

interface Props extends HTMLAttributes<HTMLDivElement> {
  showExchange?: boolean;
}
const IconBar: FC<Props> = (props: Props) => {
  const { showExchange = true, className } = props;
  return (
    <div className={`flex items-center justify-center gap-5 ${className}`}>
      <MagicEdenIcon url={"https://magiceden.io/marketplace/cyber_frogs"} />
      <TensorIcon url={"https://www.tensor.trade/trade/cyber_frogs"} />
      <TwitterIcon url={"https://twitter.com/CyberFrogsNFT"} />
      <DiscordIcon url={"https://discord.com/invite/cyberfrogs"} />
      <YouTubeIcon url={"https://www.youtube.com/@cyberfrogsnft"} />
    </div>
  );
};

export default IconBar;
