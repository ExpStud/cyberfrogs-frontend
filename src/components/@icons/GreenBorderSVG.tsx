import { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  hover?: boolean;
  minX?: number;
}

const GreenBorderSVG: FC<Props> = (props: Props) => {
  const { hover = false, minX = 0 } = props;

  const width = 168 - minX;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height="11"
      viewBox={`${minX} 0 168 11`}
      className={`transition-200 ${
        hover ? "fill-cf-green" : "fill-cf-green-800 "
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
