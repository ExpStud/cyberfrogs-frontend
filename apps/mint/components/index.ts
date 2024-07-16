import dynamic from "next/dynamic";

//atoms  
// const VariableLabel = dynamic(() => import("./atoms/VariableLabel"));
//molecules
const UserNft = dynamic(() => import("./molecules/UserNft"));
//organisms
const ConnectWallet = dynamic(() => import("./organisms/ConnectWallet"));
//templates
const MintView = dynamic(() => import("./templates/MintView"));

export {
  MintView,
  UserNft,
  ConnectWallet
};
