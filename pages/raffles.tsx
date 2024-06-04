import { NextPage } from "next";
import { useState } from "react";
import { PageLayout } from "@components";
import { RafflesView } from "@raffles-components";

const Raffles: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([]);

  return (
    <PageLayout assets={assets}>
      <RafflesView setAssets={setAssets} />
    </PageLayout>
  );
};
export default Raffles;
