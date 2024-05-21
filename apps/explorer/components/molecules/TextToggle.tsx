import { Dispatch, SetStateAction, FC } from "react";

interface Props {
  overviewToggle: boolean;
  setOverviewToggle: Dispatch<SetStateAction<boolean>>;
}

const TextToggle: FC<Props> = (props: Props) => {
  const { overviewToggle, setOverviewToggle } = props;

  return (
    <div className="flex gap-10 text-xl text-cf-white/50 font-rajdhani-bold uppercase">
      <p
        className={`transition-200 ${
          overviewToggle
            ? " text-cf-white cursor-default"
            : "cursor-pointer hover:text-cf-white/75"
        }`}
        onClick={() => setOverviewToggle(true)}
      >
        Overview
      </p>
      <p
        className={`transition-200 ${
          !overviewToggle
            ? " text-cf-white cursor-default"
            : "cursor-pointer hover:text-cf-white/75"
        }`}
        onClick={() => setOverviewToggle(false)}
      >
        Attributes
      </p>
    </div>
  );
};
export default TextToggle;
