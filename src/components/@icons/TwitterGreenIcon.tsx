import { FC, SVGProps, useState } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  url: string;
}

const TwitterGreenIcon: FC<Props> = (props: Props) => {
  const { url } = props;
  const [hover, setHover] = useState<boolean>(false);

  return (
    <a
      href={url}
      rel="noreferrer"
      target="_blank"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="38"
        viewBox="160 0 60 38"
        fill="none"
      >
        <path
          d="M165 5L170 0H220V27L217.5 29.5L215 32H160V5H165Z"
          fill="#124835"
          className={`transition-200 ${hover ? "opacity-100" : "opacity-60"}`}
        />
        <rect x="160" y="36" width="60" height="2" fill="#124835" />

        <rect x="215" y="2" width="3" height="3" fill="#124835" />
        <rect x="215" y="7" width="3" height="3" fill="#124835" />

        <path
          d="M191.153 14.928L196.252 9H195.044L190.616 14.1472L187.079 9H183L188.348 16.7835L183 23H184.209L188.885 17.5643L192.62 23H196.699L191.153 14.928ZM189.497 16.8521L188.956 16.077L184.644 9.90978H186.5L189.98 14.887L190.522 15.662L195.045 22.1316H193.188L189.497 16.8521Z"
          fill="#FFFEF3"
          fillOpacity="0.85"
        />
      </svg>
    </a>
  );
};

export default TwitterGreenIcon;
