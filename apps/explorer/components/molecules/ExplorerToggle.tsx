import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction, FC, MouseEvent } from "react";
import { fastEnterAnimation } from "src/constants";

interface ExplorerToggleProps {
  toggle: "solana" | "bitcoin";
  setToggle: Dispatch<SetStateAction<"solana" | "bitcoin">>;
}

const ExplorerToggle: FC<ExplorerToggleProps> = ({ toggle, setToggle }) => (
  <div className="bg-explorerToggleBg z-0 flex items-center justify-center w-[278px] h-[41px] text-base text-cf-white/50 font-rajdhani-bold uppercase 2xl:ml-5  pl-[2px] pr-[4px] pb-[1px]">
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

interface ToggleOptionProps {
  active: boolean;
  onClick: (event: MouseEvent<HTMLParagraphElement>) => void;
  label: "solana" | "bitcoin";
}

const ToggleOption: FC<ToggleOptionProps> = ({ active, onClick, label }) => (
  <div
    className={`relative w-[136px] h-[36px] transition-200 text-cf-white flex items-center justify-center gap-2 pt-0.5  ${
      active ? "cursor-default" : "cursor-pointer opacity-50"
    }`}
    onClick={onClick}
  >
    {active && (
      <>
        <motion.img
          src={`/images/explorer/toggle-active-highlight.svg`}
          width={216}
          height={242}
          alt={label}
          className="absolute -top-[58px] -left-[60px] -z-[1]"
          {...fastEnterAnimation}
        />{" "}
        <motion.img
          src={`/images/explorer/toggle-active-bg.svg`}
          width={136}
          height={36}
          alt={label}
          className="absolute top-0 left-0 -z-[2]"
          {...fastEnterAnimation}
        />
      </>
    )}

    <Image
      src={`/images/icons/${label.toLocaleLowerCase()}.svg`}
      width={14}
      height={14}
      alt={label}
    />
    <p>{label}</p>
  </div>
);

export default ExplorerToggle;
