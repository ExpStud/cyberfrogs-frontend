import dynamic from "next/dynamic";

//icons

//atoms  
//molecules 
const RaffleItem = dynamic(() => import("./molecules/RaffleItem"));
const Countdown = dynamic(() => import("./molecules/Countdown"));
const BuyTickets = dynamic(() => import("./molecules/BuyTickets"));
//organisms
const RaffleList = dynamic(() => import("./organisms/RaffleList"));
const RaffleModal = dynamic(() => import("./organisms/RaffleModal"));
//templates
const RafflesView = dynamic(() => import("./templates/RafflesView"));


export {
  RafflesView,
  RaffleItem,
  RaffleList,
  Countdown,
  RaffleModal,
  BuyTickets
};
