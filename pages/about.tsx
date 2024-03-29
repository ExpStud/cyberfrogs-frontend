import { PageLayout, AboutView } from "@components";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const About: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([false, false]);

  useEffect(() => {
    console.log("assets ", assets);
  }, [assets]);
  return (
    <PageLayout headerType="absolute" assets={assets}>
      <AboutView setAssets={setAssets} />
    </PageLayout>
  );
};

export default About;
