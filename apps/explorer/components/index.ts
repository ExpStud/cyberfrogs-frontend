import dynamic from "next/dynamic";

//icons

//atoms

//molecules 
const TextToggle = dynamic(() => import("./molecules/TextToggle"));
const ExplorerBackground = dynamic(() => import("./molecules/ExplorerBackground"));

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
  Explorer
};
