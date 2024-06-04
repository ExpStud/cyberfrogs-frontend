import dynamic from "next/dynamic";

//atoms  
//molecules
const UserNft = dynamic(() => import("./molecules/UserNft"));
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
  UserNft
};
