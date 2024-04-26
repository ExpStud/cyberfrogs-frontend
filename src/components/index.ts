import dynamic from "next/dynamic";

//icons
const ExpIcon = dynamic(() => import("./@icons/ExpIcon"));
const MenuIcon = dynamic(() => import("./@icons/MenuIcon"));
const CloseIcon = dynamic(() => import("./@icons/CloseIcon"));
const DiscordIcon = dynamic(() => import("./@icons/DiscordIcon"));
const MagicEdenIcon = dynamic(() => import("./@icons/MagicEdenIcon"));
const TensorIcon = dynamic(() => import("./@icons/TensorIcon"));
const TwitterIcon = dynamic(() => import("./@icons/TwitterIcon"));
const YouTubeIcon = dynamic(() => import("./@icons/YouTubeIcon"));
const GreenBorderSVG = dynamic(() => import("./@icons/GreenBorderSVG"));
const GoldBorderSVG = dynamic(() => import("./@icons/GoldBorderSVG"));
//atoms
const NumberInput = dynamic(() => import("./atoms/NumberInput"));
const TextInput = dynamic(() => import("./atoms/TextInput"));
const LoadCircle = dynamic(() => import("./atoms/LoadSpinner"));
const ImageShimmer = dynamic(() => import("./atoms/ImageShimmer"));
const Logo = dynamic(() => import("./atoms/Logo"));
const Copyright = dynamic(() => import("./atoms/Copyright"));
const ConnectWalletButton = dynamic(() => import("./atoms/ConnectWalletButton"));
//molecules
const PageHead = dynamic(() => import("./molecules/PageHead"));
const NavigationItem = dynamic(() => import("./molecules/NavigationItem"));
const Modal = dynamic(() => import("./molecules/Modal"));
const IconBar = dynamic(() => import("./molecules/IconBar"));
const SplashScreen = dynamic(() => import("./molecules/SplashScreen"));
const Navigation = dynamic(() => import("./organisms/Navigation"));
const LegacyWebsiteButton = dynamic(() => import("./molecules/LegacyWebsiteButton"));
//organisms
const Header = dynamic(() => import("./organisms/Header"));
const Footer = dynamic(() => import("./organisms/Footer"));
const Menu = dynamic(() => import("./organisms/Menu"));
const ImageModal = dynamic(() => import("./organisms/ImageModal"));
//templates
const PageLayout = dynamic(() => import("./templates/PageLayout"));
const LandingView = dynamic(() => import("./templates/LandingView"));

export {
  PageHead,
  Logo,
  Header,
  Footer,
  PageLayout,
  NumberInput,
  TextInput,
  MagicEdenIcon,
  DiscordIcon,
  LoadCircle,
  ExpIcon,
  MenuIcon,
  NavigationItem,
  CloseIcon,
  Modal,
  Menu,
  IconBar,
  SplashScreen,
  LandingView,
  ImageShimmer,
  Navigation,
  ImageModal,
  TensorIcon,
  TwitterIcon,
  YouTubeIcon,
  LegacyWebsiteButton,
  Copyright,
  GreenBorderSVG,
  GoldBorderSVG,
  ConnectWalletButton
}