import { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  hover?: boolean;
}

const GreenBorderSVG: FC<Props> = (props: Props) => {
  const { hover = false } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="168"
      height="11"
      viewBox="0 0 168 11"
      className={`transition-200 ${
        hover ? "fill-cf-green-light" : "fill-cf-green-dark "
      }`}
    >
      <rect width="168" height="4" />
      <rect x="165" y="8" width="3" height="3" />
      <rect x="160" y="8" width="3" height="3" />
      <rect x="155" y="8" width="3" height="3" />
    </svg>
  );
};

export default GreenBorderSVG;
