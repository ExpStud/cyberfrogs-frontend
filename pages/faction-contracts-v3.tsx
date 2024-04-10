import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { res } = context;

  // Redirect to the new URL
  res.writeHead(301, {
    Location: "https://legacy.cyberfrogs.io/faction-contracts-v3",
  });
  res.end();

  // You should return an object from getServerSideProps
  return { props: {} };
};
