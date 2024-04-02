import { FC, HTMLAttributes } from "react";
import { socialIcons } from "@constants";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const IconBar: FC<Props> = ({ className }: Props) => {
  return (
    <div className={`flex items-center justify-center gap-5 ${className}`}>
      {socialIcons.map((icon) => (
        <icon.component key={icon.name} url={icon.url} />
      ))}
    </div>
  );
};

export default IconBar;
