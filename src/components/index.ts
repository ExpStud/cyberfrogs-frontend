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
//atoms
const NumberInput = dynamic(() => import("./atoms/NumberInput"));
const TextInput = dynamic(() => import("./atoms/TextInput"));
const CheckBox = dynamic(() => import("./atoms/CheckBox"));
const LoadCircle = dynamic(() => import("./atoms/LoadSpinner"));
const ImageShimmer = dynamic(() => import("./atoms/ImageShimmer"));
const Logo = dynamic(() => import("./atoms/Logo"));
//molecules
const PageHead = dynamic(() => import("./molecules/PageHead"));
const NavItem = dynamic(() => import("./molecules/NavItem"));
const Modal = dynamic(() => import("./molecules/Modal"));
const IconBar = dynamic(() => import("./molecules/IconBar"));
const SplashScreen = dynamic(() => import("./molecules/SplashScreen"));
const HeaderContent = dynamic(() => import("./molecules/HeaderContent"));
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
  CheckBox,
  MagicEdenIcon,
  DiscordIcon,
  LoadCircle,
  ExpIcon,
  MenuIcon,
  NavItem,
  CloseIcon,
  Modal,
  Menu,
  IconBar,
  SplashScreen,
  LandingView,
  ImageShimmer,
  HeaderContent,
  ImageModal,
  TensorIcon,
  TwitterIcon,
  YouTubeIcon,
}