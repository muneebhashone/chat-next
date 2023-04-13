import Head from "next/head";
import useUserStore from "@/stores/useUserStore";
import { Layout } from "@/components/Layout";
import { Box } from "@chakra-ui/react";

export default function Home() {
  const currentUser = useUserStore((state) => state.currentUser);

  return (
    <>
      <Head>
        <title>Next Chakra Starter Template</title>
        <meta name="description" content="next chakra starter template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <Box>Hi There</Box>
        </Layout>
      </main>
    </>
  );
}
