import dynamic from "next/dynamic";

//icons

//atoms  
//molecules 
const RaffleItem = dynamic(() => import("./molecules/RaffleItem"));
const Countdown = dynamic(() => import("./molecules/Countdown"));
//templates
//organisms
const RaffleList = dynamic(() => import("./organisms/RaffleList"));
const RafflesView = dynamic(() => import("./templates/RafflesView"));


export {
  RafflesView,
  RaffleItem,
  RaffleList,
  Countdown
};
