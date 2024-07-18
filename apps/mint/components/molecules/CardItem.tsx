import { FC } from "react";

interface CardItemProps {
  label: string;
  value: string;
  isValid?: boolean;
}
const CardItem: FC<CardItemProps> = (props: CardItemProps) => {
  const { label, value, isValid = true } = props;
  return (
    <div className="flex justify-start">
      <p
        className={`whitespace-nowrap w-1/2 ${
          isValid ? "text-cf-white " : "text-cf-white/50"
        }`}
      >
        {label}
      </p>
      <p
        className={`ml-1.5 self-start whitespace-nowrap w-1/2 ${
          isValid ? "text-cf-gold " : "text-cf-white/50"
        }`}
      >
        {isValid ? value : "No"}
      </p>
    </div>
  );
};

export default CardItem;
