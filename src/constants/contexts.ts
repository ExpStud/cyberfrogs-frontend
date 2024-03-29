import { createContext } from "react";

interface CollabModal {
  id: number;
  type: string;
}
export const ViewContext = createContext({
  showView: false,
  setShowView: (value: boolean) => { },
  ImageModalId: -1,
  setImageModalId: (value: number) => { },
});

