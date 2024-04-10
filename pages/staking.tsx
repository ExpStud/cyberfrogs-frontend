import { GetServerSideProps, NextPage } from "next";
import { PageLayout } from "src/components";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { res } = context;

  // Redirect to the new URL
  res.writeHead(301, { Location: "https://legacy.cyberfrogs.io/staking" });
  res.end();

  // You should return an object from getServerSideProps
  return { props: {} };
};

const Staking: NextPage = () => {
  return (
    <PageLayout>
      <></>
    </PageLayout>
  );
};
export default Staking;
