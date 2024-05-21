import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { HeadingType } from "@types";
import { HeadingData } from "@constants";

const Heading: FC = () => {
  const [data, setData] = useState<HeadingType | null>(null);
  const router = useRouter();

  useEffect(() => {
    //set heading based on path
    const heading = HeadingData.find((h) => h.path === router.asPath);
    setData(heading ?? null);
  }, [router.asPath]);

  return (
    <div className="relative ml-4">
      <h1>{data?.name}</h1>
      {data?.image && (
        <div className="absolute -top-6 -left-4">
          <Image
            src={data.image}
            alt={data.name}
            width={data.imageWidth}
            height={data.imageHeight}
          />
        </div>
      )}
    </div>
  );
};

export default Heading;
