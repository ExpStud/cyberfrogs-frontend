import { createContext } from "react";
import { NFT } from "@types";

export const ViewContext = createContext<{
  showView: boolean;
  setShowView: (value: boolean) => void;
  nftModal: NFT | null;
  setNftModal: (nft: NFT | null) => void;
}>({
  showView: false,
  setShowView: () => {},
  nftModal: null,
  setNftModal: () => {},
});

 