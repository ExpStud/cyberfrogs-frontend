import { PageLayout, LandingView } from "@components";
import { NextPage } from "next";
import { useState } from "react";

const About: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([false]);

  return (
    <PageLayout absolute assets={assets}>
      <LandingView setAssets={setAssets} />
    </PageLayout>
  );
};
export default About;
