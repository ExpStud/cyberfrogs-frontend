import { NavigationData, SocialIcon } from "@types";
import { MagicEdenIcon, TensorIcon, TwitterIcon, DiscordIcon, YouTubeIcon, ConnectWalletButton } from "@components";

export const socialIcons: SocialIcon[] = [
  {
    name: "MagicEden",
    url: "https://magiceden.io/marketplace/cyber_frogs",
    component: MagicEdenIcon,
  },
  {
    name: "Tensor",
    url: "https://www.tensor.trade/trade/cyber_frogs",
    component: TensorIcon,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/CyberFrogsNFT",
    component: TwitterIcon,
  },
  {
    name: "Discord",
    url: "https://discord.com/invite/cyberfrogs",
    component: DiscordIcon,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@cyberfrogsnft",
    component: YouTubeIcon,
  },
];
export const getSocialIconByName = (name: string): SocialIcon | undefined => {
  return socialIcons.find(icon => icon.name === name);
};

export const navigationData: NavigationData[] = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Explorer",
    href: "/explorer",
  },
  {
    name: "My Cyber Frogs",
    dropdown: [
      { name: "CF1", href: "/" },
      { name: "CF2", href: "/" },
    ],
  },
  {
    name: "Buy",
    dropdown: [
      { name: "B1", href: "/" },
      { name: "B2", href: "/" },
    ],
  },
  {
    name: "Connect",
    component: ConnectWalletButton,
  }
];