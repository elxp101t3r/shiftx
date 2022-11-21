import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Products</title>
        <meta name="description" content="Products"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto">
          <h1 className="h-1">v1.0.0</h1>
      </main>
    </div>
  );
};

export default Home;