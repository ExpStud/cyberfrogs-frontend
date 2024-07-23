import { FC } from "react";

interface VariableLabelProps {
  label: string;
  variable: number | string | undefined;
  emptyMessage?: string;
}
const VariableLabel: FC<VariableLabelProps> = (props: VariableLabelProps) => {
  const { label, variable, emptyMessage } = props;
  return (
    <div className="flex w-full gap-6 justify-between text-sm md:text-base">
      <p
        className={
          variable ? "text-cf-white whitespace-nowrap" : "text-cf-white/50"
        }
      >
        {label}
      </p>
      <p
        className={
          variable
            ? "text-cf-gold whitespace-nowrap overflow-hidden text-ellipsis"
            : "text-cf-white/50"
        }
      >
        {variable ?? emptyMessage ?? "N/A"}
      </p>
    </div>
  );
};

export default VariableLabel;
