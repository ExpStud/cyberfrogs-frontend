import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props extends React.HTMLProps<HTMLDivElement> {}
const Logo: FC<Props> = (props: Props) => {
  return (
    <div className={`cursor-pointer ${props.className ?? ""}`} {...props}>
      <Link href="/">
        <Image
          src="/images/logo.svg"
          height={80}
          width={101}
          alt="Logo"
          priority
        />
      </Link>
    </div>
  );
};
export default Logo;
