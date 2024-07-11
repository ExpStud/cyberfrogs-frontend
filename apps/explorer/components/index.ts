import dynamic from "next/dynamic";

//icons

//atoms  
const ToggleOption = dynamic(() => import("./atoms/ToggleOption"));
//molecules 
const TextToggle = dynamic(() => import("./molecules/TextToggle"));
const ExplorerBackground = dynamic(() => import("./molecules/ExplorerBackground"));
const ExplorerToggle = dynamic(() => import("./molecules/ExplorerToggle"));
const ExplorerFilterItem = dynamic(() => import("./molecules/ExplorerFilterItem"));
const FilterToggle = dynamic(() => import("./molecules/FilterToggle"));
const FilterTags = dynamic(() => import("./molecules/FilterTags"));
const NftCard = dynamic(() => import("./molecules/NftCard"));
//organisms
const ListingData = dynamic(() => import("./organisms/ListingData"));
const Explorer = dynamic(() => import("./organisms/Explorer"));
const MobileFilters = dynamic(() => import("./organisms/MobileFilters"));
const NftModal = dynamic(() => import("../../../src/components/organisms/NftModal"));
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
  ExplorerFilterItem,
  FilterToggle,
  FilterTags,
  MobileFilters,
  NftCard,
  NftModal
};
