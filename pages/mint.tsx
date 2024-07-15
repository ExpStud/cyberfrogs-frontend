import { NextPage } from "next";
import { useState } from "react";
import { PageLayout } from "@components";
import { MintView } from "@mint-components";

const Mint: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([]);

  return (
    <PageLayout assets={assets} footer={false}>
      <MintView setAssets={setAssets} />
    </PageLayout>
  );
};
export default Mint;
