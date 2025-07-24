import Head from "next/head";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ethel Aqua – Purified Water & Ice</title>
        <meta name="description" content="Ethel Aqua is your trusted supplier of purified water, sparkling drinks, and ice products in South Africa." />
      </Head>
      <main>
        <HeroSection />
      </main>
    </>
  );
}
