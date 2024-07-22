import { FC, HTMLAttributes } from "react";

interface ShareButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const ShareButton: FC<ShareButtonProps> = (props: ShareButtonProps) => {
  const { ...buttonProps } = props;
  return (
    <button
      className="button-transition relative flex items-center justify-center bg-transparent border-0 p-0 cursor-pointer"
      style={{ width: "115px", height: "32px" }}
      {...buttonProps}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="115"
        height="32"
        viewBox="0 0 115 32"
        fill="none"
        className="absolute top-0 left-0"
      >
        <path
          d="M5 5L10 0H115V27L112.5 29.5L110 32H0V5H5Z"
          fill="#124835"
          fillOpacity="0.65"
        />
      </svg>
      <span className="z-10 text-sm font-semibold text-white uppercase">
        Share on X
      </span>
    </button>
  );
};

export default ShareButton;
