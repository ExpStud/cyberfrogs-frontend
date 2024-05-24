import { FC, InputHTMLAttributes, useEffect } from "react";
import debounce from "lodash.debounce";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  max?: number;
  handleInput: (number: number) => void;
}

const NumberInput: FC<Props> = (props: Props) => {
  const { max = 10000, handleInput, ...componentProps } = props;

  //search after 1 second of using the input
  const debouncer = debounce((value) => handleInput(value), 1000);

  //prevent keys
  const onKeyDown = (event: React.KeyboardEvent): void => {
    if (
      !/[0-9]/.test(event.key) &&
      event.key !== "ArrowUp" &&
      event.key !== "ArrowDown" &&
      event.key !== "Backspace" &&
      event.key !== "Delete"
    ) {
      event.preventDefault();
    }
  };

  //add max length check
  const onInput = (event: React.FormEvent<HTMLInputElement>): void => {
    if (Number((event.target as HTMLInputElement).value) > max) {
      (event.target as HTMLInputElement).value = max.toString();
    } else {
      debouncer(Number((event.target as HTMLInputElement).value));
    }
  };

  useEffect(() => {
    return () => {
      debouncer.cancel();
    };
  }, [debouncer]);

  return (
    <input
      className={`hide-spinner z-[1] bg-cf-green-999 border border-cf-green-800 text-cf-white/50 w-full h-[40px] text-base uppercase pl-4 pr-12 
        active:outline-none focus:outline-none focus:ring-0 focus:border-cf-gold ${componentProps.className}`}
      onKeyDown={(e) => onKeyDown(e)}
      onInput={(e) => onInput(e)}
      placeholder={componentProps.placeholder}
      type="number"
      min={1}
      max={max}
      disabled={componentProps.disabled}
    />
  );
};

export default NumberInput;
