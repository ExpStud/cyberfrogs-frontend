import { FC } from "react";
import { Attribute } from "@types";
import { motion } from "framer-motion";

interface AttributeProps {
  data: Attribute;
  attrsLength: number;
}
const AttributeItem: FC<AttributeProps> = (props: AttributeProps) => {
  const { data, attrsLength } = props;

  //TODO: add percentage and sol value
  const percentage = Math.floor(Math.random() * 100) + 1;
  const solValue = 42.0;
  const animatedWidth = (percentage / 100) * 375;

  return (
    <div
      className={`flex flex-col gap-0 mb-3 text-sm 2xl:text-base ${
        attrsLength < 9 ? "items-start" : ""
      }`}
    >
      <p className="text-cf-white whitespace-nowrap text-ellipsis">
        {data.trait_type}{" "}
        <span className="text-cf-gold ml-2">{data.value}</span>
      </p>
      <p className="text-cf-white/50">
        {percentage}% ({solValue} SOL)
      </p>
      {/* progress bar */}
      <svg
        width="375"
        height="4"
        viewBox="0 0 375 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`mt-2 w-full`}
      >
        <rect width="375" height="4" fill="#081F17" />
        <motion.rect
          initial={{ width: 0 }}
          animate={{ width: animatedWidth }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          height="4"
          fill="#FFF79E"
        />
      </svg>
    </div>
  );
};

export default AttributeItem;
