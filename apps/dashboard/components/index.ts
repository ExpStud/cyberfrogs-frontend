import dynamic from "next/dynamic";

//atoms  
//molecules
//organisms
const Data = dynamic(() => import("./organisms/Data"));
const DashboardHeading = dynamic(() => import("./organisms/DashboardHeading"));
//templates
const DashboardView = dynamic(() => import("./templates/DashboardView"));


export {
 DashboardView,
 Data,
 DashboardHeading
};
