import { GetServerSideProps, NextPage } from "next";
import { PageLayout } from "src/components";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { res } = context;

  // Redirect to the new URL
  res.writeHead(301, { Location: "https://legacy.cyberfrogs.io/trait-market" });
  res.end();

  // You should return an object from getServerSideProps
  return { props: {} };
};

const TraitMarket: NextPage = () => {
  return (
    <PageLayout>
      <></>
    </PageLayout>
  );
};
export default TraitMarket;
