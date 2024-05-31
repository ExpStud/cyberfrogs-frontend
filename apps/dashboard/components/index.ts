import dynamic from "next/dynamic";

//atoms  
//molecules
//organisms
const Data = dynamic(() => import("./organisms/Data"));
//templates
const DashboardView = dynamic(() => import("./templates/DashboardView"));


export {
 DashboardView,
 Data
};
