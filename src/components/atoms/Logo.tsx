import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Logo: FC = () => {
  return (
    <div className="my-0 flex items-center gap-2 cursor-pointer">
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
