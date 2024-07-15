import dynamic from "next/dynamic";

//atoms  
// const VariableLabel = dynamic(() => import("./atoms/VariableLabel"));
//molecules
// const UserNft = dynamic(() => import("./molecules/UserNft"));
//organisms
// const Data = dynamic(() => import("./organisms/Data"));
//templates
const MintView = dynamic(() => import("./templates/MintView"));

export {
  MintView,
};
