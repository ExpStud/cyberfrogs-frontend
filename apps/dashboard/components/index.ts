import dynamic from "next/dynamic";

//atoms  
const VariableLabel = dynamic(() => import("./atoms/VariableLabel"));
//molecules
const UserNft = dynamic(() => import("./molecules/UserNft"));
const DataWrapper = dynamic(() => import("./molecules/DataWrapper"));
//organisms
const Data = dynamic(() => import("./organisms/Data"));
const DashboardHeading = dynamic(() => import("./organisms/DashboardHeading"));
const Dashboard = dynamic(() => import("./organisms/Dashboard"));
//templates
const DashboardView = dynamic(() => import("./templates/DashboardView"));

export {
  DashboardView,
  Data,
  DashboardHeading,
  Dashboard,
  UserNft,
  DataWrapper,
  VariableLabel
};
