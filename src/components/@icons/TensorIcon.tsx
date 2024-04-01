import { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  url: string;
}

const TensorIcon: FC<Props> = (props: Props) => {
  const { url } = props;
  return (
    <a href={url} rel="noreferrer" target="_blank">
      <svg
        width="24"
        height="20"
        viewBox="0 0 24 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="icon-opacity"
      >
        <path
          d="M10.5822 0L0.546875 10.0656H4.93417L7.68757 7.31215V17.1054L10.5822 20V0ZM13.7995 0L23.8348 10.0656H19.4475L16.6941 7.31215V17.1054L13.7995 20V0Z"
          fill="white"
        />
      </svg>
    </a>
  );
};

export default TensorIcon;
