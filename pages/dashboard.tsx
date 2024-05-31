import { NextPage } from "next";
import { useState } from "react";
import { PageLayout } from "@components";
import { DashboardView } from "@dashboard-components";

const Dashboard: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([]);

  return (
    <PageLayout assets={assets}>
      <DashboardView setAssets={setAssets} />
    </PageLayout>
  );
};
export default Dashboard;
