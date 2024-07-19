import dynamic from "next/dynamic";

//atoms  
// const VariableLabel = dynamic(() => import("./atoms/VariableLabel"));
//molecules
const CardItem = dynamic(() => import("./molecules/CardItem"));
const UserNftBackSide = dynamic(() => import("./molecules/UserNftBackSide"));
const UserNftFrontSide = dynamic(() => import("./molecules/UserNftFrontSide"));
//organisms
const ConnectWallet = dynamic(() => import("./organisms/ConnectWallet"));
const SelectFrogs = dynamic(() => import("./organisms/SelectFrogs"));
const UpgradeModal = dynamic(() => import("./organisms/UpgradeModal"));
const UserNft = dynamic(() => import("./organisms/UserNft"));
const UpgradeFrogs = dynamic(() => import("./organisms/UpgradeFrogs"));
//templates
const MintView = dynamic(() => import("./templates/MintView"));

export {
  MintView,
  UserNft,
  SelectFrogs,
  ConnectWallet,
  UpgradeModal,
  CardItem,
  UserNftBackSide,
  UserNftFrontSide,
  UpgradeFrogs
};
