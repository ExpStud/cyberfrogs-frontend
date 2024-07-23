import { FC, HTMLAttributes } from "react";

interface VariableLabelProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  variable: number | string | undefined;
  emptyMessage?: string;
  labelWidth?: string;
}
const VariableLabel: FC<VariableLabelProps> = (props: VariableLabelProps) => {
  const { label, variable, emptyMessage, labelWidth = "", ...divProps } = props;
  return (
    <div
      className={`flex w-full gap-3 justify-start text-sm md:text-base ${
        divProps.className ?? ""
      }`}
    >
      <p
        className={`whitespace-nowrap ${
          variable ? "text-cf-white " : "text-cf-white/50"
        } ${labelWidth}`}
      >
        {label}
      </p>
      <p
        className={
          variable
            ? "text-cf-gold whitespace-nowrap overflow-hidden text-ellipsis"
            : "text-cf-white/50 whitespace-nowrap "
        }
      >
        {variable ?? emptyMessage ?? "N/A"}
      </p>
    </div>
  );
};

export default VariableLabel;
