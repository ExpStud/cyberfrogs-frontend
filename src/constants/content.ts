import { HeadingType, NavigationData, SocialIcon } from "@types";
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
    name: "Upgrade",
    href: "/mint",
  },
  {
    name: "Explorer",
    href: "/explorer",
  },
  {
    name: "My Cyber Frogs",
    dropdown: [
      { name: "Dashboard", href: "/dashboard" },
      { name: "Raffle House", href: "/raffles" },
      { name: "Auto Thor", href: "/faction-contracts-v3", redirect: true },
      { name: "Thor", href: "/thor", redirect: true },
      { name: "Thordinals", href: "/thor-btc", redirect: true },
      { name: "Faction Missions", href: "/mission", redirect: true },
    ],
  },
  {
    name: "Buy",
    dropdown: [
      { name: "Tensor", href: "https://www.tensor.trade/trade/cyber_frogs", redirect: true },
      { name: "Magic Eden - SOL", href: "https://magiceden.io/marketplace/cyber_frogs", redirect: true },
      { name: "Magic Eden - BTC", href: "https://magiceden.io/ordinals/marketplace/thordinals", redirect: true },
    ],
  },
  {
    name: "Connect",
    component: ConnectWalletButton,
  }
];


export const HeadingData: HeadingType[] = [
  {
    path: "/explorer",
    name: "Explorer",
    image: "/images/general/heading/explorer.png",
    imageWidth: 228,
    imageHeight: 62,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    image: "/images/general/heading/dashboard.png",
    imageWidth: 504,
    imageHeight: 46,
  },
  {
    path: "/raffles",
    name: "Raffles",
    image: "/images/general/heading/raffles.png",
    imageWidth: 216,
    imageHeight: 46,
  },
];