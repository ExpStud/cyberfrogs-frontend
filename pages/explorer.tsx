import { PageLayout } from "@components";
import { ExplorerView } from "@explorer-components";
import { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([false]);

  return (
    <PageLayout absolute assets={assets}>
      <ExplorerView setAssets={setAssets} />
    </PageLayout>
  );
};
export default Home;
