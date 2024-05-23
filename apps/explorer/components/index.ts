import dynamic from "next/dynamic";

//icons

//atoms  
const ToggleOption = dynamic(() => import("./atoms/ToggleOption"));
//molecules 
const TextToggle = dynamic(() => import("./molecules/TextToggle"));
const ExplorerBackground = dynamic(() => import("./molecules/ExplorerBackground"));
const ExplorerToggle = dynamic(() => import("./molecules/ExplorerToggle"));

//organisms
const ListingData = dynamic(() => import("./organisms/ListingData"));
const Explorer = dynamic(() => import("./organisms/Explorer"));

//templates
const ExplorerView = dynamic(() => import("./templates/ExplorerView"));


export {
  ExplorerView,
  TextToggle,
  ListingData,
  ExplorerBackground,
  Explorer,
  ExplorerToggle,
  ToggleOption,
};
