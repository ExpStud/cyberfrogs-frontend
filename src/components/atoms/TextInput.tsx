import { FC, InputHTMLAttributes, useState } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  handleInput: (value: string) => void;
}

const NumberInput: FC<Props> = (props: Props) => {
  const { handleInput, ...componentProps } = props;

  const [value, setValue] = useState<string>();

  const charLim: number = 30;

  //add max length check
  const onInput = (event: React.FormEvent<HTMLInputElement>): void => {
    const val = (event.target as HTMLInputElement).value;
    setValue(val);
    handleInput(val);
  };

  return (
    <input
      className={`hide-spinner z-[1] bg-cf-green-950 border border-cf-green-800 text-cf-white/50 w-full h-[40px] text-base uppercase pl-4 pr-12 
    active:outline-none focus:outline-none focus:ring-0 focus:border-cf-gold ${componentProps.className}`}
      onInput={(e) => onInput(e)}
      placeholder={componentProps.placeholder}
      type="text"
      maxLength={charLim}
      disabled={componentProps.disabled}
    />
  );
};

export default NumberInput;
