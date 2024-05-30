import { createContext } from "react";
import { NFT } from "@types";

export const ViewContext = createContext<{
  showView: boolean;
  setShowView: (value: boolean) => void;
  showExplorerModal: NFT | null;
  setShowExplorerModal: (nft: NFT | null) => void;
}>({
  showView: false,
  setShowView: () => {},
  showExplorerModal: null,
  setShowExplorerModal: () => {},
});

 