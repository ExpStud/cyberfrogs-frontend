import { Dispatch, SetStateAction, FC } from "react";
import { ToggleOption } from "@explorer-components";

interface ExplorerToggleProps {
  toggle: "solana" | "bitcoin";
  setToggle: Dispatch<SetStateAction<"solana" | "bitcoin">>;
}

const ExplorerToggle: FC<ExplorerToggleProps> = ({ toggle, setToggle }) => (
  <div className="lg:sticky lg:top-2 bg-explorerToggleBg z-0 flex items-center justify-center w-[278px] h-[41px] text-base text-cf-white/50 font-rajdhani-bold uppercase pl-[2px] pr-[4px] pb-[1px]">
    <ToggleOption
      active={toggle === "solana"}
      onClick={() => setToggle("solana")}
      label="solana"
    />
    <ToggleOption
      active={toggle === "bitcoin"}
      onClick={() => setToggle("bitcoin")}
      label="bitcoin"
    />
  </div>
);

export default ExplorerToggle;
