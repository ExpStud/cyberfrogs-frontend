import { createContext } from "react";
import { NFT } from "@types";
import { Raffles } from "@raffles-types";

export const ViewContext = createContext<{
  showView: boolean;
  setShowView: (value: boolean) => void;
  nftModal: NFT | null;
  setNftModal: (nft: NFT | null) => void;
  raffleModal: Raffles | null;
  setRaffleModal: (nft: Raffles | null) => void;
  upgradeModal: boolean;
  setUpgradeModal: (show: boolean) => void;
}>({
  showView: false,
  setShowView: () => {},
  nftModal: null,
  setNftModal: () => {},
  raffleModal: null,
  setRaffleModal: () => {},
  upgradeModal: false,
  setUpgradeModal:() => {},
});

 