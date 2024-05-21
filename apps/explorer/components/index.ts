import dynamic from "next/dynamic";

//icons

//atoms

//molecules 
const TextToggle = dynamic(() => import("./molecules/TextToggle"));

//organisms

//templates
const ExplorerView = dynamic(() => import("./templates/ExplorerView"));


export {
  ExplorerView,
  TextToggle
};
