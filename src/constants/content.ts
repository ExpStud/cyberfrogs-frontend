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
      { name: "Dashboard", href: "/dashboard" },
      { name: "Staking", href: "/staking" },
      { name: "Trait Marketplace", href: "/trait-market" },
      { name: "Auto Thor", href: "/faction-contracts-v3" },
      { name: "Thor", href: "/thor" },
      { name: "Thordinals", href: "/thor-btc" },
      { name: "Rarity", href: "/rarity" },
      { name: "Faction Missions", href: "/mission" },
      { name: "Dressing Room", href: "/dressing-room" },
      { name: "Raffle House", href: "/raffles" },
    ],
  },
  {
    name: "Buy",
    dropdown: [
      { name: "Tensor", href: "https://www.tensor.trade/trade/cyber_frogs" },
      { name: "Magic Eden - SOL", href: "https://magiceden.io/marketplace/cyber_frogs" },
      { name: "Magic Eden - BTC", href: "https://magiceden.io/ordinals/marketplace/thordinals" },
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
    image: "/images/heading/explorer.png",
    imageWidth: 228,
    imageHeight: 62,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    image: "/images/heading/dashboard.png",
    imageWidth: 504,
    imageHeight: 46,
  },
  {
    path: "/raffles",
    name: "Raffles",
    image: "/images/heading/raffles.png",
    imageWidth: 216,
    imageHeight: 46,
  },
];