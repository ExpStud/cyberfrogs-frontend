import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface AppContextProps {
  addGlobalVariables: string; //placeholder
  setAddGlobalVariables: Dispatch<SetStateAction<string>>; //placeholder
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const AppProvider: FC<Props> = (props: Props) => {
  const { children } = props;

  const [addGlobalVariables, setAddGlobalVariables] = useState<string>("todo"); //placeholder

  return (
    <AppContext.Provider
      value={{
        addGlobalVariables,
        setAddGlobalVariables,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};
