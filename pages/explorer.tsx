import { PageLayout } from "@components";
import { ExplorerView } from "@explorer-components";
import { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([]);

  return (
    <PageLayout assets={assets} footer={false}>
      <ExplorerView setAssets={setAssets} />
    </PageLayout>
  );
};
export default Home;
