import dynamic from "next/dynamic";

//atoms  
//organisms
//templates
const DashboardView = dynamic(() => import("./templates/DashboardView"));


export {
 DashboardView,
};
